import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { GlucoseMeter, GlucoseValue, User, Prisma } from '@prisma/client';

@Injectable()
export class GlucoseMeterService {
  constructor(private prisma: PrismaService) {}

  async GlucoseMeter(
    glucoseMeterWhereUniqueInput: Prisma.GlucoseMeterWhereUniqueInput,
  ): Promise<GlucoseMeter | null> {
    return this.prisma.glucoseMeter.findUnique({
      where: glucoseMeterWhereUniqueInput,
    });
  }

  async GlucoseMeters(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GlucoseMeterWhereUniqueInput;
    where?: Prisma.GlucoseMeterWhereInput;
    orderBy?: Prisma.GlucoseMeterOrderByWithRelationInput;
  }): Promise<GlucoseMeter[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.glucoseMeter.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createGlucoseMeter({
    serial,
    userid,
  }: {
    serial: GlucoseMeter['serial'];
    userid: User['id'];
  }): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.create({
      data: {
        serial: serial,
        User: {
          connect: {
            id: userid,
          },
        },
      },
    });
  }

  async updateGlucoseMeter(
    glucoseMeterWhereUniqueInput: Prisma.GlucoseMeterWhereUniqueInput,
    data: GlucoseMeter,
  ): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.update({
      where: glucoseMeterWhereUniqueInput,
      data: {
        ...data,
      },
    });
  }
}
