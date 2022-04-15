import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateCampaignFundingStatusDto {
  @IsBoolean()
  fundingStatus: boolean;
}
