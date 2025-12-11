import type { StateCreatorWrapper } from '../store-types';
import type { RootState } from '../use-bound-store';

export interface HeaderState {
  headerStore: {
    sidebarOpen: boolean;
    mobileMenuOpen: boolean;
    notificationsOpen: boolean;
    profileMenuOpen: boolean;
  };
  headerActions: {
    setSidebarOpen: (open: boolean) => void;
    setMobileMenuOpen: (open: boolean) => void;
    setNotificationsOpen: (open: boolean) => void;
    setProfileMenuOpen: (open: boolean) => void;
  };
}

export const createHeaderSlice: StateCreatorWrapper<RootState, HeaderState> = (set) => ({
  headerStore: { sidebarOpen: true, mobileMenuOpen: false, notificationsOpen: false, profileMenuOpen: false },
  headerActions: {
    setSidebarOpen: (open: boolean) => {
      set((state: RootState) => {
        state.headerStore.sidebarOpen = open;
      });
    },
    setMobileMenuOpen: (open: boolean) => {
      set((state: RootState) => {
        state.headerStore.mobileMenuOpen = open;
      });
    },
    setNotificationsOpen: (open: boolean) => {
      set((state: RootState) => {
        state.headerStore.notificationsOpen = open;
      });
    },
    setProfileMenuOpen: (open: boolean) => {
      set((state: RootState) => {
        state.headerStore.profileMenuOpen = open;
      });
    },
  },
});
