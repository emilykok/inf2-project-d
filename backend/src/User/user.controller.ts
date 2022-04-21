import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../User/user.service';
import { User as UserModel } from '@prisma/client';
import { CurrentUser } from '../decorators';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async getUserById(@CurrentUser() _user: UserModel, @Param('id') id: string) {
    if (id === '@me') return _user;
    return this.userService.findUserById(id);
  }
}
