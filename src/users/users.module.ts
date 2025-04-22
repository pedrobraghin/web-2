import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import {
  TyeOrmUsersRepository,
  TyeOrmOrganizersRepository,
  TyeOrmParticipantsRepository,
  TyeOrmSpeakersRepository,
  USERS_REPOSITORY,
  ORGANIZERS_REPOSITORY,
  PARTICIPANTS_REPOSITORY,
  SPEAKERS_REPOSITORY,
} from './repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer, Participant, Speaker, User } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Organizer, Participant, Speaker])],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: TyeOrmUsersRepository,
    },
    {
      provide: ORGANIZERS_REPOSITORY,
      useClass: TyeOrmOrganizersRepository,
    },
    {
      provide: PARTICIPANTS_REPOSITORY,
      useClass: TyeOrmParticipantsRepository,
    },
    {
      provide: SPEAKERS_REPOSITORY,
      useClass: TyeOrmSpeakersRepository,
    },
    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
