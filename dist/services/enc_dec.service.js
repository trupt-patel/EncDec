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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncDecService = void 0;
const common_1 = require("@nestjs/common");
const jsonReader_1 = require("../helper/jsonReader");
const crypto_1 = require("crypto");
let EncDecService = class EncDecService {
    constructor() {
        this.refreshEncDecConfiguration();
    }
    async refreshEncDecConfiguration() {
        this.config = (0, jsonReader_1.readConfigurationJsonFile)();
        try {
            const data = (0, jsonReader_1.readConfigurationJsonFile)();
            this.encDecInfo = data.enc_dec;
        }
        catch (error) {
            this.encDecInfo = null;
        }
    }
    async generateRandomKey() {
        return (0, crypto_1.randomBytes)(32).toString('hex');
    }
    async generateRandomIV() {
        return (0, crypto_1.randomBytes)(16).toString('hex');
    }
};
exports.EncDecService = EncDecService;
exports.EncDecService = EncDecService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EncDecService);
//# sourceMappingURL=enc_dec.service.js.map