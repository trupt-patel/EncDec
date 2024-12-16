import { ApiProperty } from "@nestjs/swagger";

export class EncryptText {
    @ApiProperty()
    plainText: string;

    constructor( {plainText} : {plainText: string}) {
        this.plainText = plainText;
    }
}

export class DecryptText {
    @ApiProperty()
    encryptedData: string;

    constructor( {encryptedData} : {encryptedData: string}) {
        this.encryptedData = encryptedData;
    }
}