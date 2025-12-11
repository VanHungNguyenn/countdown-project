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

interface AlertModalProps {
  variant?: 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
}

function AlertModal({ variant = 'info', title, message, onClose }: AlertModalProps) {
  const { t } = useTranslation();
  const { closeGlobalModal } = useGlobalModal();

  function handleClose(open: boolean) {
    if (!open) return;

    // If the modal is closed, call the onClose callback if provided
    // and close the global modal
    onClose?.();
    closeGlobalModal();
  }

  let variantClass = 'bg-primary'; // Default variant class
  switch (variant) {
    case 'error':
      variantClass = 'bg-red-500'; // Example for error variant
      break;
    case 'warning':
      variantClass = 'bg-amber-500'; // Example for warning variant
      break;
    case 'info':
      variantClass = 'bg-primary'; // Example for info variant
      break;
    default:
      break;
  }

  let variantTitle = t('APP.INFO');
  if (variant === 'error') {
    variantTitle = t('APP.ERROR');
  } else if (variant === 'warning') {
    variantTitle = t('APP.WARNING');
  }

  return (
    <AlertDialog open={true} onOpenChange={handleClose}>
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
              onClick={handleClose.bind(null, true)}
            >
              {t('APP.OK')}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertModal;
