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
import { GlucoseMeterService } from '../Glucose/glucosemeter.service';
import {
  GlucoseMeter as GlucoseMeterModel,
  User as UserModel,
} from '@prisma/client';
import { CurrentUser } from '../Decorators';
import { createGlucoseMeterDto } from './dto/create-glucosemeter.dto';
import { editGlucoseMeterDto } from './dto/edit-glucosemeter.dto';

@Controller('/glucosemeter')
export class GlucoseMeterController {
  constructor(private readonly glucoseMeterService: GlucoseMeterService) {}

  @Get('/:serial')
  async getGlucoseMeterBySerial(@Param('serial') serial: string) {
    return this.glucoseMeterService.getGlucoseMeterBySerial(serial);
  }

  @Post()
  async createGlucoseMeter(@Body() glucoseMeterData: createGlucoseMeterDto) {
    return this.glucoseMeterService.createGlucoseMeter(glucoseMeterData);
  }

  ////TODO: FIX SERIAL ISSUE
  // update glucose meter
  @Put('/update/:serial')
  async updateGlucoseMeter(
    @Param('serial') serial: string,
    @Body() glucoseMeterData: editGlucoseMeterDto,
  ) {
    return this.glucoseMeterService.updateGlucoseMeter(
      { serial },
      glucoseMeterData,
    );
  }

  @Delete('/delete/:serial')
  async deleteGlucoseMeter(@Param('serial') serial: string) {
    return this.glucoseMeterService.deleteGlucoseMeter({ serial });
  }

  @Get('/:serial/values')
  async getGlucoseValues(@Param('serial') serial: string) {
    return this.glucoseMeterService.getGlucoseValues({ serial });
  }

  @Get('/:serial/values/last20')
  async getLast20GlucoseValues(@Param('serial') serial: string) {
    return this.glucoseMeterService.getLast20GlucoseValues({ serial });
  }
}
