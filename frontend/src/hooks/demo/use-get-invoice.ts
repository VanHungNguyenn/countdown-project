import { invoiceApi } from '@/api/demo';
import type { Invoice } from '@/api/demo/invoice-api';
import queryKeys from '@/constants/query-keys';
import type { DemoTableFilterPayload } from '@/pages/demo/demo-table/components/filter';
import { type UseQueryOptions, useQuery } from '@tanstack/react-query';

type InvoiceQueryOptions = Omit<UseQueryOptions<Invoice[]>, 'queryKey' | 'queryFn'>;

export const useGetInvoice = (filter: DemoTableFilterPayload, options?: InvoiceQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: queryKeys.invoice.all(filter),
    queryFn: () => invoiceApi.getAll(filter),
  });
};
