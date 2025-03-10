import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { CampaignModule } from './campaign/campaign.module';
import { PreCampaignModule } from './pre-campaign/pre-campaign.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/entities/account.entity';
import { Campaign } from './campaign/entities/campaign.entity';
import { PreCampaign } from './pre-campaign/entities/preCampaign.entity';
import { AccountWcModule } from './account-wc/account-wc.module';
import { AccountWc } from './account-wc/entities/accountWc.entity';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { ImageModule } from './image/image.module';
import { NftModule } from './nft/nft.module';
import { Nft } from './nft/entities/nft.entity';
import { CampaignImageModule } from './campaign-image/campaign-image.module';

@Module({
  imports: [
    AccountModule,
    CampaignModule,
    PreCampaignModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com',
      port: '3306',
      username: 'donationmarketnft',
      password: 'ekdns1130!',
      database: 'donation_market',
      entities: [Account, Campaign, PreCampaign, AccountWc, Nft],
      sychronize: true,
    }),
    AccountModule,
    CampaignModule,
    PreCampaignModule,
    AccountWcModule,
    ImageModule,
    NftModule,
    CampaignImageModule,
  ],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}
