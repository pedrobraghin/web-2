import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { PaginationOrder } from '../@types';
import { isValidPaginationOrder } from 'src/utils';

export class PaginationDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @Min(1)
  limit?: number = 20;

  @IsOptional()
  @Transform(({ value }: { value: string }) => {
    const [key, rawOrder] = value.split(':');

    if (!key || !rawOrder) {
      return undefined;
    }

    const order = rawOrder.trim().toLowerCase();
    const isValidOrder = isValidPaginationOrder(order);

    if (!isValidOrder) {
      return undefined;
    }

    return {
      [key.trim()]: order,
    };
  })
  order?: Record<string, PaginationOrder>;
}
