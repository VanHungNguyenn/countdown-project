import { useContext } from 'react';
import GlobalModalContext from './global-modal-context';

const useGlobalModal = () => {
  const context = useContext(GlobalModalContext);
  if (context === null) {
    throw new Error("useGlobalModal didn't create");
  }

  return context;
};

export default useGlobalModal;
