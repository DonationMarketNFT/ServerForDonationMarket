import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreCampaignDto } from './dto/create-preCampaign.dto';
import { PreCampaign } from './entities/preCampaign.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePreCampaignDto } from './dto/update-preCampaign.dto';
import { UpdatePreCampaignFundingStatusDto } from './dto/update-preCampaignFundingStatus.dto';
import { UpdatePreCampaignRefundStatusDto } from './dto/update-preCampaignRefundStatus.dto';

@Injectable()
export class PreCampaignService {
  constructor(
    @InjectRepository(PreCampaign)
    private preCampaignsRepository: Repository<PreCampaign>,
  ) {}

  getAll(): Promise<PreCampaign[]> {
    return this.preCampaignsRepository.find();
  }

  findByPreCampaignOne(preCampaignId: number): Promise<PreCampaign> {
    return this.preCampaignsRepository.findOne({
      where: [{ id: preCampaignId }],
    });
  }

  async create(preCampaign: CreatePreCampaignDto): Promise<void> {
    await this.preCampaignsRepository.save(preCampaign);
  }

  async deletePreCampaign(id: string): Promise<boolean> {
    const deletePreCampaign = await this.preCampaignsRepository.delete(id);

    if (deletePreCampaign.affected === 0) {
      throw new NotFoundException('There is no preCampaign');
    }
    return true;
  }

  async setPreCampaign(
    id: number,
    updatePreCampaignDto: UpdatePreCampaignDto,
  ): Promise<boolean> {
    const {
      name,
      description,
      targetAmount,
      currentAmount,
      fundingStatus,
      refundStatus,
      category,
    } = updatePreCampaignDto;

    const changePreCampaign = await this.preCampaignsRepository.update(
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

    if (changePreCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }

  async updatePreCampaignFundingStatus(
    id: number,
    updatePreCampaignFundingStatus: UpdatePreCampaignFundingStatusDto,
  ): Promise<boolean> {
    const { fundingStatus } = updatePreCampaignFundingStatus;
    const changeCampaign = await this.preCampaignsRepository.update(
      { id },
      { fundingStatus },
    );
    if (changeCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }

  async updatePreCampaignRefundStatus(
    id: number,
    updatePreCampaignRefundStatus: UpdatePreCampaignRefundStatusDto,
  ): Promise<boolean> {
    const { refundStatus } = updatePreCampaignRefundStatus;
    const changeCampaign = await this.preCampaignsRepository.update(
      { id },
      { refundStatus },
    );
    if (changeCampaign.affected !== 1) {
      throw new NotFoundException('There is no campaign');
    }
    return true;
  }
}
