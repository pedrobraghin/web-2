import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SESSIONS_REPOSITORY } from './repositories';
import { TypeOrmSessionsRepository } from './repositories/implementations';
import { SessionsService } from './sessions.service';

@Module({
  controllers: [SessionsController],
  providers: [
    {
      provide: SESSIONS_REPOSITORY,
      useClass: TypeOrmSessionsRepository,
    },
    SessionsService,
  ],
})
export class SessionsModule {}
