"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const account_module_1 = require("./account/account.module");
const campaign_module_1 = require("./campaign/campaign.module");
const pre_campaign_module_1 = require("./pre-campaign/pre-campaign.module");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("./account/entities/account.entity");
const campaign_entity_1 = require("./campaign/entities/campaign.entity");
const preCampaign_entity_1 = require("./pre-campaign/entities/preCampaign.entity");
const account_wc_module_1 = require("./account-wc/account-wc.module");
const accountWc_entity_1 = require("./account-wc/entities/accountWc.entity");
const upload_controller_1 = require("./upload/upload.controller");
const upload_service_1 = require("./upload/upload.service");
const image_module_1 = require("./image/image.module");
const nft_module_1 = require("./nft/nft.module");
const nft_entity_1 = require("./nft/entities/nft.entity");
const campaign_image_module_1 = require("./campaign-image/campaign-image.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            account_module_1.AccountModule,
            campaign_module_1.CampaignModule,
            pre_campaign_module_1.PreCampaignModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com',
                port: '3306',
                username: 'donationmarketnft',
                password: 'ekdns1130!',
                database: 'donation_market',
                entities: [account_entity_1.Account, campaign_entity_1.Campaign, preCampaign_entity_1.PreCampaign, accountWc_entity_1.AccountWc, nft_entity_1.Nft],
                sychronize: true,
            }),
            account_module_1.AccountModule,
            campaign_module_1.CampaignModule,
            pre_campaign_module_1.PreCampaignModule,
            account_wc_module_1.AccountWcModule,
            image_module_1.ImageModule,
            nft_module_1.NftModule,
            campaign_image_module_1.CampaignImageModule,
        ],
        controllers: [app_controller_1.AppController, upload_controller_1.UploadController],
        providers: [app_service_1.AppService, upload_service_1.UploadService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map