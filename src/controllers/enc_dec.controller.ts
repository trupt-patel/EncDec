import { Body, Controller, Put } from "@nestjs/common";
import { routeListEnum } from "src/const/routeListEnum";
import { EncDecStatusTag } from "src/const/status/tagEnum";
import { DecryptText, EncryptText } from "src/models/enc_dec.dto";
import { EncDecService } from "src/services/enc_dec.service";
import { ResponseService } from "src/services/response.service";

@Controller()
export class EncDecController {

    constructor(
        private readonly encDecService: EncDecService,
        private readonly responseService: ResponseService
    ) {}

    @Put(routeListEnum.EncryptedText)
    async encryptText(@Body() encryptDto: EncryptText) {
        let encryptedText: boolean | string = await this.encDecService.encryptText({plainText: encryptDto.plainText})
        return encryptedText ? this.responseService.getResponse200({msg: EncDecStatusTag.ENCRYPT_SUCCESS, data: encryptedText}) : this.responseService.getResponse422({msg: EncDecStatusTag.ENCRYPT_FAILED})
    }

    @Put(routeListEnum.DecryptedText)
    async decryptText(@Body() decryptDto: DecryptText) {
        let decryptedText: boolean | string = await this.encDecService.decryptText({encryptedData: decryptDto.encryptedData})
        return decryptedText ? this.responseService.getResponse200({msg: EncDecStatusTag.DECRYPT_SUCCESS, data: decryptedText}) : this.responseService.getResponse422({msg: EncDecStatusTag.DECRYPT_FAILED})
    }
}