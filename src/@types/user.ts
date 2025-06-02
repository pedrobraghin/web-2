export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserType {
  ORGANIZER = 'organizer',
  USER = 'user',
  SPEAKER = 'speaker',
  PARTICIPANT = 'participant',
}
