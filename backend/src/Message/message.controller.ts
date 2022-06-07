// import {
//   Controller,
//   Get,
//   Param,
//   Post,
//   Body,
//   Patch,
//   Put,
//   Delete,
//   ForbiddenException,
// } from '@nestjs/common';
// import { MessageService } from '../Message/message.service';
// import { Message as MessageModel, User as UserModel } from '@prisma/client';
// import { CurrentUser } from '../Decorators';
// import { createMessageDto } from './dto/create-message.dto';

// @Controller('/message')
// export class MessageController {
//   constructor(private readonly messageService: MessageService) {}

//   //Get all messages from a user
//   @Get('/:userId')
//   async getMessagesByUserId(@Param('userId') userId: string) {
//     return this.messageService.getAllMessages(userId);
//   }

//   //Get latest message from a user
//   @Get('/:userId/latest')
//   async getLatestMessageByUserId(@Param('userId') userId: string) {
//     return this.messageService.getLatestMessage(userId);
//   }

//   //Post message
//   @Post()
//   async createMessage(@Body() messageData: createMessageDto) {
//     return this.messageService.createMessage(messageData);
//   }
// }
