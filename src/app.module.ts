import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  UsersModule,
  UserEntity,
  OrganizerEntity,
  ParticipantEntity,
  SpeakerEntity,
  EventsModule,
  SessionsModule,
  EventEntity,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        UserEntity,
        OrganizerEntity,
        ParticipantEntity,
        SpeakerEntity,
        EventEntity,
      ],
      synchronize: process.env.development === 'development',
    }),
    UsersModule,
    EventsModule,
    SessionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
