import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [AccountModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
