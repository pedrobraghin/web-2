import { ChildEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserType } from 'src/@types';

@ChildEntity(UserType.SPEAKER)
export class SpeakerEntity extends UserEntity {}
