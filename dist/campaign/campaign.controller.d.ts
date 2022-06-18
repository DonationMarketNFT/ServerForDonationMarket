import { CampaignService } from './campaign.service';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { UpdateCampaignFundingStatusDto } from './dto/update-campaignFundingStatus.dto';
import { UpdateCampaignRefundStatusDto } from './dto/update-campaignRefundStatus.dto';
export declare class CampaignController {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    getAll(): Promise<Campaign[]>;
    findByFundingStatusTrue(): Promise<Campaign[]>;
    findByRefundStatusTrue(): Promise<Campaign[]>;
    findByCampaignIdQuery(campaignId: number): Promise<Campaign>;
    findByCampaignIdParam(campaignId: number): Promise<Campaign>;
    create(campaign: CreateCampaignDto): Promise<void>;
    deleteCampaignQuery(id: string): Promise<boolean>;
    deleteCampaignParam(id: string): Promise<boolean>;
    setCampaign(id: number, updateCampaignDto: UpdateCampaignDto): Promise<boolean>;
    updateCampaignFundingStatus(id: number, updateCampaignFundingStatus: UpdateCampaignFundingStatusDto): Promise<boolean>;
    updateCampaignRefundStatus(id: number, updateCampaignRefundStatus: UpdateCampaignRefundStatusDto): Promise<boolean>;
}
