import { Injectable } from '@nestjs/common';
import { EventsRepository } from '../../interfaces';

@Injectable()
export class TypeOrmEventsRepository implements EventsRepository {}
