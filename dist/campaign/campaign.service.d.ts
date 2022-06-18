import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { Repository } from 'typeorm';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { UpdateCampaignFundingStatusDto } from './dto/update-campaignFundingStatus.dto';
import { UpdateCampaignRefundStatusDto } from './dto/update-campaignRefundStatus.dto';
export declare class CampaignService {
    private camapaignsRepository;
    constructor(camapaignsRepository: Repository<Campaign>);
    getAll(): Promise<Campaign[]>;
    findByCampaignOne(campaignId: number): Promise<Campaign>;
    findByFundingStatusTrue(): Promise<Campaign[]>;
    findByRefundStatueTure(): Promise<Campaign[]>;
    create(campaign: CreateCampaignDto): Promise<void>;
    deleteCampaign(id: string): Promise<boolean>;
    setCampaign(id: number, updateCampaignDto: UpdateCampaignDto): Promise<boolean>;
    updateCampaignFundingStatus(id: number, updateCampaignFundingStatus: UpdateCampaignFundingStatusDto): Promise<boolean>;
    updateCampaignRefundStatus(id: number, updateCampaignRefundStatus: UpdateCampaignRefundStatusDto): Promise<boolean>;
}
