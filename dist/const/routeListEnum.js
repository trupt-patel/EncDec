"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeListEnum = void 0;
var routeListEnum;
(function (routeListEnum) {
    routeListEnum["API_START_NOTATION"] = "api";
    routeListEnum["GetEncDecConfiguration"] = "/env_dec/configuration";
    routeListEnum["UpdateEncDecConfiguration"] = "/enc_dec/configuration";
    routeListEnum["GenerateKey"] = "/enc_dec/generate/key";
    routeListEnum["GenerateIV"] = "/enc_dec/generate/iv";
    routeListEnum["EncryptedText"] = "/env_dec/encrypt";
    routeListEnum["DescryptedText"] = "/env_dec/decrypt";
})(routeListEnum || (exports.routeListEnum = routeListEnum = {}));
//# sourceMappingURL=routeListEnum.js.map