import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nft } from '../nft/entities/nft.entity';
import { NftController } from '../nft/nft.controller';
import { NftService } from '../nft/nft.service';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nft])],
  exports: [TypeOrmModule],
  controllers: [ImageController],
  providers: [ImageService, NftService],
})
export class ImageModule {}
