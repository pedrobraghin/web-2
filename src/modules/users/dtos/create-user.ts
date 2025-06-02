import { UserType } from 'src/@types';

export interface CreateUser {
  name: string;
  email: string;
  type: UserType;
}
