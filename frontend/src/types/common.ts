export interface CommonResponse<T> {
  status: 'error' | 'success';
  message: string;
  data: T;
}

// types.ts
export interface ImportantDay {
  id: string;
  title: string;
  date: string;
  remaining: string;
  imageUrl: string;
  imageAlt: string;
}
