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
exports.EncDecController = void 0;
const common_1 = require("@nestjs/common");
const routeListEnum_1 = require("../const/routeListEnum");
const tagEnum_1 = require("../const/status/tagEnum");
const enc_dec_dto_1 = require("../models/enc_dec.dto");
const enc_dec_service_1 = require("../services/enc_dec.service");
const response_service_1 = require("../services/response.service");
let EncDecController = class EncDecController {
    constructor(encDecService, responseService) {
        this.encDecService = encDecService;
        this.responseService = responseService;
    }
    async encryptText(encryptDto) {
        let encryptedText = await this.encDecService.encryptText({ plainText: encryptDto.plainText });
        return encryptedText ? this.responseService.getResponse200({ msg: tagEnum_1.EncDecStatusTag.ENCRYPT_SUCCESS, data: encryptedText }) : this.responseService.getResponse422({ msg: tagEnum_1.EncDecStatusTag.ENCRYPT_FAILED });
    }
    async decryptText(decryptDto) {
        let decryptedText = await this.encDecService.decryptText({ encryptedData: decryptDto.encryptedData });
        return decryptedText ? this.responseService.getResponse200({ msg: tagEnum_1.EncDecStatusTag.DECRYPT_SUCCESS, data: decryptedText }) : this.responseService.getResponse422({ msg: tagEnum_1.EncDecStatusTag.DECRYPT_FAILED });
    }
};
exports.EncDecController = EncDecController;
__decorate([
    (0, common_1.Put)(routeListEnum_1.routeListEnum.EncryptedText),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enc_dec_dto_1.EncryptText]),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "encryptText", null);
__decorate([
    (0, common_1.Put)(routeListEnum_1.routeListEnum.DecryptedText),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enc_dec_dto_1.DecryptText]),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "decryptText", null);
exports.EncDecController = EncDecController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [enc_dec_service_1.EncDecService,
        response_service_1.ResponseService])
], EncDecController);
//# sourceMappingURL=enc_dec.controller.js.map