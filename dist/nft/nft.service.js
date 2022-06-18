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
exports.NftService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const nft_entity_1 = require("./entities/nft.entity");
let NftService = class NftService {
    constructor(nftRepository) {
        this.nftRepository = nftRepository;
    }
    getAll() {
        return this.nftRepository.find();
    }
    findByCampaignId(_camapaignId) {
        return this.nftRepository.find({
            where: [{ campaignId: _camapaignId, used: false }],
        });
    }
    async create(nft) {
        await this.nftRepository.save(nft);
    }
    async deleteNft(id) {
        const deleteNft = await this.nftRepository.delete(id);
        if (deleteNft.affected === 0) {
            throw new common_1.NotFoundException('There is no nft');
        }
        return true;
    }
    async updateNftUsedStatus(id, updateNftUsedStatus) {
        const { used } = updateNftUsedStatus;
        const changeNft = await this.nftRepository.update({ id }, { used });
        if (changeNft.affected !== 1) {
            throw new common_1.NotFoundException('There is no Nft');
        }
        return true;
    }
};
NftService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(nft_entity_1.Nft)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NftService);
exports.NftService = NftService;
//# sourceMappingURL=nft.service.js.map