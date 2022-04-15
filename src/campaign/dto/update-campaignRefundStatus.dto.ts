import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateCampaignRefundStatusDto {
  @IsBoolean()
  refundStatus: boolean;
}
