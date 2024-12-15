export enum EncDecStatusTag {
    ENCRYPT_SUCCESS = "ENCRYPT_SUCCESS",
    ENCRYPT_FAILED = "ENCRYPT_FAILED",
    DECRYPT_SUCCESS = "DECRYPT_SUCCESS",
    DECRYPT_FAILED= "DECRYPT_FAILED",
    ENC_DEC_CONFIGURATION_UPDATED_SUCCESS = "ENC_DEC_CONFIGURATION_UPDATED_SUCCESS",
    ENC_DEC_CONFIGURATION_UPDTAED_FAILED = " ENC_DEC_CONFIGURATION_UPDTAED_FAILED", 
    KEY_GENERATION_SUCCESS = "KEY_GENERATION_SUCCESS",
    IV_GENERATION_SUCCESS = "IV_GENERTION_SUCCESS",
    KEY_LENGTH = "Key Length at least 32 character",
    IV_LENGTH = "Iv length at least 16 character"
}

export enum CommonStatusTag {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}