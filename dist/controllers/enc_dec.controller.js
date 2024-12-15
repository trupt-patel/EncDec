"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const jsonReader_1 = require("../helper/jsonReader");
const enc_dec_service_1 = require("../services/enc_dec.service");
const response_service_1 = require("../services/response.service");
const fs_1 = require("fs");
const path = __importStar(require("path"));
const filePathEnum_1 = require("../const/filePathEnum");
const tagEnum_1 = require("../const/status/tagEnum");
const enc_dec_dto_1 = require("../models/enc_dec.dto");
let EncDecController = class EncDecController {
    constructor(encDecService, response) {
        this.encDecService = encDecService;
        this.response = response;
        this.config = (0, jsonReader_1.readConfigurationJsonFile)();
    }
    async getEncDecConfiguration() {
        return this.response.getResponse200({ data: this.config, msg: null });
    }
    async updateEncDecConfiguration(updateEncDecConfiugration) {
        if (updateEncDecConfiugration.Key.length > 32 && updateEncDecConfiugration.IV.length > 16) {
            this.config.enc_dec.key = updateEncDecConfiugration.Key,
                this.config.enc_dec.iv = updateEncDecConfiugration.IV,
                await fs_1.promises.writeFile(path.join(__dirname, filePathEnum_1.FilePath.Configuration), JSON.stringify(this.config, null, 2), 'utf-8');
            this.encDecService.refreshEncDecConfiguration();
            return this.response.getResponse200({ msg: tagEnum_1.EncDecStatusTag.ENC_DEC_CONFIGURATION_UPDATED_SUCCESS, data: updateEncDecConfiugration });
        }
        return this.response.getResponse422({
            msg: updateEncDecConfiugration.Key.length < 32 ? tagEnum_1.EncDecStatusTag.KEY_LENGTH : tagEnum_1.EncDecStatusTag.IV_LENGTH
        });
    }
    async generateRandomKey() {
        return this.response.getResponse200({ msg: tagEnum_1.EncDecStatusTag.KEY_GENERATION_SUCCESS, data: await this.encDecService.generateRandomKey() });
    }
    async generateRandomIV() {
        return this.response.getResponse200({ msg: tagEnum_1.EncDecStatusTag.IV_GENERATION_SUCCESS, data: await this.encDecService.generateRandomIV() });
    }
};
exports.EncDecController = EncDecController;
__decorate([
    (0, common_1.Get)(routeListEnum_1.routeListEnum.GetEncDecConfiguration),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "getEncDecConfiguration", null);
__decorate([
    (0, common_1.Put)(routeListEnum_1.routeListEnum.UpdateEncDecConfiguration),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enc_dec_dto_1.EncDecConfiguration]),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "updateEncDecConfiguration", null);
__decorate([
    (0, common_1.Post)(routeListEnum_1.routeListEnum.GenerateKey),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "generateRandomKey", null);
__decorate([
    (0, common_1.Post)(routeListEnum_1.routeListEnum.GenerateIV),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EncDecController.prototype, "generateRandomIV", null);
exports.EncDecController = EncDecController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [enc_dec_service_1.EncDecService,
        response_service_1.ResponseService])
], EncDecController);
//# sourceMappingURL=enc_dec.controller.js.map