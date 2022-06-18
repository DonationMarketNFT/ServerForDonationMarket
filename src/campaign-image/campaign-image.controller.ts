import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CampaignImageService } from './campaign-image.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import 'dotenv/config';

const s3 = new AWS.S3();

@Controller('campaign-image')
export class CampaignImageController {
  constructor(private readonly campaignImageService: CampaignImageService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 200, {
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET_NAME,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        // metadata: function (req, file, cb) {
        //   cb(null, { fieldName: file.fieldname });
        // },
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadImage(@UploadedFiles() files: Express.Multer.File) {
    return this.campaignImageService.uploadImage(files);
  }
}
