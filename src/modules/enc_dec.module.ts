import { EncDecController } from "src/controllers/enc_dec.controller";
import { Module } from "@nestjs/common";
import { EncDecService } from "src/services/enc_dec.service";
import { ResponseService } from "src/services/response.service";

@Module({
    imports: [],
    controllers: [EncDecController],
    providers: [EncDecService, ResponseService],
}) 
export class EncDecModule {}