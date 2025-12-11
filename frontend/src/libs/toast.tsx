import i18next from 'i18next';
import { AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

export function showToastError(errorMessage: string | React.ReactNode) {
  toast.custom(() => (
    <div className="flex w-[356px] items-center gap-4 rounded-sm border border-[#FFE0E1] bg-[#FFF0F0] p-4 text-[#E60004] text-sm">
      <AlertTriangle className="h-4 w-4 flex-shrink-0 text-[#E60004]" />

      <div className="flex-1">
        <h4 className="mb-1 font-bold text-sm">{i18next.t('APP.ERROR')}</h4>
        <p className="text-sm">{errorMessage}</p>
      </div>
    </div>
  ));
}
