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

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/login')
  async login(): Promise<UserModel[]> {
    
  }
