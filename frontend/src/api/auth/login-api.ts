import type { CommonResponse } from '@/types';
import { z } from 'zod';
import axiosClient from '../axios-client';

const URL_API = '/login';

export type LoginPayload = {
  company_id: string; //ログイン画面.会社コード,
  cd: string; //ログイン画面.社員コード
  password: string; //ログイン画面.パスワード
  preym: number; //0 ※前月の組織でログインに、チェックが付いている場合preymは1とする。
};

const employeeInfoSchema = z
  .object({
    employee_id: z.number(),
    employee_cd: z.string(),
    employee_name: z.string(),
    data_date: z.string(),
    previous_month_flg: z.number(),
    last_time_login: z.string(),
  })
  .transform((data) => ({
    employeeId: data.employee_id,
    employeeCd: data.employee_cd,
    employeeName: data.employee_name,
    dataDate: data.data_date,
    previousMonthFlg: data.previous_month_flg,
    lastTimeLogin: data.last_time_login,
  }));

export type EmployeeInfo = z.infer<typeof employeeInfoSchema>;

const tokenSchema = z
  .object({
    access: z.string(),
    // refresh: z.string(),
  })
  .transform((data) => ({
    access: data.access,
    // refresh: data.refresh,
  }));

export type Token = z.infer<typeof tokenSchema>;

const employeeJobSchema = z
  .object({
    employee_job_id: z.number(),
    employee_id: z.number(),
    job_id: z.number().nullable(),
    job_cd: z.string().nullable(),
    job_name: z.string().nullable(),
    department_name: z.string(),
    department_cd: z.string(),
    company_cd: z.string(),
    department_id: z.number(),
    company_id: z.number(),
    company_name: z.string(),
    level: z.string(),
  })
  .transform((data) => ({
    employeeJobId: data.employee_job_id,
    employeeId: data.employee_id,
    jobId: data.job_id,
    jobCd: data.job_cd,
    jobName: data.job_name,
    departmentName: data.department_name,
    departmentCd: data.department_cd,
    companyCd: data.company_cd,
    departmentId: data.department_id,
    companyId: data.company_id,
    companyName: data.company_name,
    level: data.level,
  }));

export type EmployeeJob = z.infer<typeof employeeJobSchema>;

export const loggedInUserInfoSchema = z
  .object({
    employee_info: employeeInfoSchema,
    token: tokenSchema,
    employee_jobs: z.array(employeeJobSchema),
  })
  .transform((data) => ({
    employeeInfo: data.employee_info,
    token: data.token,
    employeeJobs: data.employee_jobs,
  }));

export type LoggedInUserInfo = z.infer<typeof loggedInUserInfoSchema>;

export async function login(payload: LoginPayload): Promise<LoggedInUserInfo | undefined> {
  let result = undefined;

  const response = await axiosClient.post<CommonResponse<LoggedInUserInfo> | undefined>(URL_API, payload);
  if (response) {
    const parsed = loggedInUserInfoSchema.safeParse(response.data);
    if (!parsed.success) {
      console.error(parsed.error);
      throw new Error('Invalid response data structure');
    }

    result = parsed.data;
  }

  return result;
}
