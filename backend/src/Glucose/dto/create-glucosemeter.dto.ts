import { IsNotEmpty, IsString } from 'class-validator';

export class createGlucoseMeterDto {
  @IsString()
  @IsNotEmpty()
  serial: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
