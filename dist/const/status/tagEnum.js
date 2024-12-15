"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonStatusTag = exports.EncDecStatusTag = void 0;
var EncDecStatusTag;
(function (EncDecStatusTag) {
    EncDecStatusTag["ENCRYPT_SUCCESS"] = "ENCRYPT_SUCCESS";
    EncDecStatusTag["ENCRYPT_FAILED"] = "ENCRYPT_FAILED";
    EncDecStatusTag["DECRYPT_SUCCESS"] = "DECRYPT_SUCCESS";
    EncDecStatusTag["DECRYPT_FAILED"] = "DECRYPT_FAILED";
    EncDecStatusTag["ENC_DEC_CONFIGURATION_UPDATED_SUCCESS"] = "ENC_DEC_CONFIGURATION_UPDATED_SUCCESS";
    EncDecStatusTag["ENC_DEC_CONFIGURATION_UPDTAED_FAILED"] = " ENC_DEC_CONFIGURATION_UPDTAED_FAILED";
    EncDecStatusTag["KEY_GENERATION_SUCCESS"] = "KEY_GENERATION_SUCCESS";
    EncDecStatusTag["IV_GENERATION_SUCCESS"] = "IV_GENERTION_SUCCESS";
    EncDecStatusTag["KEY_LENGTH"] = "Key Length at least 32 character";
    EncDecStatusTag["IV_LENGTH"] = "Iv length at least 16 character";
})(EncDecStatusTag || (exports.EncDecStatusTag = EncDecStatusTag = {}));
var CommonStatusTag;
(function (CommonStatusTag) {
    CommonStatusTag["SUCCESS"] = "SUCCESS";
    CommonStatusTag["FAILED"] = "FAILED";
    CommonStatusTag["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    CommonStatusTag["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(CommonStatusTag || (exports.CommonStatusTag = CommonStatusTag = {}));
//# sourceMappingURL=tagEnum.js.map