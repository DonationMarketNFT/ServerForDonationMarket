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
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const campaign_entity_1 = require("./entities/campaign.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CampaignService = class CampaignService {
    constructor(camapaignsRepository) {
        this.camapaignsRepository = camapaignsRepository;
    }
    getAll() {
        return this.camapaignsRepository.find();
    }
    findByCampaignOne(campaignId) {
        return this.camapaignsRepository.findOne({
            where: [{ id: campaignId }],
        });
    }
    findByFundingStatusTrue() {
        return this.camapaignsRepository.find({
            where: [{ fundingStatus: true }],
        });
    }
    findByRefundStatueTure() {
        return this.camapaignsRepository.find({
            where: [{ refundStatus: true }],
        });
    }
    async create(campaign) {
        await this.camapaignsRepository.save(campaign);
    }
    async deleteCampaign(id) {
        const deleteCampaign = await this.camapaignsRepository.delete(id);
        if (deleteCampaign.affected === 0) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
    async setCampaign(id, updateCampaignDto) {
        const { name, description, targetAmount, currentAmount, fundingStatus, refundStatus, category, } = updateCampaignDto;
        const changeCampaign = await this.camapaignsRepository.update({ id }, {
            name,
            description,
            targetAmount,
            currentAmount,
            fundingStatus,
            refundStatus,
            category,
        });
        if (changeCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
    async updateCampaignFundingStatus(id, updateCampaignFundingStatus) {
        const { fundingStatus } = updateCampaignFundingStatus;
        const changeCampaign = await this.camapaignsRepository.update({ id }, { fundingStatus });
        if (changeCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
    async updateCampaignRefundStatus(id, updateCampaignRefundStatus) {
        const { refundStatus } = updateCampaignRefundStatus;
        const changeCampaign = await this.camapaignsRepository.update({ id }, { refundStatus });
        if (changeCampaign.affected !== 1) {
            throw new common_1.NotFoundException('There is no campaign');
        }
        return true;
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(campaign_entity_1.Campaign)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map