export interface Pagination {
  page?: number;
  limit?: number;
  order?: Record<string, PaginationOrder>;
}

export type PaginationOrder = 'asc' | 'desc';
