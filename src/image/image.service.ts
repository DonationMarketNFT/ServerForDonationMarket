import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { CampaignService } from '../campaign/campaign.service';
import { Campaign } from '../campaign/entities/campaign.entity';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(
  '45ebfb6f3ccf08d5f06d',
  '5dbc48b2f862e552f77df7c732acd0122bdc69541e59b2b459352b626b3dc924',
);

@Injectable()
export class ImageService {
  async uploadImage(files, CampaignInfo) {
    console.log(files);
    console.log(CampaignInfo);

    const nftName = CampaignInfo.CampaignName; // name of nft
    const description = CampaignInfo.CampaignDescription; // description of nft

    let i = 0;
    files.map((image) => {
      console.log(image.location);

      const json = `{"name":"${nftName} #${i}","description":"${description}","image":"${image.location}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
      const fs = require('fs');
      fs.writeFile(`json/${i}.json`, json, 'utf8', (e) => e);

      const readableStreamForFile = fs.createReadStream(
        `/Users/kimdawoon/donation-market/json/${i}.json`,
      );

      pinata
        .pinFileToIPFS(readableStreamForFile)
        .then((result) => {
          //handle results here
          console.log(result);
        })
        .catch((err) => {
          //handle error here
          console.log(err);
        });
      i++;
    });
    console.log('complete!');
    return 'SUCESS';
  }
}
