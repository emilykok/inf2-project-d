import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Contact, Message } from '@prisma/client';
import { Request } from 'express';

export const CurrentUser = createParamDecorator(
  (
    _data: unknown,
    context: ExecutionContext,
  ): {
    id: number;
    name: string;
    email: string;
    phone: string;
    contacts: Contact[];
    messages: Message[];
  } => {
    const request = context.switchToHttp().getRequest<Request>();

    return request.user;
  },
);
