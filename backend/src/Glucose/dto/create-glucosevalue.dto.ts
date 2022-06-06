import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateGlucoseValueDto {
  @IsDate()
  @IsNotEmpty()
  timestamp: Date;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  glucoseMeterSerial: string;
}
