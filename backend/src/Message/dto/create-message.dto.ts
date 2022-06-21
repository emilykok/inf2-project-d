import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class createMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
