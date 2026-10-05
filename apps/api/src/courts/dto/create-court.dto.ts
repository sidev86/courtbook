import { IsString, IsEnum, MinLength } from 'class-validator';
import { CourtType } from '../../generated/prisma/enums';

export class CreateCourtDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEnum(CourtType)
  type: CourtType;
}
