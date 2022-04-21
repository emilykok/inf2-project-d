import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { NotFoundError } from '../Libraries/errors';
import { Argon2CryptoProvider } from '../Providers/argon2.provider';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject('CRYPTO') private crypto: Argon2CryptoProvider,
  ) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser({
    email,
    name,
    password,
    phone,
    clearance = 0,
  }: {
    email: User['email'];
    name: User['name'];
    password: User['password'];
    phone: User['phone'];
    clearance: User['clearance'];
  }) {
    return this.prisma.user.create({
      data: {
        email: email,
        name: name,
        password: await this.crypto.hashPassword(password),
        phone: phone,
        clearance: clearance,
      },
      select: {
        id: true,
        password: false,
        email: true,
        name: true,
        phone: true,
        Message: false,
        contacts: false,
      },
    });
  }

  async editUser(userId: User['id'], user: Partial<User>) {
    await this.findUserById(userId);
    try {
      return this.prisma.user.update({
        where: { id: userId },
        data: {
          name: user.name,
          email: user.email,
          password: user.password
            ? await this.crypto.hashPassword(user.password)
            : undefined,
          phone: user.phone,
          clearance: user.clearance ?? 0,
        },
        select: {
          id: true,
          password: false,
          email: true,
          name: true,
          phone: true,
          Message: false,
          contacts: false,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('email_address_already_in_use');
      }
    }
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  // Find user by id
  async findUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // Find user by email
  async findUserByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}
