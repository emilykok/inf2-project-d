import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import { Contact, Message } from '@prisma/client';

declare module 'express' {
  interface Request {
    user: {
      id: number;
      name: string;
      email: string;
      phone: string;
      contacts: Contact[];
      messages: Message[];
    };
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
