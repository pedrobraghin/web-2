import { Injectable } from '@nestjs/common';
import { Organizer } from '../../../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TyeOrmOrganizersRepository {
  constructor(
    @InjectRepository(Organizer)
    private readonly participantRepository: Repository<Organizer>,
  ) {}
}
