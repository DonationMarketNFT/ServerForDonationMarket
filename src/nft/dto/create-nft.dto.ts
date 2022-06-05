import { bool } from 'aws-sdk/clients/signer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreateNftDto {
  @IsString()
  @IsNotEmpty()
  campaignName: string;

  @IsNumber()
  @IsNotEmpty()
  campaignId: number;

  @IsString()
  @IsNotEmpty()
  nftUri: string;

  @IsNumber()
  @IsNotEmpty()
  nftNum: number;

  @IsBoolean()
  @IsNotEmpty()
  used: boolean;
}
