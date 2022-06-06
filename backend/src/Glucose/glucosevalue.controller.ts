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
import { GlucoseValueService } from '../Glucose/glucosevalue.service';
import {
  GlucoseValue as GlucoseValueModel,
  User as UserModel,
} from '@prisma/client';
import { CurrentUser } from '../Decorators';
import { CreateGlucoseValueDto } from './dto/create-glucosevalue.dto';

@Controller('/glucosevalue')
export class GlucoseValueController {
  constructor(private readonly glucoseValueService: GlucoseValueService) {}

  @Post()
  async createGlucoseValue(@Body() glucoseValueData: CreateGlucoseValueDto) {
    return this.glucoseValueService.createGlucoseValue(glucoseValueData);
  }

  // delete glucose value
  @Delete('/delete/:id')
  async deleteGlucoseValue(@Param('id') id: number) {
    return this.glucoseValueService.deleteGlucoseValue({ id });
  }
}
