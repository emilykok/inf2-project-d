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

  async getGlucoseMeterBySerial(serial: string): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.findUnique({
      where: {
        serial,
      },
    });
  }

  async createGlucoseMeter({
    serial,
    userId,
  }: {
    serial: GlucoseMeter['serial'];
    userId: User['id'];
  }): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.create({
      data: {
        serial: serial,
        User: {
          connect: {
            id: userId,
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

  async deleteGlucoseMeter(
    glucoseMeterWhereUniqueInput: Prisma.GlucoseMeterWhereUniqueInput,
  ): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.delete({
      where: glucoseMeterWhereUniqueInput,
    });
  }

  // get all glucose values for a specific glucose meter
  async getGlucoseValues(
    glucoseMeterWhereUniqueInput: Prisma.GlucoseMeterWhereUniqueInput,
  ): Promise<GlucoseValue[]> {
    return this.prisma.glucoseMeter
      .findUnique({
        where: glucoseMeterWhereUniqueInput,
      })
      .values();
  }

  // get the last 20 glucose values for a specific glucose meter
  async getLast20GlucoseValues(
    glucoseMeterWhereUniqueInput: Prisma.GlucoseMeterWhereUniqueInput,
  ): Promise<GlucoseValue[]> {
    return this.prisma.glucoseMeter
      .findUnique({
        where: glucoseMeterWhereUniqueInput,
      })
      .values({
        orderBy: {
          timestamp: 'desc',
        },
        take: 20,
      });
  }
}
