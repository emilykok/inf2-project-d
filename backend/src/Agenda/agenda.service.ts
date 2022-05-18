import { PrismaService } from '../../prisma/prisma.service';
import { Agenda, User, Prisma } from '@prisma/client';
import { NotFoundError } from '../Libraries/errors';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AgendaService {
  constructor(private prisma: PrismaService) {}

  async agenda(
    contactWhereUniqueInput: Prisma.AgendaWhereUniqueInput,
  ): Promise<Agenda | null> {
    return this.prisma.agenda.findUnique({
      where: contactWhereUniqueInput,
    });
  }

  async contacts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AgendaWhereUniqueInput;
    where?: Prisma.AgendaWhereInput;
    orderBy?: Prisma.AgendaOrderByWithRelationInput;
  }): Promise<Agenda[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.agenda.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findContactById(id: number) {
    return this.prisma.contact.findUnique({
      where: {
        id,
      },
    });
  }

  async findAgendaItemByUser(UserId: User['id']) {
    return this.prisma.contact.findMany({
      where: {
        userId: UserId,
      },
    });
  }

  async createAgendaItem({
    date,
    begintime,
    endtime,
    titel,
    description,
    userId,
  }: {
    date: Agenda['date'];
    begintime: Agenda['begintime'];
    endtime: Agenda['endtime'];
    titel: Agenda['titel'];
    description: Agenda['description'];
    userId: User['id'];
  }): Promise<Agenda> {
    return this.prisma.agenda.create({
      data: {
        date: date,
        begintime: begintime,
        endtime: endtime,
        titel: titel,
        description: description,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async deleteAgendaItem(id: number) {
    return this.prisma.agenda.delete({
      where: {
        id,
      },
    });
  }
}
