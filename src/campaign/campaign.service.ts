import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignService {
  private campaigns: Campaign[] = [];

  getAll(): Campaign[] {
    return this.campaigns;
  }

  getOne(id: number): Campaign {
    const campaign = this.campaigns.find((campaign) => campaign.id == id);
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID${id} not found.`);
    }
    return campaign;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.campaigns = this.campaigns.filter((campaign) => campaign.id != id);
  }

  create(campaignData: CreateCampaignDto) {
    this.campaigns.push({
      id: this.campaigns.length + 1,
      ...campaignData,
    });
  }
}
