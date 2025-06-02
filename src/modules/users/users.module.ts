import { forwardRef, Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { TypeOrmUsersRepository, USERS_REPOSITORY } from './repositories';
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
      useClass: TypeOrmUsersRepository,
    },
    UsersService,
  ],
  controllers: [UsersController],
  exports: [forwardRef(() => USERS_REPOSITORY)],
})
export class UsersModule {}
