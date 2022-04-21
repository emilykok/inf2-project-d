//TODO: check if this is still needed
//import { PaginationQueryBuilder } from '@lib/pagination/pagination.queryBuilder';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService], // PaginationQueryBuilder, was removed
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
