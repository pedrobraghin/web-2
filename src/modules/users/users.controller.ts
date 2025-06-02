import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginationDto } from 'src/common/pagination.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns an array containing zero or more users',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @ApiQuery({ name: 'limit', required: false, description: 'Page size' })
  @ApiQuery({ name: 'page', required: false, description: 'Current page' })
  async getAllUsers(@Query() pagination: PaginationDto) {
    return this.usersService.getAllUsers(pagination);
  }

  @Post('participant')
  @ApiOperation({ summary: 'Create a event participant' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Participant created',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @ApiBody({ type: CreateUserDto })
  async createParticipant(@Body() data: CreateUserDto) {
    return this.usersService.createParticipant(data);
  }

  @Post('organizer')
  @ApiOperation({ summary: 'Create a event organizer' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Participant created',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @ApiBody({ type: CreateUserDto })
  async createOrganizer(@Body() data: CreateUserDto) {
    return this.usersService.createOrganizer(data);
  }

  @Post('speaker')
  @ApiOperation({ summary: 'Create a event speaker' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Participant created',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @ApiBody({ type: CreateUserDto })
  async createSpeaker(@Body() data: CreateUserDto) {
    return this.usersService.createSpeaker(data);
  }

  @Delete(':id')
  @Post()
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User deleted',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
