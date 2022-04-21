import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageService } from '../Message/message.service';
import { PrismaService } from '../prisma.service';
import { UserService } from '../User/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, MessageService],
})
export class AppModule {}
