import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USERS_REPOSITORY, UsersRepository } from './repositories';
import { CreateUserDto } from './dtos';
import { UserType } from '../../@types';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  private async validateUser(email: string) {
    const existingUser = await this.usersRepository.findOne({
      email,
    });

    if (existingUser) {
      throw new Error('User already exists');
    }
  }

  async createParticipant(data: CreateUserDto) {
    await this.validateUser(data.email);

    const user = this.usersRepository.createParticipant({
      ...data,
      type: UserType.PARTICIPANT,
    });

    return user;
  }

  async createOrganizer(data: CreateUserDto) {
    await this.validateUser(data.email);

    const user = this.usersRepository.createOrganizer({
      ...data,
      type: UserType.ORGANIZER,
    });

    return user;
  }

  async createSpeaker(data: CreateUserDto) {
    await this.validateUser(data.email);

    const user = this.usersRepository.createSpeaker({
      ...data,
      type: UserType.SPEAKER,
    });

    return user;
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    await this.usersRepository.deleteById(id);
  }

  async getAllUsers(pagination: PaginationDto) {
    const users = await this.usersRepository.findAll(pagination);

    return users;
  }

  async getUser(id: string) {
    const user = await this.usersRepository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
}
