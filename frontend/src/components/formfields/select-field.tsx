import { FormControl, FormField } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/libs/utils';
import { type Control, type FieldValues, type Path, useController } from 'react-hook-form';

//T is dataType of form
export type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  data?: { label: string; value: string }[];
  placeholder?: string;
  ref?: React.RefObject<HTMLButtonElement | null>;
};

export function SelectField<T extends FieldValues>({
  name,
  control,
  className,
  data = [],
  placeholder,
  ref,
}: SelectFieldProps<T>) {
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className={cn(className, 'w-full bg-white')}>
              <SelectTrigger ref={ref}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error?.message && (
        <>
          <span></span>
          <span className="pt-2 text-red-500 text-xs">{error.message}</span>
        </>
      )}
    </>
  );
}
