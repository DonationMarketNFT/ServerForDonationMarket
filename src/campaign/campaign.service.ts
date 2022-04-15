import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { UpdateCampaignFundingStatusDto } from './dto/update-campaignFundingStatus.dto';
import { UpdateCampaignRefundStatusDto } from './dto/update-campaignRefundStatus.dto';
@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private camapaignsRepository: Repository<Campaign>,
  ) {}

  getAll(): Promise<Campaign[]> {
    return this.camapaignsRepository.find();
  }

  findByCampaignOne(campaignId: number): Promise<Campaign> {
    return this.camapaignsRepository.findOne({
      where: [{ id: campaignId }],
    });
  }

  async create(campaign: CreateCampaignDto): Promise<void> {
    await this.camapaignsRepository.save(campaign);
  }
  //TODO: block same Campaign id creation

  async deleteCampaign(id: string): Promise<boolean> {
    const deleteCampaign = await this.camapaignsRepository.delete(id);

    if (deleteCampaign.affected === 0) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }

  async setCampaign(
    id: number,
    updateCampaignDto: UpdateCampaignDto,
  ): Promise<boolean> {
    const {
      name,
      description,
      targetAmount,
      currentAmount,
      fundingStatus,
      refundStatus,
      category,
    } = updateCampaignDto;
    const changeCampaign = await this.camapaignsRepository.update(
      { id },
      {
        name,
        description,
        targetAmount,
        currentAmount,
        fundingStatus,
        refundStatus,
        category,
      },
    );

    if (changeCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }

  async updateCampaignFundingStatus(
    id: number,
    updateCampaignFundingStatus: UpdateCampaignFundingStatusDto,
  ): Promise<boolean> {
    const { fundingStatus } = updateCampaignFundingStatus;
    const changeCampaign = await this.camapaignsRepository.update(
      { id },
      { fundingStatus },
    );
    if (changeCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }

  async updateCampaignRefundStatus(
    id: number,
    updateCampaignRefundStatus: UpdateCampaignRefundStatusDto,
  ): Promise<boolean> {
    const { refundStatus } = updateCampaignRefundStatus;
    const changeCampaign = await this.camapaignsRepository.update(
      { id },
      { refundStatus },
    );
    if (changeCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }
}
