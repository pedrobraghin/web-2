import { PaginationOrder } from '../@types';

export function getPagination(limit: number, page: number) {
  const skip = (page - 1) * limit;

  return { take: limit, skip };
}

export function isValidPaginationOrder(
  value: string,
): value is PaginationOrder {
  return ['asc', 'desc'].includes(value);
}
