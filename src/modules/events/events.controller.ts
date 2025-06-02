import { EventsService } from './events.service';
import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async createEvent() {
    return this.eventsService.createEvent();
  }

  @Get()
  async getAllEvents() {
    return this.eventsService.listEvents();
  }

  @Get(':id')
  async getEvent(@Param('id') id: string) {
    return this.eventsService.getEvent(id);
  }

  @Patch(':id')
  async updateEvent(@Param('id') id: string) {
    return this.eventsService.updateEvent(id);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }
}
