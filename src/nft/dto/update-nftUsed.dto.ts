import { bool } from 'aws-sdk/clients/signer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateNftUsedDto {
  @IsBoolean()
  @IsNotEmpty()
  used: boolean;
}
