import { Injectable } from '@nestjs/common';
import { Speaker } from '../../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TyeOrmSpeakersRepository {
  constructor(
    @InjectRepository(Speaker)
    private readonly participantRepository: Repository<Speaker>,
  ) {}
}
