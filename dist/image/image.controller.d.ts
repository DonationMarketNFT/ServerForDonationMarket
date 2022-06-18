/// <reference types="multer" />
import { ImageService } from './image.service';
import 'dotenv/config';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    uploadImage(files: Express.Multer.File, CampaignInfo: string): Promise<string>;
}
