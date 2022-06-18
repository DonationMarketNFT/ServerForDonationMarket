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
exports.AccountWcController = void 0;
const common_1 = require("@nestjs/common");
const account_wc_service_1 = require("./account-wc.service");
const create_accountWc_dto_1 = require("./dto/create-accountWc.dto");
const update_accountWcNickName_dto_1 = require("./dto/update-accountWcNickName.dto");
let AccountWcController = class AccountWcController {
    constructor(accountWcService) {
        this.accountWcService = accountWcService;
    }
    findAll() {
        return this.accountWcService.findAll();
    }
    findByUserOneAddrParam(addr) {
        return this.accountWcService.findByUserAddr(addr);
    }
    findByUserOneNickNameParam(id) {
        return this.accountWcService.findByUserOne(id);
    }
    create(accountWc) {
        return this.accountWcService.create(accountWc);
    }
    deleteUserParam(id) {
        return this.accountWcService.deleteUser(id);
    }
    updateNickName(id, updateAccountWcNickNameDto) {
        return this.accountWcService.updateUserNickName(id, updateAccountWcNickNameDto);
    }
};
__decorate([
    (0, common_1.Get)('/user_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountWcController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/addr/:addr'),
    __param(0, (0, common_1.Param)('addr')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountWcController.prototype, "findByUserOneAddrParam", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountWcController.prototype, "findByUserOneNickNameParam", null);
__decorate([
    (0, common_1.Post)('/create_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accountWc_dto_1.CreateAccountWcDto]),
    __metadata("design:returntype", void 0)
], AccountWcController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('user/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountWcController.prototype, "deleteUserParam", null);
__decorate([
    (0, common_1.Patch)('user/updatenickname/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_accountWcNickName_dto_1.UpdateAccountWcNickNameDto]),
    __metadata("design:returntype", Promise)
], AccountWcController.prototype, "updateNickName", null);
AccountWcController = __decorate([
    (0, common_1.Controller)('account-wc'),
    __metadata("design:paramtypes", [account_wc_service_1.AccountWcService])
], AccountWcController);
exports.AccountWcController = AccountWcController;
//# sourceMappingURL=account-wc.controller.js.map