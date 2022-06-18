"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreCampaignModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pre_campaign_controller_1 = require("./pre-campaign.controller");
const pre_campaign_service_1 = require("./pre-campaign.service");
const preCampaign_entity_1 = require("./entities/preCampaign.entity");
let PreCampaignModule = class PreCampaignModule {
};
PreCampaignModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([preCampaign_entity_1.PreCampaign])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [pre_campaign_controller_1.PreCampaignController],
        providers: [pre_campaign_service_1.PreCampaignService],
    })
], PreCampaignModule);
exports.PreCampaignModule = PreCampaignModule;
//# sourceMappingURL=pre-campaign.module.js.map