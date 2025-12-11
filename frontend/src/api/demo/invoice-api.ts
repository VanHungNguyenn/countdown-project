import type { DemoTableFilterPayload } from '@/pages/demo/demo-table/components/filter';
import { invoices } from './mock-data';

// const URL_API = '/invoices';

export type Invoice = {
  id: string;
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
};

export async function getAll(filter: DemoTableFilterPayload): Promise<Invoice[]> {
  // const response = await axiosClient.get<CommonResponse<Invoice[]>>(URL_API);
  console.log('call API get /invoices with filter: ', filter);
  const result = invoices.slice(0, Math.floor(Math.random() * 15) + 1);
  return result;
}
