import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFiles(files: File[]): {
        status: number;
        message: string;
        data: {
            files: string[];
        };
    };
}
