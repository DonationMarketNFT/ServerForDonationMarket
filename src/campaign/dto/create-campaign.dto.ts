import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateCampaignDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  descripion: string;

  @IsNumber()
  targetAmount: number;

  @IsBoolean()
  fundingStatus: boolean;

  @IsBoolean()
  refundStatus: boolean;

  @IsString()
  fundingMember: string[];
}
