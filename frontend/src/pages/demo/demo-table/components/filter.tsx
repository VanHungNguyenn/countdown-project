import { InputField, SelectField } from '@/components/formfields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { methodSource } from '../mock-data';

export type DemoTableFilterPayload = {
  invoice: string;
  method: string;
};

interface DemoTableFilterProps {
  onFilter?: (payload: DemoTableFilterPayload) => void;
}

function DemoTableFilter({ onFilter }: DemoTableFilterProps) {
  // refs
  const selectTriggerRef = useRef<HTMLButtonElement>(null);

  // form schema
  const FormSchema = z.object({
    invoice: z.string(),
    method: z.string(),
  });

  // init form
  const form = useForm<DemoTableFilterPayload>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      invoice: '',
      method: '',
    },
  });

  async function onSubmit(data: DemoTableFilterPayload) {
    onFilter?.(data);
  }

  return (
    <div className="mb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
          {/* invoice */}
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-4">
              <Label htmlFor="txt-invoice" className="cursor-pointer justify-end">
                Invoice
              </Label>
              <InputField
                id="txt-invoice"
                name="invoice"
                className="w-[200px]"
                control={form.control}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label
                id="lbl-method"
                onClick={() => {
                  selectTriggerRef.current?.click();
                }}
                className="cursor-pointer justify-end"
              >
                Method
              </Label>
              <SelectField
                name="method"
                control={form.control}
                ref={selectTriggerRef}
                placeholder="select a method"
                data={methodSource}
              />
            </div>
            <div>
              <Button type="submit" variant="default" disabled={form.formState.isSubmitting}>
                Search
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default memo(DemoTableFilter);
