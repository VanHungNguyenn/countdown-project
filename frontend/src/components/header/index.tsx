import { Button } from '@/components/ui/button';
import { APP_NAME, APP_VERSION, ROUTE_PATH } from '@/constants';
import { useLogout } from '@/hooks/auth';
import { useBoundStore } from '@/stores';
import { selectAuthEmployeeInfo, selectAuthSelectedJob } from '@/stores/selectors/auth-selectors';
import type { CommonResponse } from '@/types';
import { AxiosError } from 'axios';
import clsx from 'clsx';
import { Loader2Icon, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css';
export default function Header() {
  const { t } = useTranslation();

  const MAIN_MENU = [
    {
      groupName: t('HEADER.MAIN_MENU.DASHBOARD'),
      href: ROUTE_PATH.DASHBOARD.INDEX,
    },
    {
      groupName: t('HEADER.MAIN_MENU.REPORT'),
      href: ROUTE_PATH.REPORT.INDEX,
      links: [
        {
          label: t('HEADER.MAIN_MENU.REPORT_REPORT1'),
          href: ROUTE_PATH.REPORT.REPORT1,
        },
        {
          label: t('HEADER.MAIN_MENU.REPORT_REPORT2'),
          href: ROUTE_PATH.REPORT.REPORT2,
        },
      ],
    },
    {
      groupName: t('HEADER.MAIN_MENU.SYSTEM'),
      href: ROUTE_PATH.SYSTEM.INDEX,
    },
    {
      groupName: t('HEADER.MAIN_MENU.DEMO'),
      href: ROUTE_PATH.DEMO.INDEX,
      links: [
        {
          label: t('HEADER.MAIN_MENU.DEMO_TABLE'),
          href: ROUTE_PATH.DEMO.TABLE,
        },
        {
          label: t('HEADER.MAIN_MENU.DEMO_FORM'),
          href: ROUTE_PATH.DEMO.FORM,
        },
      ],
    },
  ];

  // selectors
  const employeeInfo = useBoundStore(selectAuthEmployeeInfo);
  const selectedJob = useBoundStore(selectAuthSelectedJob);

  // hooks
  const logoutMutation = useLogout();

  async function handleLogout() {
    try {
      // do logout
      await logoutMutation.mutateAsync();
    } catch (e: any) {
      if (e instanceof AxiosError) {
        // Handle Axios error
        const errorData = e.response?.data as CommonResponse<any>;
        if (errorData.message) {
          console.error('Logout error:', errorData.message);
        }
      } else {
        // Handle other errors
        console.error('An unexpected error occurred:', e);
      }
    }
  }

  return (
    <header className="relative bg-white shadow">
      <div className="relative flex items-center justify-between px-4 py-2">
        <div className="flex">
          <h1 className="font-bold text-2xl text-primary">{APP_NAME}</h1>
          <span>v{APP_VERSION}</span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-end gap-1">
            <div className="mr-4 inline-flex items-center gap-4 text-xs">
              <div>
                <span className="font-medium">{t('HEADER.LABEL.LAST_LOGIN')}</span>:&nbsp;
                <span className="text-primary">{employeeInfo?.lastTimeLogin}</span>
              </div>
              <div>
                <span className="font-medium">{t('HEADER.LABEL.COMPANY_NAME')}</span>:&nbsp;
                <span className="text-primary">{selectedJob?.companyName}</span>
              </div>
              <div>
                <span className="font-medium">{t('HEADER.LABEL.DEPARTMENT_NAME')}</span>:&nbsp;
                <span className="text-primary">{selectedJob?.departmentName}</span>
              </div>
            </div>
            <div className="mr-4 inline-flex items-center gap-4 text-xs">
              <div>
                <span className="font-medium">{t('HEADER.LABEL.JOB_NAME')}</span>:&nbsp;
                <span className="text-primary">{selectedJob?.jobName}</span>
              </div>
              <div>
                <span className="font-medium">{t('HEADER.LABEL.EMPLOYEE_NAME')}</span>:&nbsp;
                <span className="text-primary">{employeeInfo?.employeeName}</span>
              </div>
              <div>
                <span className="font-medium">{t('HEADER.LABEL.EMPLOYEE_CD')}</span>:&nbsp;
                <span className="text-primary">{employeeInfo?.employeeCd}</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} disabled={logoutMutation.isPending}>
            <LogOut /> {t('HEADER.LABEL.LOGOUT')}
            {logoutMutation.isPending && <Loader2Icon className="animate-spin" />}
          </Button>
        </div>
      </div>
      <nav className="main-menu px-4">
        <ul className="flex space-x-4">
          {MAIN_MENU.map((group, groupIndex) => (
            <li key={groupIndex}>
              <span className={clsx({ active: location.pathname.startsWith(group.href) })}>{group.groupName}</span>
              {group.links && (
                <ul>
                  {group.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className={clsx({ active: location.pathname === link.href })}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {/* <li>
            <span className="active">Home</span>
            <ul>
              <li>
                <Link className="active" to="/home/section1">
                  Section 1
                </Link>
              </li>
              <li>
                <a href="/home/section2">Section 2</a>
              </li>
            </ul>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Demo</span>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
