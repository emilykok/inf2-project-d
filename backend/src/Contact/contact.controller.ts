import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Put,
  Delete,
  ForbiddenException,
} from '@nestjs/common';
import { ContactService } from '../Contact/contact.service';
import { Contact as ContactModel, User as UserModel } from '@prisma/client';
import { CurrentUser } from '../Decorators';
import { CreateContactDto } from './dto/create-contact.dto';
import { EditContactDto } from './dto/edit-contact.dto';

@Controller('/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/solo/:id')
  async getContactById(
    @CurrentUser() _user: UserModel,
    @Param('id') id: number,
  ) {
    return this.contactService.findContactById(id);
  }

  @Get('/all')
  async getAllContacts(@CurrentUser() _user: UserModel) {
    return this.contactService.findContactsByUser(_user.id);
  }

  @Post()
  async createContact(@Body() contactData: CreateContactDto) {
    return this.contactService.createContact(contactData);
  }
}
