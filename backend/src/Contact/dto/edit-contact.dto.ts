import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class EditContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
