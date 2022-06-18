import { PreCampaignService } from './pre-campaign.service';
import { PreCampaign } from './entities/preCampaign.entity';
import { CreatePreCampaignDto } from './dto/create-preCampaign.dto';
import { UpdatePreCampaignDto } from './dto/update-preCampaign.dto';
import { UpdatePreCampaignFundingStatusDto } from './dto/update-preCampaignFundingStatus.dto';
import { UpdatePreCampaignRefundStatusDto } from './dto/update-preCampaignRefundStatus.dto';
export declare class PreCampaignController {
    private readonly preCampaignService;
    constructor(preCampaignService: PreCampaignService);
    getAll(): Promise<PreCampaign[]>;
    findByFundingStatusTrue(): Promise<PreCampaign[]>;
    findByRefundStatusTrue(): Promise<PreCampaign[]>;
    findByPreCampaignIdQuery(preCampaignId: number): Promise<PreCampaign>;
    findByPreCampaignIdParam(preCampaignId: number): Promise<PreCampaign>;
    create(preCampaign: CreatePreCampaignDto): Promise<void>;
    deletePreCampaignQuery(id: string): Promise<boolean>;
    deletePreCampaignParam(id: string): Promise<boolean>;
    setPreCampaign(id: number, updatePreCampaignDto: UpdatePreCampaignDto): Promise<boolean>;
    updateCampaignFundingStatus(id: number, updatePreCampaignFundingStatus: UpdatePreCampaignFundingStatusDto): Promise<boolean>;
    updatePreCampaignRefundStatus(id: number, updatePreCampaignRefundStatus: UpdatePreCampaignRefundStatusDto): Promise<boolean>;
}
