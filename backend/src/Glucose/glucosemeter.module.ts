import { Module } from '@nestjs/common';
import { GlucoseMeterController } from './glucosemeter.controller';
import { GlucoseMeterService } from './glucosemeter.service';

@Module({
  providers: [GlucoseMeterService], // PaginationQueryBuilder, was removed
  exports: [GlucoseMeterService],
  controllers: [GlucoseMeterController],
})
export class GlucoseMeterModule {}
