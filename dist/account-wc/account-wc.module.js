"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWcModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_wc_controller_1 = require("./account-wc.controller");
const account_wc_service_1 = require("./account-wc.service");
const accountWc_entity_1 = require("./entities/accountWc.entity");
let AccountWcModule = class AccountWcModule {
};
AccountWcModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([accountWc_entity_1.AccountWc])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [account_wc_controller_1.AccountWcController],
        providers: [account_wc_service_1.AccountWcService],
    })
], AccountWcModule);
exports.AccountWcModule = AccountWcModule;
//# sourceMappingURL=account-wc.module.js.map