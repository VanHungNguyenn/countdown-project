import type { CommonResponse } from '@/types';
import { z } from 'zod';
import axiosClient from '../axios-client';

const URL_API = '/companies';

// companySchema
export const companySchema = z.object({
  id: z.number(),
  cd: z.string(),
  name: z.string(),
});

export type Company = z.infer<typeof companySchema>;

const companyListSchema = companySchema.array();

export async function getAll(): Promise<Company[]> {
  const response = await axiosClient.get<CommonResponse<Company[]>>(URL_API);
  let result = [] as Company[];

  if (response) {
    // parse response data
    const parsed = companyListSchema.safeParse(response.data);

    if (!parsed.success) {
      console.error(parsed.error);
      throw new Error('Invalid response data structure');
    }

    result = parsed.data;
  }

  return result;
}
