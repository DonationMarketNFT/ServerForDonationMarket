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
import { PreCampaignService } from './pre-campaign.service';
import { PreCampaign } from './entities/preCampaign.entity';
import { CreatePreCampaignDto } from './dto/create-preCampaign.dto';
import { UpdatePreCampaignDto } from './dto/update-preCampaign.dto';
import { UpdatePreCampaignFundingStatusDto } from './dto/update-preCampaignFundingStatus.dto';
import { UpdatePreCampaignRefundStatusDto } from './dto/update-preCampaignRefundStatus.dto';
@Controller('pre-campaigns')
export class PreCampaignController {
  constructor(private readonly preCampaignService: PreCampaignService) {}

  @Get('/campaign_all')
  getAll(): Promise<PreCampaign[]> {
    return this.preCampaignService.getAll();
  }

  @Get('/campaign')
  findByPreCampaignIdQuery(
    @Query('preCampaignId') preCampaignId: number,
  ): Promise<PreCampaign> {
    return this.preCampaignService.findByPreCampaignOne(preCampaignId);
  }

  @Get('campaign/:preCampaignId')
  findByPreCampaignIdParam(
    @Param('preCampaignId') preCampaignId: number,
  ): Promise<PreCampaign> {
    return this.preCampaignService.findByPreCampaignOne(preCampaignId);
  }

  @Post('create_campaign')
  create(@Body() preCampaign: CreatePreCampaignDto) {
    return this.preCampaignService.create(preCampaign);
  }

  @Delete('campaign/delete')
  deletePreCampaignQuery(@Query('id') id: string): Promise<boolean> {
    return this.preCampaignService.deletePreCampaign(id);
  }

  @Delete('campaign/delete/:id')
  deletePreCampaignParam(@Param('id') id: string): Promise<boolean> {
    return this.preCampaignService.deletePreCampaign(id);
  }

  @Patch('campaign/:id')
  setPreCampaign(
    @Param('id') id: number,
    @Body() updatePreCampaignDto: UpdatePreCampaignDto,
  ): Promise<boolean> {
    return this.preCampaignService.setPreCampaign(id, updatePreCampaignDto);
  }

  @Patch('campaign/fundingstatus/:id')
  updateCampaignFundingStatus(
    @Param('id') id: number,
    @Body() updatePreCampaignFundingStatus: UpdatePreCampaignFundingStatusDto,
  ): Promise<boolean> {
    return this.preCampaignService.updatePreCampaignFundingStatus(
      id,
      updatePreCampaignFundingStatus,
    );
  }

  @Patch('campaign/refundstatus/:id')
  updatePreCampaignRefundStatus(
    @Param('id') id: number,
    @Body() updatePreCampaignRefundStatus: UpdatePreCampaignRefundStatusDto,
  ): Promise<boolean> {
    return this.preCampaignService.updatePreCampaignRefundStatus(
      id,
      updatePreCampaignRefundStatus,
    );
  }
}
