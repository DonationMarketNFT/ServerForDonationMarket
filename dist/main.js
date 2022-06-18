"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const path_1 = require("path");
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('45ebfb6f3ccf08d5f06d', '5dbc48b2f862e552f77df7c732acd0122bdc69541e59b2b459352b626b3dc924');
const fs = require('fs');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/public', express.static((0, path_1.join)(__dirname, '../public')));
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (validationErrors = []) => {
            return new common_1.BadRequestException(validationErrors);
        },
    }));
    await app.listen(3000);
}
pinata
    .testAuthentication()
    .then((result) => {
    console.log('authentication sucess');
    console.log(result);
})
    .catch((err) => {
    console.log('authentication failed');
    console.log(err);
});
bootstrap();
//# sourceMappingURL=main.js.map