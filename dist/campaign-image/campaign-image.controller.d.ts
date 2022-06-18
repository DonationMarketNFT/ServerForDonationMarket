/// <reference types="multer" />
import { CampaignImageService } from './campaign-image.service';
import 'dotenv/config';
export declare class CampaignImageController {
    private readonly campaignImageService;
    constructor(campaignImageService: CampaignImageService);
    uploadImage(files: Express.Multer.File): Promise<string>;
}
