import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import { GlucoseMeter, GlucoseValue, Prisma } from '@prisma/client';

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

  async createGlucoseMeter(
    data: Prisma.GlucoseMeterCreateInput,
  ): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.create({
      data,
    });
  }

  async deleteGlucoseMeter(
    where: Prisma.GlucoseMeterWhereUniqueInput,
  ): Promise<GlucoseMeter> {
    return this.prisma.glucoseMeter.delete({
      where,
    });
  }

  // Get glucose meter data by user id
  async getGlucoseMeterDataByUserId(userId: number): Promise<GlucoseValue[]> {
    return this.prisma.glucoseValue.findMany({
      where: {
        GlucoseMeter: {
          userId,
        },
      },
    });
  }

  // Get glucose meter data by user id and date
  async getGlucoseMeterDataByUserIdAndDate(
    userId: number,
    timestamp: Date,
  ): Promise<GlucoseValue> {
    return this.prisma.glucoseValue.findFirst({
      where: {
        GlucoseMeter: {
          userId,
        },
        timestamp: {
          equals: timestamp,
        },
      },
    });
  }
}
