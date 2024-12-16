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
exports.DecryptText = exports.EncryptText = void 0;
const swagger_1 = require("@nestjs/swagger");
class EncryptText {
    constructor({ plainText }) {
        this.plainText = plainText;
    }
}
exports.EncryptText = EncryptText;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EncryptText.prototype, "plainText", void 0);
class DecryptText {
    constructor({ encryptedData }) {
        this.encryptedData = encryptedData;
    }
}
exports.DecryptText = DecryptText;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DecryptText.prototype, "encryptedData", void 0);
//# sourceMappingURL=enc_dec.dto.js.map