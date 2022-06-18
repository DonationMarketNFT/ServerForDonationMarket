"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const typeorm_1 = require("@nestjs/typeorm");
const nft_entity_1 = require("../nft/entities/nft.entity");
const typeorm_2 = require("typeorm");
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('45ebfb6f3ccf08d5f06d', '5dbc48b2f862e552f77df7c732acd0122bdc69541e59b2b459352b626b3dc924');
let ImageService = class ImageService {
    constructor(nftRepository) {
        this.nftRepository = nftRepository;
    }
    async uploadImage(files, CampaignInfo) {
        console.log(files);
        console.log(files.length);
        console.log(CampaignInfo);
        const cnt = files.length;
        const nftName = CampaignInfo.CampaignName;
        const description = CampaignInfo.CampaignDescription;
        const campaignId = CampaignInfo.CampaignId;
        const fs = require('fs');
        let i = 0;
        files.map((image) => {
            console.log(image.location);
            const json = `{"name":"${nftName} #${i}","description":"${description}","image":"${image.location}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
            fs.writeFile(`json/${i}.json`, json, 'utf8', (e) => e);
            i++;
        });
        for (let j = 0; j < cnt; j++) {
            const readableStreamForFile = fs.createReadStream(`json/${j}.json`);
            pinata
                .pinFileToIPFS(readableStreamForFile)
                .then((result) => {
                console.log(result);
                console.log(result.IpfsHash);
                const tokenUri = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
                this.nftRepository.save({
                    campaignName: nftName,
                    campaignId: campaignId,
                    nftUri: tokenUri,
                    nftNum: j,
                    used: false,
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }
        console.log('complete!');
        return 'SUCESS';
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nft_entity_1.Nft)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map