import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreCampaignController } from './pre-campaign.controller';
import { PreCampaignService } from './pre-campaign.service';
import { PreCampaign } from './entities/preCampaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PreCampaign])],
  exports: [TypeOrmModule],
  controllers: [PreCampaignController],
  providers: [PreCampaignService],
})
export class PreCampaignModule {}
