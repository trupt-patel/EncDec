import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { routeListEnum } from "src/const/routeListEnum";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO } from "src/models/configuration";
import { EncDecService } from "src/services/enc_dec.service";
import { ResponseService } from "src/services/response.service";
import { promises as fs } from 'fs';
import * as path from "path";
import { FilePath } from "src/const/filePathEnum";
import { EncDecStatusTag } from "src/const/status/tagEnum";
import { EncDecConfiguration } from "src/models/enc_dec.dto";

@Controller()
export class EncDecController {

    private readonly config: ConfigurationJSONFileDTO
    constructor(
        private readonly encDecService: EncDecService,
        private readonly response: ResponseService,
    ) {
        this.config = readConfigurationJsonFile()
    }

    @Get(routeListEnum.GetEncDecConfiguration)
    async getEncDecConfiguration () {
        return this.response.getResponse200({data: this.config, msg: null })
    }

    @Put(routeListEnum.UpdateEncDecConfiguration)
    async updateEncDecConfiguration (@Body() updateEncDecConfiugration: EncDecConfiguration) {
        if(updateEncDecConfiugration.Key.length > 32 && updateEncDecConfiugration.IV.length > 16)
        {
            this.config.enc_dec.key = updateEncDecConfiugration.Key,
            this.config.enc_dec.iv = updateEncDecConfiugration.IV,
            await fs.writeFile(
                path.join(__dirname, FilePath.Configuration),
                JSON.stringify(this.config, null, 2),
                'utf-8'
            );
            this.encDecService.refreshEncDecConfiguration();
            return this.response.getResponse200({ msg: EncDecStatusTag.ENC_DEC_CONFIGURATION_UPDATED_SUCCESS, data: updateEncDecConfiugration})
        }
        return this.response.getResponse422({ 
            msg: updateEncDecConfiugration.Key.length < 32 ? EncDecStatusTag.KEY_LENGTH : EncDecStatusTag.IV_LENGTH })
        
    }

    @Post(routeListEnum.GenerateKey)
    async generateRandomKey() {
        return this.response.getResponse200({ msg: EncDecStatusTag.KEY_GENERATION_SUCCESS, data: await this.encDecService.generateRandomKey()})
    }

    @Post(routeListEnum.GenerateIV)
    async generateRandomIV() {
        return this.response.getResponse200({ msg: EncDecStatusTag.IV_GENERATION_SUCCESS, data: await this.encDecService.generateRandomIV()})
    }
}