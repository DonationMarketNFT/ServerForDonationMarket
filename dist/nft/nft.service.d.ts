import { Repository } from 'typeorm';
import { Nft } from './entities/nft.entity';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftUsedDto } from './dto/update-nftUsed.dto';
export declare class NftService {
    private nftRepository;
    constructor(nftRepository: Repository<Nft>);
    getAll(): Promise<Nft[]>;
    findByCampaignId(_camapaignId: number): Promise<Nft[]>;
    create(nft: CreateNftDto): Promise<void>;
    deleteNft(id: string): Promise<boolean>;
    updateNftUsedStatus(id: number, updateNftUsedStatus: UpdateNftUsedDto): Promise<boolean>;
}
