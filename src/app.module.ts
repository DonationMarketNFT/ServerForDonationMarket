import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { CampaignModule } from './campaign/campaign.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/entities/account.entity';
import { Campaign } from './campaign/entities/campaign.entity';

@Module({
  imports: [
    AccountModule,
    CampaignModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com',
      port: '3306',
      username: 'donationmarketnft',
      password: 'ekdns1130!',
      database: 'donation_market',
      entities: [Account, Campaign],
      sychronize: true,
    }),
    AccountModule,
    CampaignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
