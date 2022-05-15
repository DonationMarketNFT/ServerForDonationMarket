import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  targetAmount: number;

  @IsNumber()
  currentAmount: number;

  @IsBoolean()
  fundingStatus: boolean;

  @IsBoolean()
  refundStatus: boolean;

  @IsString()
  category: string;

  @IsString()
  creatorAddress: string;

  @IsNumber()
  @IsNotEmpty()
  minFundingAmount: number;
}
