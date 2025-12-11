import { API_URL, ROUTE_PATH } from '@/constants';
import { authStorage, showToastError } from '@/libs';
import axios, { type AxiosError, type AxiosHeaders, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import i18next from 'i18next';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // dispatch(appActions.showAppLoading());
    const token = authStorage.getAccessToken();
    config.headers = {
      ...config.headers,
      ...(token ? { Authorization: `Token ${token}` } : {}),
    } as AxiosHeaders;
    return config;
  },
  (error) => {
    // dispatch(appActions.hideAppLoading());
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // dispatch(appActions.hideAppLoading());
    return response.data;
  },
  (error: AxiosError) => {
    console.error(error);
    if (error.code === 'ERR_NETWORK') {
      showToastError(i18next.t('SYS.NETWORK_ERROR'));
      return;
    }

    // Handle 4xx and 5xx errors
    if (error.response) {
      if (error.response.status === StatusCodes.UNAUTHORIZED) {
        authStorage.removeTokens();
        window.location.href = ROUTE_PATH.AUTH.LOGIN;
        return;
      }

      if (error.response.status === StatusCodes.FORBIDDEN) {
        showToastError(i18next.t('AUTH.FORBIDDEN_ERROR'));
        return;
      }

      if (error.response.status === StatusCodes.NOT_FOUND) {
        showToastError(i18next.t('SYS.NOT_FOUND_ERROR'));
        return;
      }

      if (error.response.status === StatusCodes.INTERNAL_SERVER_ERROR) {
        showToastError(i18next.t('SYS.INTERNAL_SERVER_ERROR'));
        return;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
