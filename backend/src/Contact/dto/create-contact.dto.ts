import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsUser()
  @IsNotEmpty()
  User: User;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

/*
import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';
import { IsStrongPassword } from '../../Libraries/validator/validator';


export class CreateContactDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsInt()
  clearance: number;
}*/
