import type { RootState } from '../use-bound-store';

// selectors for data
export const selectAuthEmployeeInfo = (state: RootState) => state.authStore.employeeInfo;
export const selectAuthSelectedJob = (state: RootState) => state.authStore.selectedJob;

// selectors for actions
export const selectAuthActions = (state: RootState) => state.authActions;
