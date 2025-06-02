import { Inject, Injectable } from '@nestjs/common';
import { EVENTS_REPOSITORY, EventsRepository } from './repositories';
import { USERS_REPOSITORY, UsersRepository } from '../users';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  async createEvent() {
    return '';
  }
  async listEvents() {
    return '';
  }
  async getEvent(id: string) {
    return '' + id;
  }
  async updateEvent(id: string) {
    return '' + id;
  }
  async deleteEvent(id: string) {
    return '' + id;
  }
}
