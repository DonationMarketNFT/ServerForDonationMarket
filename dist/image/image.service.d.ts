import { Nft } from '../nft/entities/nft.entity';
import { Repository } from 'typeorm';
export declare class ImageService {
    private nftRepository;
    constructor(nftRepository: Repository<Nft>);
    uploadImage(files: any, CampaignInfo: any): Promise<string>;
}
