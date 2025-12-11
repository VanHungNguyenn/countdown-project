import type { StateCreatorWrapper } from '../store-types';
import type { RootState } from '../use-bound-store';

export interface CounterState {
  counterStore: {
    count: number;
  };
  counterActions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

export const createCounterSlice: StateCreatorWrapper<RootState, CounterState> = (set) => ({
  counterStore: { count: 0 },
  counterActions: {
    increment: () => {
      set((state: RootState) => {
        state.counterStore.count++;
      });
    },
    decrement: () => {
      set((state: RootState) => {
        state.counterStore.count--;
      });
    },
    reset: () => {
      set((state: RootState) => {
        state.counterStore.count = 0;
      });
    },
  },
});
