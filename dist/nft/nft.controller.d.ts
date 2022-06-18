import { NftService } from './nft.service';
import { Nft } from './entities/nft.entity';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftUsedDto } from './dto/update-nftUsed.dto';
export declare class NftController {
    private readonly nftService;
    constructor(nftService: NftService);
    getAll(): Promise<Nft[]>;
    findByCampaign(campaignId: number): Promise<Nft[]>;
    create(nft: CreateNftDto): Promise<void>;
    deleteNftParam(id: string): Promise<boolean>;
    updateNftUsedStatus(id: number, updateNftUsedStatus: UpdateNftUsedDto): Promise<boolean>;
}
