import { companyApi } from '@/api/org';
import type { Company } from '@/api/org/company-api';
import queryKeys from '@/constants/query-keys';
import { type UseQueryOptions, useQuery } from '@tanstack/react-query';

type CompanyQueryOptions = Omit<UseQueryOptions<Company[]>, 'queryKey' | 'queryFn'>;

export const useGetCompany = (options?: CompanyQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: queryKeys.company.all(),
    queryFn: companyApi.getAll,
  });
};
