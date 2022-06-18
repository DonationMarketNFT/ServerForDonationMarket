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
exports.NftController = void 0;
const common_1 = require("@nestjs/common");
const nft_service_1 = require("./nft.service");
const create_nft_dto_1 = require("./dto/create-nft.dto");
const update_nftUsed_dto_1 = require("./dto/update-nftUsed.dto");
let NftController = class NftController {
    constructor(nftService) {
        this.nftService = nftService;
    }
    getAll() {
        return this.nftService.getAll();
    }
    findByCampaign(campaignId) {
        return this.nftService.findByCampaignId(campaignId);
    }
    create(nft) {
        return this.nftService.create(nft);
    }
    deleteNftParam(id) {
        return this.nftService.deleteNft(id);
    }
    updateNftUsedStatus(id, updateNftUsedStatus) {
        return this.nftService.updateNftUsedStatus(id, updateNftUsedStatus);
    }
};
__decorate([
    (0, common_1.Get)('/nft_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/nft/:campaignId'),
    __param(0, (0, common_1.Param)('campaignId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "findByCampaign", null);
__decorate([
    (0, common_1.Post)('/create_nft'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nft_dto_1.CreateNftDto]),
    __metadata("design:returntype", void 0)
], NftController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('nft/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "deleteNftParam", null);
__decorate([
    (0, common_1.Patch)('nft/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_nftUsed_dto_1.UpdateNftUsedDto]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "updateNftUsedStatus", null);
NftController = __decorate([
    (0, common_1.Controller)('nfts'),
    __metadata("design:paramtypes", [nft_service_1.NftService])
], NftController);
exports.NftController = NftController;
//# sourceMappingURL=nft.controller.js.map