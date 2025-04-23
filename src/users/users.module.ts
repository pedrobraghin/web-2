import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { TyeOrmUsersRepository, USERS_REPOSITORY } from './repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  OrganizerEntity,
  ParticipantEntity,
  SpeakerEntity,
  UserEntity,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      OrganizerEntity,
      ParticipantEntity,
      SpeakerEntity,
    ]),
  ],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: TyeOrmUsersRepository,
    },
    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
