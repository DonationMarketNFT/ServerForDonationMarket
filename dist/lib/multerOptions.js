"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageURL = exports.multerOptions = void 0;
const HttpError_1 = require("../exception/HttpError");
const fs_1 = require("fs");
const multer_1 = require("multer");
const uuidRandom_1 = require("./uuidRandom");
exports.multerOptions = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }
        else {
            callback(new HttpError_1.default(400, '지원하지 않는 이미지 형식입니다.'), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (request, file, callback) => {
            const uploadPath = 'public';
            if (!(0, fs_1.existsSync)(uploadPath)) {
                (0, fs_1.mkdirSync)(uploadPath);
            }
            callback(null, uploadPath);
        },
        filename: (request, file, callback) => {
            callback(null, (0, uuidRandom_1.default)(file));
        },
    }),
};
const createImageURL = (file) => {
    const serverAddress = 'http://localhost:3000';
    return `${serverAddress}/public/${file.filename}`;
};
exports.createImageURL = createImageURL;
//# sourceMappingURL=multerOptions.js.map