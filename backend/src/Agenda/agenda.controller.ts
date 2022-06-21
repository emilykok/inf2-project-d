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
import { AgendaService } from '../Agenda/agenda.service';
import { Agenda as AgendaModel, User as UserModel } from '@prisma/client';
import { CurrentUser } from '../Decorators';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { EditAgendaDto } from './dto/edit-agenda.dto';

@Controller('/agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get('/:id')
  async getAgendaById(
    @CurrentUser() _user: UserModel,
    @Param('id') id: string,
  ) {
    return this.agendaService.findAgendaItemByUser(id);
  }

  @Post()
  async createAgenda(@Body() agendaData: CreateAgendaDto) {
    return this.agendaService.createAgendaItem(agendaData);
  }

  // Delete agenda item
  @Delete('/delete/:id')
  async deleteAgenda(@Param('id') id: number) {
    return this.agendaService.deleteAgendaItem(id);
  }
}
