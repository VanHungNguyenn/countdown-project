import { APP_NAME } from '@/constants';

const commonTranslationEN = {
  APP: {
    APP_NAME: APP_NAME,
    ERROR: 'Error',
    INFO: 'Info',
    WARNING: 'Warning',
    CONFIRM: 'Confirm',
    LOADING: 'Loading...',
    CHANGE: 'Change',
    SUCCESS: 'Success',
    SELECT: 'Select',
    OK: 'OK',
  },
  VALID: {
    REQUIRED: 'This field is required',
  },
  AUTH: {
    FORBIDDEN: 'You do not have permission to perform this action',
  },
  SYS: {
    NETWORK_ERROR: 'Network Error',
  },
  ERROR: {
    UNEXPECTED: 'An unexpected error occurred',
  },
};

export const translationEN = {
  ...commonTranslationEN,
};
