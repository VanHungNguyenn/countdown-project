import type { StateCreator } from 'zustand';

export type StateCreatorWrapper<S, R> = StateCreator<S, [['zustand/immer', never]], [], R>;
