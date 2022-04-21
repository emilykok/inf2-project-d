import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GlucoseValue, Prisma } from '@prisma/client';

@Injectable()
export class GlucoseValueService {
  constructor(private prisma: PrismaService) {}

  async GlucoseValue(
    glucosevalueWhereUniqueInput: Prisma.GlucoseValueWhereUniqueInput,
  ): Promise<GlucoseValue | null> {
    return this.prisma.glucoseValue.findUnique({
      where: glucosevalueWhereUniqueInput,
    });
  }

  async Messages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GlucoseValueWhereUniqueInput;
    where?: Prisma.GlucoseValueWhereInput;
    orderBy?: Prisma.GlucoseValueOrderByWithRelationInput;
  }): Promise<GlucoseValue[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.glucoseValue.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createGlucoseValue(
    data: Prisma.GlucoseValueCreateInput,
  ): Promise<GlucoseValue> {
    return this.prisma.glucoseValue.create({
      data,
    });
  }

  async deleteGlucoseValue(
    where: Prisma.MessageWhereUniqueInput,
  ): Promise<GlucoseValue> {
    return this.prisma.glucoseValue.delete({
      where,
    });
  }
}
