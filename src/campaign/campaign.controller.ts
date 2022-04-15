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
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { UpdateCampaignFundingStatusDto } from './dto/update-campaignFundingStatus.dto';
import { UpdateCampaignRefundStatusDto } from './dto/update-campaignRefundStatus.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get('/campaign_all')
  getAll(): Promise<Campaign[]> {
    return this.campaignService.getAll();
  }

  @Get('/camapaign')
  findByCampaignIdQuery(
    @Query('campaignId') campaignId: number,
  ): Promise<Campaign> {
    return this.campaignService.findByCampaignOne(campaignId);
  }

  @Get('campaign/:campaignId')
  findByCampaignIdParam(
    @Param('campaignId') campaignId: number,
  ): Promise<Campaign> {
    return this.campaignService.findByCampaignOne(campaignId);
  }

  @Post('/create_campaign')
  create(@Body() campaign: CreateCampaignDto) {
    return this.campaignService.create(campaign);
  }

  @Delete('campaign/delete')
  deleteCampaignQuery(@Query('id') id: string): Promise<boolean> {
    return this.campaignService.deleteCampaign(id);
  }

  @Delete('campaign/delete/:id')
  deleteCampaignParam(@Param('id') id: string): Promise<boolean> {
    return this.campaignService.deleteCampaign(id);
  }

  @Patch('campaign/:id')
  setCampaign(
    @Param('id') id: number,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ): Promise<boolean> {
    return this.campaignService.setCampaign(id, updateCampaignDto);
  }

  @Patch('campaign/fundingstatus/:id')
  updateCampaignFundingStatus(
    @Param('id') id: number,
    @Body() updateCampaignFundingStatus: UpdateCampaignFundingStatusDto,
  ): Promise<boolean> {
    return this.campaignService.updateCampaignFundingStatus(
      id,
      updateCampaignFundingStatus,
    );
  }

  @Patch('campaign/refundstatus/:id')
  updateCampaignRefundStatus(
    @Param('id') id: number,
    @Body() updateCampaignRefundStatus: UpdateCampaignRefundStatusDto,
  ): Promise<boolean> {
    return this.campaignService.updateCampaignRefundStatus(
      id,
      updateCampaignRefundStatus,
    );
  }
}
