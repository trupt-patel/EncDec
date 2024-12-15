export class EncDecDto{
    key: string;
    iv: string;
}

export class ConfigurationJSONFileDTO{
    enc_dec: EncDecDto
}