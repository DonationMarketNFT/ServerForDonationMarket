import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdatePreCampaignDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  targetAmount: number;

  @IsNumber()
  currentAmount: number;

  @IsBoolean()
  fundingStatus: boolean;

  @IsBoolean()
  refundStatus: boolean;

  @IsString()
  category: string;
}
