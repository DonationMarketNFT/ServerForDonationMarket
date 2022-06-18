/// <reference types="multer" />
export declare const multerOptions: {
    fileFilter: (request: any, file: any, callback: any) => void;
    storage: import("multer").StorageEngine;
};
export declare const createImageURL: (file: any) => string;
