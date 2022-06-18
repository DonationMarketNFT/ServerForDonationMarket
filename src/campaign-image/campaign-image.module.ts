import { Module } from '@nestjs/common';
import { CampaignImageController } from './campaign-image.controller';
import { CampaignImageService } from './campaign-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CampaignImageController],
  providers: [CampaignImageService],
})
export class CampaignImageModule {}
