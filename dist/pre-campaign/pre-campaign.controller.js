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
exports.PreCampaignController = void 0;
const common_1 = require("@nestjs/common");
const pre_campaign_service_1 = require("./pre-campaign.service");
const create_preCampaign_dto_1 = require("./dto/create-preCampaign.dto");
const update_preCampaign_dto_1 = require("./dto/update-preCampaign.dto");
const update_preCampaignFundingStatus_dto_1 = require("./dto/update-preCampaignFundingStatus.dto");
const update_preCampaignRefundStatus_dto_1 = require("./dto/update-preCampaignRefundStatus.dto");
let PreCampaignController = class PreCampaignController {
    constructor(preCampaignService) {
        this.preCampaignService = preCampaignService;
    }
    getAll() {
        return this.preCampaignService.getAll();
    }
    findByFundingStatusTrue() {
        return this.preCampaignService.findByFundingStatusTrue();
    }
    findByRefundStatusTrue() {
        return this.preCampaignService.findByRefundStatueTure();
    }
    findByPreCampaignIdQuery(preCampaignId) {
        return this.preCampaignService.findByPreCampaignOne(preCampaignId);
    }
    findByPreCampaignIdParam(preCampaignId) {
        return this.preCampaignService.findByPreCampaignOne(preCampaignId);
    }
    create(preCampaign) {
        return this.preCampaignService.create(preCampaign);
    }
    deletePreCampaignQuery(id) {
        return this.preCampaignService.deletePreCampaign(id);
    }
    deletePreCampaignParam(id) {
        return this.preCampaignService.deletePreCampaign(id);
    }
    setPreCampaign(id, updatePreCampaignDto) {
        return this.preCampaignService.setPreCampaign(id, updatePreCampaignDto);
    }
    updateCampaignFundingStatus(id, updatePreCampaignFundingStatus) {
        return this.preCampaignService.updatePreCampaignFundingStatus(id, updatePreCampaignFundingStatus);
    }
    updatePreCampaignRefundStatus(id, updatePreCampaignRefundStatus) {
        return this.preCampaignService.updatePreCampaignRefundStatus(id, updatePreCampaignRefundStatus);
    }
};
__decorate([
    (0, common_1.Get)('/campaign_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/campaign/Onfunding'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "findByFundingStatusTrue", null);
__decorate([
    (0, common_1.Get)('/campaign/OnRefund'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "findByRefundStatusTrue", null);
__decorate([
    (0, common_1.Get)('/campaign'),
    __param(0, (0, common_1.Query)('preCampaignId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "findByPreCampaignIdQuery", null);
__decorate([
    (0, common_1.Get)('campaign/:preCampaignId'),
    __param(0, (0, common_1.Param)('preCampaignId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "findByPreCampaignIdParam", null);
__decorate([
    (0, common_1.Post)('create_campaign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preCampaign_dto_1.CreatePreCampaignDto]),
    __metadata("design:returntype", void 0)
], PreCampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('campaign/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "deletePreCampaignQuery", null);
__decorate([
    (0, common_1.Delete)('campaign/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "deletePreCampaignParam", null);
__decorate([
    (0, common_1.Patch)('campaign/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preCampaign_dto_1.UpdatePreCampaignDto]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "setPreCampaign", null);
__decorate([
    (0, common_1.Patch)('campaign/fundingstatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preCampaignFundingStatus_dto_1.UpdatePreCampaignFundingStatusDto]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "updateCampaignFundingStatus", null);
__decorate([
    (0, common_1.Patch)('campaign/refundstatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preCampaignRefundStatus_dto_1.UpdatePreCampaignRefundStatusDto]),
    __metadata("design:returntype", Promise)
], PreCampaignController.prototype, "updatePreCampaignRefundStatus", null);
PreCampaignController = __decorate([
    (0, common_1.Controller)('pre-campaigns'),
    __metadata("design:paramtypes", [pre_campaign_service_1.PreCampaignService])
], PreCampaignController);
exports.PreCampaignController = PreCampaignController;
//# sourceMappingURL=pre-campaign.controller.js.map