import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';
import { IsStrongPassword } from '../../Libraries/validator/validator';

export class CreateUserDto {
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
}
