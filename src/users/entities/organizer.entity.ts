import { ChildEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserType } from 'src/@types';

@ChildEntity(UserType.ORGANIZER)
export class OrganizerEntity extends UserEntity {}
