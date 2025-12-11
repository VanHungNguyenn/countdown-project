import type { CommonResponse } from '@/types';
import axiosClient from '../axios-client';

const URL_API = '/logout';

export function logout(): Promise<CommonResponse<null> | undefined> {
  return axiosClient.post(URL_API);
}
