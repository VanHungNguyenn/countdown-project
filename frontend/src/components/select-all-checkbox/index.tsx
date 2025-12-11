import { cn } from '@/libs/utils';
import { CheckIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

type SelectAllState = true | false | 'indeterminate';

export interface SelectAllCheckboxRef {
  setChecked: (value: boolean | 'indeterminate') => void;
  getChecked: () => boolean | 'indeterminate';
}

interface SelectAllCheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export const SelectAllCheckbox = React.forwardRef<SelectAllCheckboxRef, SelectAllCheckboxProps>(
  ({ className, onCheckedChange, ...props }, ref) => {
    const [checked, setChecked] = React.useState<SelectAllState>(false);

    React.useImperativeHandle(ref, () => ({
      setChecked: (value) => setChecked(value),
      getChecked: () => checked,
    }));

    const handleClick = React.useCallback(() => {
      let newChecked = false;
      if (checked === 'indeterminate') {
        newChecked = true;
      } else {
        newChecked = !checked;
      }

      setChecked(newChecked);
      onCheckedChange?.(newChecked);
    }, [checked, onCheckedChange]);

    return (
      <div
        className={cn(
          'peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40',
          className,
        )}
        // role="checkbox"
        aria-checked={checked === 'indeterminate' ? 'mixed' : checked}
        data-state={checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
        onClick={handleClick}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-center text-current">
          {checked === 'indeterminate' ? (
            <MinusIcon color="#fff" absoluteStrokeWidth={true} strokeWidth={4} className="size-3.5" />
          ) : checked === true ? (
            <CheckIcon color="#fff" className="size-3.5" />
          ) : null}
        </div>
      </div>
    );
  },
);
