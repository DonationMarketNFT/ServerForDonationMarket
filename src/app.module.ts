import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { CampaignController } from './campaign/campaign.controller';
import { CampaignService } from './campaign/campaign.service';

@Module({
  imports: [],
  controllers: [AppController, AccountController, CampaignController],
  providers: [AppService, AccountService, CampaignService],
})
export class AppModule {}
