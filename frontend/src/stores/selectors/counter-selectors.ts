import type { RootState } from '../use-bound-store';

// selectors for data
export const selectCounterCount = (state: RootState) => state.counterStore.count;

// selectors for actions
export const selectCounterActions = (state: RootState) => state.counterActions;
