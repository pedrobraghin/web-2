import { Injectable } from '@nestjs/common';
import { User } from '../..//entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TyeOrmUsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly participantRepository: Repository<User>,
  ) {}
}
