import { Module, forwardRef } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EVENTS_REPOSITORY, TypeOrmEventsRepository } from './repositories';
import { UsersModule } from '../users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity]),
    forwardRef(() => UsersModule),
  ],
  controllers: [EventsController],
  providers: [
    {
      provide: EVENTS_REPOSITORY,
      useClass: TypeOrmEventsRepository,
    },
    EventsService,
  ],
})
export class EventsModule {}
