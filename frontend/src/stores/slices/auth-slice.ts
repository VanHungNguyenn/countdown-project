import type { EmployeeInfo, EmployeeJob } from '@/api/auth/login-api';
import { authStorage } from '@/libs';
import type { StateCreatorWrapper } from '../store-types';
import type { RootState } from '../use-bound-store';

export interface AuthState {
  authStore: {
    employeeInfo?: EmployeeInfo;
    selectedJob?: EmployeeJob;
  };
  authActions: {
    setEmployeeInfo: (data: EmployeeInfo) => void;
    setJob: (data: EmployeeJob) => void;
    logout: () => void;
  };
}

export const createAuthSlice: StateCreatorWrapper<RootState, AuthState> = (set) => ({
  authStore: {
    employeeInfo: undefined,
    selectedJob: undefined,
  },
  authActions: {
    setEmployeeInfo: (data: EmployeeInfo) => {
      set((state: RootState) => {
        state.authStore.employeeInfo = data;
      });
    },
    setJob: (data: EmployeeJob) => {
      set((state: RootState) => {
        state.authStore.selectedJob = data;
      });
    },
    logout: () => {
      set((state: RootState) => {
        state.authStore.employeeInfo = undefined;
        state.authStore.selectedJob = undefined;
      });
      authStorage.removeTokens();
    },
  },
});
