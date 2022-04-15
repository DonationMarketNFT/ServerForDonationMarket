import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdatePreCampaignFundingStatusDto {
  @IsBoolean()
  fundingStatus: boolean;
}
