import { PrismaService } from '../../prisma/prisma.service';
import { User, Contact, Prisma } from '@prisma/client';
import { NotFoundError } from '../Libraries/errors';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async contact(
    contactWhereUniqueInput: Prisma.ContactWhereUniqueInput,
  ): Promise<Contact | null> {
    return this.prisma.contact.findUnique({
      where: contactWhereUniqueInput,
    });
  }

  async contacts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContactWhereUniqueInput;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput;
  }): Promise<Contact[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.contact.findMany({
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

  async findContactsByUser(UserId: User['id']) {
    return this.prisma.contact.findMany({
      where: {
        userId: UserId,
      },
    });
  }

  async createContact({
    name,
    email,
    phone,
    userId,
  }: {
    name: Contact['name'];
    email: Contact['email'];
    phone: Contact['phone'];
    userId: User['id'];
  }) {
    return this.prisma.contact.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async editContact(ContactId: Contact['id'], contact: Partial<Contact>) {
    await this.findContactById(ContactId);
    return this.prisma.contact.update({
      where: { id: ContactId },
      data: {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
      },
    });
  }

  async deleteContact(id: number) {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!contact) throw new NotFoundError('contact_not_found');
    return this.prisma.contact.delete({ where: { id } });
  }
}
