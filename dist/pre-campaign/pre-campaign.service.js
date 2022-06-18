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
exports.PreCampaignService = void 0;
const common_1 = require("@nestjs/common");
const preCampaign_entity_1 = require("./entities/preCampaign.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PreCampaignService = class PreCampaignService {
    constructor(preCampaignsRepository) {
        this.preCampaignsRepository = preCampaignsRepository;
    }
    getAll() {
        return this.preCampaignsRepository.find();
    }
    findByPreCampaignOne(preCampaignId) {
        return this.preCampaignsRepository.findOne({
            where: [{ id: preCampaignId }],
        });
    }
    findByFundingStatusTrue() {
        return this.preCampaignsRepository.find({
            where: [{ fundingStatus: true }],
        });
    }
    findByRefundStatueTure() {
        return this.preCampaignsRepository.find({
            where: [{ refundStatus: true }],
        });
    }
    async create(preCampaign) {
        await this.preCampaignsRepository.save(preCampaign);
    }
    async deletePreCampaign(id) {
        const deletePreCampaign = await this.preCampaignsRepository.delete(id);
        if (deletePreCampaign.affected === 0) {
            throw new common_1.NotFoundException('There is no preCampaign');
        }
        return true;
    }
    async setPreCampaign(id, updatePreCampaignDto) {
        const { name, description, targetAmount, currentAmount, fundingStatus, refundStatus, category, } = updatePreCampaignDto;
        const changePreCampaign = await this.preCampaignsRepository.update({ id }, {
            name,
            description,
            targetAmount,
            currentAmount,
            fundingStatus,
            refundStatus,
            category,
        });
        if (changePreCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
    async updatePreCampaignFundingStatus(id, updatePreCampaignFundingStatus) {
        const { fundingStatus } = updatePreCampaignFundingStatus;
        const changeCampaign = await this.preCampaignsRepository.update({ id }, { fundingStatus });
        if (changeCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
    async updatePreCampaignRefundStatus(id, updatePreCampaignRefundStatus) {
        const { refundStatus } = updatePreCampaignRefundStatus;
        const changeCampaign = await this.preCampaignsRepository.update({ id }, { refundStatus });
        if (changeCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
};
PreCampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(preCampaign_entity_1.PreCampaign)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PreCampaignService);
exports.PreCampaignService = PreCampaignService;
//# sourceMappingURL=pre-campaign.service.js.map