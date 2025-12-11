export interface CommonResponse<T> {
  status: 'error' | 'success';
  message: string;
  data: T;
}
