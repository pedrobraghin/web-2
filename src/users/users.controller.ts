import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    // Simulate a user retrieval from a database or service
    return { id, name: 'John Doe' };
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post('participant')
  async createParticipant(@Body() data: CreateUserDto) {
    return this.usersService.createParticipant(data);
  }

  @Post('organizer')
  async createOrganizer(@Body() data: CreateUserDto) {
    return this.usersService.createOrganizer(data);
  }

  @Post('speaker')
  async createSpeaker(@Body() data: CreateUserDto) {
    return this.usersService.createSpeaker(data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
