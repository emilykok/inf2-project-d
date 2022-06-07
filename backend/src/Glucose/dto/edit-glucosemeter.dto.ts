import { IsNotEmpty, IsString } from 'class-validator';

export class editGlucoseMeterDto {
  @IsString()
  @IsNotEmpty()
  serial: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
