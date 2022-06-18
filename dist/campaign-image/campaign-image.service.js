"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignImageService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();
let CampaignImageService = class CampaignImageService {
    async uploadImage(files) {
        console.log(files);
        console.log(files.length);
        const cnt = files.length;
        console.log('complete!');
        return 'SUCESS';
    }
};
CampaignImageService = __decorate([
    (0, common_1.Injectable)()
], CampaignImageService);
exports.CampaignImageService = CampaignImageService;
//# sourceMappingURL=campaign-image.service.js.map