import { OrganizerEntity } from './../../../entities/organizer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import {
  ParticipantEntity,
  SpeakerEntity,
  UserEntity,
} from '../../../entities';

import { CreateUser, FindOneUserQuery } from '../../../dtos';
import { UsersRepository } from '../../interfaces';
import { User } from 'src/@types';

@Injectable()
export class TyeOrmUsersRepository implements UsersRepository {
  constructor(
    @InjectRepository(ParticipantEntity)
    private readonly participantsRepository: Repository<ParticipantEntity>,
    @InjectRepository(OrganizerEntity)
    private readonly organizersRepository: Repository<OrganizerEntity>,
    @InjectRepository(SpeakerEntity)
    private readonly speakersRepository: Repository<SpeakerEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }

  async createParticipant(data: CreateUser) {
    const user = this.participantsRepository.create(data);

    await this.participantsRepository.save(user);

    return user;
  }

  async createSpeaker(data: CreateUser) {
    const user = this.speakersRepository.create(data);

    await this.speakersRepository.save(user);

    return user;
  }

  async createOrganizer(data: CreateUser) {
    const user = this.organizersRepository.create(data);

    await this.organizersRepository.save(user);

    return user;
  }

  async findOne(query: FindOneUserQuery) {
    const user = await this.usersRepository.findOne({
      where: query,
    });

    return user;
  }

  async deleteById(id: string) {
    const user = await this.usersRepository.findOneBy({ id });

    await this.usersRepository.delete(id);

    return user;
  }
}
