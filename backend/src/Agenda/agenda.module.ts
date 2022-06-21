//TODO: check if this is still needed
//import { PaginationQueryBuilder } from '@lib/pagination/pagination.queryBuilder';
import { Module } from '@nestjs/common';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';

@Module({
  providers: [AgendaService], // PaginationQueryBuilder, was removed
  exports: [AgendaService],
  controllers: [AgendaController],
})
export class AgendaModule {}
