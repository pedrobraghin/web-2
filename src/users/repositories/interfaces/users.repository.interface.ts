import { FindOneUserQuery } from '../../dtos';
import { User } from '../../../@types';
import { CreateUser } from '../../dtos/create-user';

export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY');

export interface UsersRepository {
  createOrganizer: (data: CreateUser) => Promise<User>;
  createSpeaker: (data: CreateUser) => Promise<User>;
  createParticipant: (data: CreateUser) => Promise<User>;
  findOne: (query: FindOneUserQuery) => Promise<User | null>;
  deleteById: (id: string) => Promise<User | null>;
  findAll(): Promise<User[]>;
}
