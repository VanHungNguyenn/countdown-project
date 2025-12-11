import { useGetInvoice } from '@/hooks/demo';
import { useEffect, useState } from 'react';
import DemoTableFilter, { type DemoTableFilterPayload } from './components/filter';
import DemoTableList from './components/list';

export default function DemoTablePage() {
  const [filter, setFilter] = useState<DemoTableFilterPayload>({
    invoice: '',
    method: '',
    // page: 1,
    // limit: 10
  });

  // hooks
  const { data: invoices, refetch } = useGetInvoice(filter);

  function handleFilter(payload: DemoTableFilterPayload) {
    console.log('fiter payload: ', payload);
    setFilter({
      ...filter,
      ...payload,
    });
  }

  useEffect(() => {
    refetch();
  }, [filter]);

  return (
    <>
      <DemoTableFilter onFilter={handleFilter} />
      <DemoTableList data={invoices || []} />
    </>
  );
}
