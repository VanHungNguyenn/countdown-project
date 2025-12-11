import { authApi } from '@/api/auth';
import { ROUTE_PATH } from '@/constants';
import { useBoundStore } from '@/stores';
import { selectAuthActions } from '@/stores/selectors/auth-selectors';
import { type UseMutationResult, useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogout = (): UseMutationResult<void, AxiosError, void> => {
  const navigate = useNavigate();

  // selectors
  const authActions = useBoundStore(selectAuthActions);

  return useMutation({
    mutationFn: async () => {
      await authApi.logout();
      authActions.logout();
      navigate(ROUTE_PATH.AUTH.LOGIN);
    },
  });
};
