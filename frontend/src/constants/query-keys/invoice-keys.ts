import type { DemoTableFilterPayload } from '@/pages/demo/demo-table/components/filter';

export const invoiceQueryKeys = {
  all: (filter: DemoTableFilterPayload) => ['invoices', filter] as const,
  // detail: (id: string) => ['companies', 'detail', id] as const,
  // create: () => ['companies', 'create'] as const,
  // update: (id: string) => ['companies', 'update', id] as const,
  // delete: (id: string) => ['companies', 'delete', id] as const,
};
