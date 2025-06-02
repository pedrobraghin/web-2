import { ChildEntity, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserType } from 'src/@types';
import { EventEntity } from '../../events';

@ChildEntity(UserType.ORGANIZER)
export class OrganizerEntity extends UserEntity {
  @OneToMany(() => EventEntity, (event) => event.organizer)
  events: EventEntity[];
}
