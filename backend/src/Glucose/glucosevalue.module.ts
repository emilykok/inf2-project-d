import { Module } from '@nestjs/common';
import { GlucoseValueController } from './glucosevalue.controller';
import { GlucoseValueService } from './glucosevalue.service';

@Module({
  providers: [GlucoseValueService], // PaginationQueryBuilder, was removed
  exports: [GlucoseValueService],
  controllers: [GlucoseValueController],
})
export class GlucoseValueModule {}
