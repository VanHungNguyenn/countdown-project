import type { EmployeeJob } from '@/api/auth/login-api';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

interface SelectJobModalProps {
  jobList: EmployeeJob[];
  onClose?: () => void;
  onReflect?: (jobId: number) => void;
}

const FormSchema = z.object({
  jobId: z.string(),
});

function SelectJobModal({ jobList, onClose, onReflect }: SelectJobModalProps) {
  const { t } = useTranslation();

  // init form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jobId: jobList.length > 0 ? jobList[0].employeeJobId.toString() : '',
    },
  });

  // events
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
    onReflect?.(Number(data.jobId));
    // handleOpenChange(false);
    // toast("You submitted the following values", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  function handleOpenChange(open: boolean) {
    if (!open && onClose) {
      onClose();
    }
  }

  return (
    <Dialog open={true} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[540px]"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription
            className="text-center font-bold text-base text-primary"
            dangerouslySetInnerHTML={{ __html: t('SELECT_JOB_MODAL.HEADER_TITLE') }}
          ></DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form id="select-job-form" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="jobId"
                  render={({ field }) => {
                    return (
                      <>
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col"
                            >
                              {jobList.map((item, index) => {
                                return (
                                  <FormItem key={index} className="flex items-center gap-3">
                                    <FormControl>
                                      <RadioGroupItem value={item.employeeJobId.toString() || ''} />
                                    </FormControl>
                                    <FormLabel className="font-normal">{`
                                  ${item.companyName}  ${item.departmentName} ${
                                    item.jobId === null ? '「-」' : item.jobName
                                  }`}</FormLabel>
                                  </FormItem>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    );
                  }}
                />
              </div>
              <div className="text-center">
                <Button type="submit">{t('APP.SELECT')}</Button>
              </div>
            </form>
          </Form>
        </div>
        {/* <DialogFooter className="sm:justify-center"></DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

export default SelectJobModal;
