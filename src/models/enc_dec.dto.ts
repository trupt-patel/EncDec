import { ApiProperty } from "@nestjs/swagger";

export class EncDecConfiguration {
    @ApiProperty()
    Key: string;
    @ApiProperty()
    IV: string

    constructor( {Key, IV} : {Key: string, IV: string}) {
        this.Key = Key;
        this.IV = IV;
    }
}