export const companyQueryKeys = {
  all: () => ['companies'] as const,
  // detail: (id: string) => ['companies', 'detail', id] as const,
  // create: () => ['companies', 'create'] as const,
  // update: (id: string) => ['companies', 'update', id] as const,
  // delete: (id: string) => ['companies', 'delete', id] as const,
};
