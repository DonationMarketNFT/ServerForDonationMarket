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
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const campaign_service_1 = require("./campaign.service");
const create_campaign_dto_1 = require("./dto/create-campaign.dto");
const update_campaign_dto_1 = require("./dto/update-campaign.dto");
const update_campaignFundingStatus_dto_1 = require("./dto/update-campaignFundingStatus.dto");
const update_campaignRefundStatus_dto_1 = require("./dto/update-campaignRefundStatus.dto");
let CampaignController = class CampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    getAll() {
        return this.campaignService.getAll();
    }
    findByFundingStatusTrue() {
        return this.campaignService.findByFundingStatusTrue();
    }
    findByRefundStatusTrue() {
        return this.campaignService.findByRefundStatueTure();
    }
    findByCampaignIdQuery(campaignId) {
        return this.campaignService.findByCampaignOne(campaignId);
    }
    findByCampaignIdParam(campaignId) {
        return this.campaignService.findByCampaignOne(campaignId);
    }
    create(campaign) {
        return this.campaignService.create(campaign);
    }
    deleteCampaignQuery(id) {
        return this.campaignService.deleteCampaign(id);
    }
    deleteCampaignParam(id) {
        return this.campaignService.deleteCampaign(id);
    }
    setCampaign(id, updateCampaignDto) {
        return this.campaignService.setCampaign(id, updateCampaignDto);
    }
    updateCampaignFundingStatus(id, updateCampaignFundingStatus) {
        return this.campaignService.updateCampaignFundingStatus(id, updateCampaignFundingStatus);
    }
    updateCampaignRefundStatus(id, updateCampaignRefundStatus) {
        return this.campaignService.updateCampaignRefundStatus(id, updateCampaignRefundStatus);
    }
};
__decorate([
    (0, common_1.Get)('/campaign_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/campaign/Onfunding'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findByFundingStatusTrue", null);
__decorate([
    (0, common_1.Get)('/campaign/OnRefund'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findByRefundStatusTrue", null);
__decorate([
    (0, common_1.Get)('/camapaign'),
    __param(0, (0, common_1.Query)('campaignId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findByCampaignIdQuery", null);
__decorate([
    (0, common_1.Get)('campaign/:campaignId'),
    __param(0, (0, common_1.Param)('campaignId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findByCampaignIdParam", null);
__decorate([
    (0, common_1.Post)('/create_campaign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campaign_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('campaign/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "deleteCampaignQuery", null);
__decorate([
    (0, common_1.Delete)('campaign/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "deleteCampaignParam", null);
__decorate([
    (0, common_1.Patch)('campaign/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_campaign_dto_1.UpdateCampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "setCampaign", null);
__decorate([
    (0, common_1.Patch)('campaign/fundingstatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_campaignFundingStatus_dto_1.UpdateCampaignFundingStatusDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "updateCampaignFundingStatus", null);
__decorate([
    (0, common_1.Patch)('campaign/refundstatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_campaignRefundStatus_dto_1.UpdateCampaignRefundStatusDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "updateCampaignRefundStatus", null);
CampaignController = __decorate([
    (0, common_1.Controller)('campaigns'),
    __metadata("design:paramtypes", [campaign_service_1.CampaignService])
], CampaignController);
exports.CampaignController = CampaignController;
//# sourceMappingURL=campaign.controller.js.map