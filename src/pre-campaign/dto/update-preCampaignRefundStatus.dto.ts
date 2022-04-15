import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdatePreCampaignRefundStatusDto {
  @IsBoolean()
  refundStatus: boolean;
}
