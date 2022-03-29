import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateCampaignDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  targetAmount: number;

  @IsBoolean()
  fundingStatus: boolean;

  @IsBoolean()
  refundStatus: boolean;
}
