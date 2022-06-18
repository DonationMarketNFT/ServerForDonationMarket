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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const update_account_dto_1 = require("./dto/update-account.dto");
const update_accoutAccessToken_dto_1 = require("./dto/update-accoutAccessToken.dto");
const update_account_wallet_dto_1 = require("./dto/update-account-wallet.dto");
const update_account_nickname_dto_1 = require("./dto/update-account-nickname.dto");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    findAll() {
        return this.accountService.findAll();
    }
    findByUserOneEmailQuery(id) {
        return this.accountService.findByUserOne(id);
    }
    findByUserOneEmailParam(id) {
        return this.accountService.findByUserOne(id);
    }
    create(account) {
        return this.accountService.create(account);
    }
    deleteUserQuery(id) {
        return this.accountService.deleteUser(id);
    }
    deleteUserParam(id) {
        return this.accountService.deleteUser(id);
    }
    setUser(id, updateAccountDto) {
        return this.accountService.setUser(id, updateAccountDto);
    }
    updateAccessToken(id, updateAccountAccessTokenDto) {
        return this.accountService.updateAccessToken(id, updateAccountAccessTokenDto);
    }
    setWallet(id, updateAccountWalletDto) {
        return this.accountService.setWallet(id, updateAccountWalletDto);
    }
    setNickName(id, updateAccountNickNameDto) {
        return this.accountService.setNickName(id, updateAccountNickNameDto);
    }
};
__decorate([
    (0, common_1.Get)('/user_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/user'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findByUserOneEmailQuery", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findByUserOneEmailParam", null);
__decorate([
    (0, common_1.Post)('/create_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/user/delete/'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "deleteUserQuery", null);
__decorate([
    (0, common_1.Delete)('/user/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "deleteUserParam", null);
__decorate([
    (0, common_1.Patch)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_account_dto_1.UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "setUser", null);
__decorate([
    (0, common_1.Patch)('user/updateaccesstoken/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_accoutAccessToken_dto_1.UpdateAccountAccessTokenDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "updateAccessToken", null);
__decorate([
    (0, common_1.Patch)('user/updatewallet/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_account_wallet_dto_1.UpdateAccountWalletDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "setWallet", null);
__decorate([
    (0, common_1.Patch)('user/updatenickname/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_account_nickname_dto_1.UpdateAccountNickNameDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "setNickName", null);
AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map