import { authApi } from '@/api/auth';
import type { LoggedInUserInfo, LoginPayload } from '@/api/auth/login-api';
import { authStorage } from '@/libs';
import { useBoundStore } from '@/stores';
import { selectAuthActions } from '@/stores/selectors/auth-selectors';
import { type UseMutationResult, useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useLogin = (): UseMutationResult<LoggedInUserInfo | undefined, AxiosError, LoginPayload> => {
  // selectors
  const authActions = useBoundStore(selectAuthActions);

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const result = await authApi.login(payload);
      if (result) {
        authStorage.setTokens(result.token);
        authActions.setEmployeeInfo(result.employeeInfo);
      }
      return result;
    },
  });
};
