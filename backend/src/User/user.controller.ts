import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Put,
  Delete,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from '../User/user.service';
import { User as UserModel } from '@prisma/client';
import { CurrentUser } from '../Decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async getUserById(@CurrentUser() _user: UserModel, @Param('id') id: string) {
    if (id === '@me') return _user;
    return this.userService.findUserById(id);
  }

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Patch('/:userId')
  async updateUser(
    @CurrentUser() currentUser: UserModel,
    @Param('userId') id: string,
    @Body() userData: EditUserDto,
  ) {
    const user: Partial<UserModel> = userData;

    return this.userService.editUser(currentUser.id, user);
  }
}
