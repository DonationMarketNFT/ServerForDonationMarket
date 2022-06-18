import { CreatePreCampaignDto } from './dto/create-preCampaign.dto';
import { PreCampaign } from './entities/preCampaign.entity';
import { Repository } from 'typeorm';
import { UpdatePreCampaignDto } from './dto/update-preCampaign.dto';
import { UpdatePreCampaignFundingStatusDto } from './dto/update-preCampaignFundingStatus.dto';
import { UpdatePreCampaignRefundStatusDto } from './dto/update-preCampaignRefundStatus.dto';
export declare class PreCampaignService {
    private preCampaignsRepository;
    constructor(preCampaignsRepository: Repository<PreCampaign>);
    getAll(): Promise<PreCampaign[]>;
    findByPreCampaignOne(preCampaignId: number): Promise<PreCampaign>;
    findByFundingStatusTrue(): Promise<PreCampaign[]>;
    findByRefundStatueTure(): Promise<PreCampaign[]>;
    create(preCampaign: CreatePreCampaignDto): Promise<void>;
    deletePreCampaign(id: string): Promise<boolean>;
    setPreCampaign(id: number, updatePreCampaignDto: UpdatePreCampaignDto): Promise<boolean>;
    updatePreCampaignFundingStatus(id: number, updatePreCampaignFundingStatus: UpdatePreCampaignFundingStatusDto): Promise<boolean>;
    updatePreCampaignRefundStatus(id: number, updatePreCampaignRefundStatus: UpdatePreCampaignRefundStatusDto): Promise<boolean>;
}
