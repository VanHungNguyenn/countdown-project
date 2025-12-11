import type { RootState } from '../use-bound-store';

// selectors for data
export const selectHeaderSidebarOpen = (state: RootState) => state.headerStore.sidebarOpen;
export const selectHeaderMobileMenuOpen = (state: RootState) => state.headerStore.mobileMenuOpen;
export const selectHeaderNotificationOpen = (state: RootState) => state.headerStore.notificationsOpen;
export const selectHeaderProfileMenuOpen = (state: RootState) => state.headerStore.profileMenuOpen;

// selectors for actions
export const selectHeaderActions = (state: RootState) => state.headerActions;
