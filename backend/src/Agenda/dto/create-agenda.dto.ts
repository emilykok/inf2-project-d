import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateAgendaDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  begintime: string;

  @IsString()
  @IsNotEmpty()
  endtime: string;

  @IsString()
  @IsNotEmpty()
  titel: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
