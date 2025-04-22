import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  async getUser(@Param('id') id: string) {
    // Simulate a user retrieval from a database or service
    return { id, name: 'John Doe' };
  }
}
