import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountWcController } from './account-wc.controller';
import { AccountWcService } from './account-wc.service';
import { AccountWc } from './entities/accountWc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountWc])],
  exports: [TypeOrmModule],
  controllers: [AccountWcController],
  providers: [AccountWcService],
})
export class AccountWcModule {}
