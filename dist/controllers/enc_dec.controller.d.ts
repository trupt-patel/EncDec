import { EncDecService } from "src/services/enc_dec.service";
import { ResponseService } from "src/services/response.service";
import { EncDecConfiguration } from "src/models/enc_dec.dto";
export declare class EncDecController {
    private readonly encDecService;
    private readonly response;
    private readonly config;
    constructor(encDecService: EncDecService, response: ResponseService);
    getEncDecConfiguration(): Promise<import("../models/response.dto").ResponseDto<Object>>;
    updateEncDecConfiguration(updateEncDecConfiugration: EncDecConfiguration): Promise<import("../models/response.dto").ResponseDto<Object>>;
    generateRandomKey(): Promise<import("../models/response.dto").ResponseDto<Object>>;
    generateRandomIV(): Promise<import("../models/response.dto").ResponseDto<Object>>;
}
