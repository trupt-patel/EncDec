import { DecryptText, EncryptText } from "src/models/enc_dec.dto";
import { EncDecService } from "src/services/enc_dec.service";
import { ResponseService } from "src/services/response.service";
export declare class EncDecController {
    private readonly encDecService;
    private readonly responseService;
    constructor(encDecService: EncDecService, responseService: ResponseService);
    encryptText(encryptDto: EncryptText): Promise<import("../models/response.dto").ResponseDto<Object>>;
    decryptText(decryptDto: DecryptText): Promise<import("../models/response.dto").ResponseDto<Object>>;
}
