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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const account_entity_1 = require("./entities/account.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AccountService = class AccountService {
    constructor(accountsRepository) {
        this.accountsRepository = accountsRepository;
    }
    findAll() {
        return this.accountsRepository.find();
    }
    findByUserOne(id) {
        return this.accountsRepository.findOne({
            where: [{ email: id }],
        });
    }
    async create(account) {
        await this.accountsRepository.save(account);
    }
    async deleteUser(id) {
        const deleteUser = await this.accountsRepository.delete(id);
        if (deleteUser.affected === 0) {
            throw new common_1.NotFoundException('There is no user');
        }
        return true;
    }
    async setUser(id, updateAccountDto) {
        const { walletAddress, walletKind, nickName } = updateAccountDto;
        const changeUser = await this.accountsRepository.update({ id }, { walletAddress, walletKind, nickName });
        if (changeUser.affected !== 1) {
            throw new common_1.NotFoundException('There is no user');
        }
        return true;
    }
    async updateAccessToken(id, updateAccountAccessTokenDto) {
        const { accessToken } = updateAccountAccessTokenDto;
        const changeUser = await this.accountsRepository.update({ id }, { accessToken });
        if (changeUser.affected !== 1) {
            throw new common_1.NotFoundException('There is no user');
        }
        return true;
    }
    async setWallet(id, updateAccountWalletDto) {
        const { walletAddress, walletKind } = updateAccountWalletDto;
        const changeUser = await this.accountsRepository.update({ id }, { walletAddress, walletKind });
        if (changeUser.affected !== 1) {
            throw new common_1.NotFoundException('There is no user');
        }
        return true;
    }
    async setNickName(id, updateAccountNickNameDto) {
        const { nickName } = updateAccountNickNameDto;
        const changeUser = await this.accountsRepository.update({ id }, { nickName });
        if (changeUser.affected !== 1) {
            throw new common_1.NotFoundException('There is no user');
        }
        return true;
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(account_entity_1.Account)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map