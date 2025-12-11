import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs';
import { useTranslation } from 'react-i18next';
import useGlobalModal from '../global-modal/use-global-modal';

interface ConfirmModalProps {
  title?: string;
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

function ConfirmModal({ title, message, onCancel, onConfirm }: ConfirmModalProps) {
  const { t } = useTranslation();
  const { closeGlobalModal } = useGlobalModal();

  function handleCancel(open: boolean) {
    if (!open) return;

    // If the modal is closed, call the onClose callback if provided
    // and close the global modal
    onCancel?.();
    closeGlobalModal();
  }

  function handleConfirm() {
    onConfirm?.();
    closeGlobalModal();
  }

  const variantClass = 'bg-primary'; // Default variant class
  const variantTitle = t('APP.WARNING');

  return (
    <AlertDialog open={true} onOpenChange={handleCancel}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="overflow-hidden border-0 px-0 pt-0 sm:max-w-[360px]">
        <AlertDialogHeader>
          <AlertDialogTitle
            ref={(el) => el?.focus()}
            tabIndex={-1}
            className={cn('p-2 text-center text-sm text-white', variantClass)}
          >
            {title || variantTitle}
          </AlertDialogTitle>
          <AlertDialogDescription
            className="p-4 pt-6 text-center text-black"
            dangerouslySetInnerHTML={{ __html: message }}
          ></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction asChild>
            <Button
              variant="secondary"
              className={cn(`${variantClass}`, `hover:${variantClass}`)}
              onClick={handleCancel.bind(null, true)}
            >
              {t('APP.CANCEL')}
            </Button>
          </AlertDialogAction>
          <AlertDialogAction asChild>
            <Button className={cn(`${variantClass}`, `hover:${variantClass} min-w-[102px]`)} onClick={handleConfirm}>
              {t('APP.OK')}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmModal;
