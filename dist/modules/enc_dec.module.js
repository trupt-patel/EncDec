"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncDecModule = void 0;
const enc_dec_controller_1 = require("../controllers/enc_dec.controller");
const common_1 = require("@nestjs/common");
const enc_dec_service_1 = require("../services/enc_dec.service");
const response_service_1 = require("../services/response.service");
let EncDecModule = class EncDecModule {
};
exports.EncDecModule = EncDecModule;
exports.EncDecModule = EncDecModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [enc_dec_controller_1.EncDecController],
        providers: [enc_dec_service_1.EncDecService, response_service_1.ResponseService],
    })
], EncDecModule);
//# sourceMappingURL=enc_dec.module.js.map