import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/libs/utils';
import { type Control, type FieldValues, type Path, useController } from 'react-hook-form';

//T is dataType of form
export type InputFieldProps<T extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> & {
  name: Path<T>;
  control: Control<T>;
};

export function InputField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  ...props
}: InputFieldProps<T>) {
  const {
    field: { onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
    externalOnChange?.(e);
  }

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            id="txt-cd"
            type="text"
            value={field.value}
            onChange={handleChange}
            onBlur={onBlur}
            {...props}
            className={cn(props.className, 'bg-white')}
          />
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
