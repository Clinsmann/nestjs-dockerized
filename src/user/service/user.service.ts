import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { FindOneParams } from '../models/findOne.dto';
import { UserDto } from '../models/user.dto';
import { UserEntity } from '../models/user.entity';
import { UserI } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  add(user: UserDto): Observable<UserI> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
  }

  findOne({ id }: FindOneParams): Observable<UserI> {
    return from(this.userRepository.findOne({ id }));
  }
}
