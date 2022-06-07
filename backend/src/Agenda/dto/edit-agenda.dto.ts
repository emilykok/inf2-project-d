import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class EditAgendaDto {
  @IsDate()
  @IsNotEmpty()
  date: string;

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
