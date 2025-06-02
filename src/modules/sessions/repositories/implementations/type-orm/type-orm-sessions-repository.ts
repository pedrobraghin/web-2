import { Injectable } from '@nestjs/common';
import { SessionsRepository } from '../../interfaces';

@Injectable()
export class TypeOrmSessionsRepository implements SessionsRepository {}
