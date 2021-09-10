import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FindOneParams } from '../models/findOne.dto';
import { UserDto } from '../models/user.dto';
import { UserI } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() createUserDto: UserDto): Observable<UserI> {
    return this.userService.add(createUserDto);
  }

  @Get()
  findAll(): Observable<UserI[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() findUserDto: FindOneParams): Observable<UserI> {
    return this.userService.findOne(findUserDto);
  }
}
