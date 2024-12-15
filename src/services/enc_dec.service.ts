import { Injectable } from "@nestjs/common";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO, EncDecDto } from "src/models/configuration";
import { randomBytes } from 'crypto';

@Injectable()
export class EncDecService {
    
    private encDecInfo: EncDecDto;
    private config: ConfigurationJSONFileDTO;

    constructor() {
        this.refreshEncDecConfiguration();
    }

    async refreshEncDecConfiguration()
    {
        this.config = readConfigurationJsonFile();
        try {
            const data = readConfigurationJsonFile() as ConfigurationJSONFileDTO;
            this.encDecInfo = data.enc_dec;
        } catch (error) {
            this.encDecInfo = null; 
        }
    }

    async generateRandomKey() {
        return randomBytes(32).toString('hex');
    }

    async generateRandomIV() {
        return randomBytes(16).toString('hex');
    }

}