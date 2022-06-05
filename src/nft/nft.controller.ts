import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { NftService } from './nft.service';
import { Nft } from './entities/nft.entity';
import { Campaign } from 'src/campaign/entities/campaign.entity';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftUsedDto } from './dto/update-nftUsed.dto';

@Controller('nfts')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get('/nft_all')
  getAll(): Promise<Nft[]> {
    return this.nftService.getAll();
  }

  @Get('/nft/:campaignId')
  findByCampaign(@Param('campaignId') campaignId: number): Promise<Nft[]> {
    return this.nftService.findByCampaignId(campaignId);
  }

  @Post('/create_nft')
  create(@Body() nft: CreateNftDto) {
    return this.nftService.create(nft);
  }

  @Delete('nft/delete/:id')
  deleteNftParam(@Param('id') id: string): Promise<boolean> {
    return this.nftService.deleteNft(id);
  }

  @Patch('nft/:id')
  updateNftUsedStatus(
    @Param('id') id: number,
    @Body() updateNftUsedStatus: UpdateNftUsedDto,
  ): Promise<boolean> {
    return this.nftService.updateNftUsedStatus(id, updateNftUsedStatus);
  }
}
