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
import { CampaignService } from './campaign.service';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './dto/create-campaign.dto';
@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  getAll(): Campaign[] {
    return this.campaignService.getAll();
  }

  @Get(`/:id`)
  getOne(@Param('id') campaignId: number): Campaign {
    return this.campaignService.getOne(campaignId);
  }

  @Post()
  create(@Body() campaignData: CreateCampaignDto) {
    return this.campaignService.create(campaignData);
  }

  @Delete(`/:id`)
  remove(@Param('id') campaignId: number) {
    return this.campaignService.deleteOne(campaignId);
  }
}
