import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type AuthState, createAuthSlice } from './slices';
import { type CounterState, createCounterSlice } from './slices/counter-slice';
import { type HeaderState, createHeaderSlice } from './slices/header-slice';

export type RootState = CounterState & HeaderState & AuthState;

export const useBoundStore = create<RootState>()(
  devtools(
    immer(
      persist(
        (...args) => ({
          ...createCounterSlice(...args),
          ...createHeaderSlice(...args),
          ...createAuthSlice(...args),
        }),
        {
          name: 'sms-store',
          storage: createJSONStorage(() => localStorage),
          partialize: (state): Partial<RootState> => ({
            // counterStore: state.counterStore,
            authStore: state.authStore,
          }),
        },
      ),
    ),
    {
      name: 'sms-devtools',
      enabled: import.meta.env.MODE === 'development',
    },
  ),
);
