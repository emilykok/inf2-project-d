//TODO: check if this is still needed
//import { PaginationQueryBuilder } from '@lib/pagination/pagination.queryBuilder';
import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  providers: [ContactService], // PaginationQueryBuilder, was removed
  exports: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
