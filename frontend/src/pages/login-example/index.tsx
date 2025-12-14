import type { EmployeeJob, LoginPayload } from '@/api/auth/login-api';
import AlertModal from '@/components/alert-modal';
import { InputField, SelectField } from '@/components/formfields';
import useGlobalModal from '@/components/global-modal/use-global-modal';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/auth';
import { useGetCompany } from '@/hooks/org/use-get-company';
import { useBoundStore } from '@/stores';
import { selectAuthActions } from '@/stores/selectors/auth-selectors';
import { BgPattern } from '@/theme/icons';
import type { CommonResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Loader2Icon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import SelectJobModal from './components/SelectJobModal';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showGlobalModal } = useGlobalModal();

  // refs
  const selectTriggerRef = useRef<HTMLButtonElement>(null);

  // hooks
  const loginMutation = useLogin();
  const { data: companyList } = useGetCompany();

  // selectors
  const authActions = useBoundStore(selectAuthActions);

  // states
  const [jobList, setJobList] = useState<EmployeeJob[]>([]);
  const [showSelectJobModal, setShowSelectJobModal] = useState(false);

  // form schema
  const FormSchema = z.object({
    company_id: z.string().nonempty(t('LOGIN_PAGE.VALID.REQUIRED_COMPANY')),
    cd: z.string().nonempty(t('LOGIN_PAGE.VALID.REQUIRED_EMPLOYEE_CODE')),
    password: z.string().nonempty(t('LOGIN_PAGE.VALID.REQUIRED_PASSWORD')),
  });

  // init form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      company_id: '',
      cd: '',
      password: '',
    },
  });

  // effects
  useEffect(() => {
    if (selectTriggerRef.current) {
      selectTriggerRef.current.focus();
    }
  }, []);

  // events
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // compose payload
    const payload = {
      company_id: data.company_id,
      cd: data.cd,
      password: data.password,
      preym: 0,
    } as LoginPayload;
    try {
      // do login
      const loggedInUserInfo = await loginMutation.mutateAsync(payload);
      if (loggedInUserInfo) {
        if (loggedInUserInfo.employeeJobs.length === 1) {
          authActions.setJob(loggedInUserInfo.employeeJobs[0]);
          navigate('/', { replace: true });
        } else {
          setJobList(loggedInUserInfo.employeeJobs);
          // show select job modal
          setShowSelectJobModal(true);
        }
      }
    } catch (e: any) {
      if (e instanceof AxiosError) {
        // Handle Axios error
        const errorData = e.response?.data as CommonResponse<any>;
        if (errorData.message) {
          showGlobalModal(() => <AlertModal variant="error" message={errorData.message} />);
        }
      } else {
        // Handle other errors
        console.error('An unexpected error occurred:', e);
      }
    }
  }

  function handleCloseSelectJobModal() {
    setShowSelectJobModal(false);
  }

  function handleSelectJob(jobId: number) {
    setShowSelectJobModal(false);

    const selectedJob = jobList.find((job) => job.employeeJobId === jobId);
    if (selectedJob) {
      authActions.setJob(selectedJob);
      navigate('/', { replace: true });
    }
  }

  // compose data for render
  function getCompanySource() {
    const companySource = [];
    if (companyList) {
      companySource.push(
        ...companyList.map((company) => ({
          value: company.cd,
          label: company.name,
        })),
      );
    }

    return companySource;
  }

  // data for render
  const companySource = getCompanySource();

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          <BgPattern />
        </div>
        <div className="relative z-40 w-[320px] rounded-xl border border-gray-100 bg-[#F5F7FF] p-8 md:w-[480px]">
          <h1 className="mb-6 text-center font-bold text-3xl text-blue-900">SMSシステム</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
              {/* company */}
              <div className="mb-4 grid w-full max-w-sm grid-cols-[24%_68%] items-center justify-center gap-x-4">
                <Label
                  id="lbl-company"
                  onClick={() => {
                    selectTriggerRef.current?.click();
                  }}
                  className="cursor-pointer justify-end"
                >
                  {t('LOGIN_PAGE.LABEL.COMPANY_NAME')}
                </Label>
                <SelectField
                  name="company_id"
                  control={form.control}
                  ref={selectTriggerRef}
                  placeholder={t('LOGIN_PAGE.WARN.SELECT_COMPANY')}
                  data={companySource}
                />
              </div>
              {/* employee_cd */}
              <div className="mb-4 grid w-full max-w-sm grid-cols-[24%_68%] items-center justify-center gap-x-4">
                <Label htmlFor="txt-cd" className="cursor-pointer justify-end">
                  {t('LOGIN_PAGE.LABEL.EMPLOYEE_CODE')}
                </Label>
                <InputField id="txt-cd" name="cd" control={form.control} autoComplete="off" />
              </div>
              {/* password */}
              <div className="mb-4 grid w-full max-w-sm grid-cols-[24%_68%] items-center justify-center gap-x-4">
                <Label htmlFor="txt-password" className="cursor-pointer justify-end">
                  {t('LOGIN_PAGE.LABEL.PASSWORD')}
                </Label>
                <InputField
                  id="txt-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  control={form.control}
                />
              </div>
              <div className="text-center">
                <Button type="submit" variant="default" disabled={form.formState.isSubmitting}>
                  {t('LOGIN_PAGE.LABEL.LOGIN')}
                  {form.formState.isSubmitting && <Loader2Icon className="animate-spin" />}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      {showSelectJobModal &&
        createPortal(
          <SelectJobModal jobList={jobList} onClose={handleCloseSelectJobModal} onReflect={handleSelectJob} />,
          document.body,
        )}
    </>
  );
}
