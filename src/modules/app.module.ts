import { Module } from '@nestjs/common';
import { EncDecModule } from './enc_dec.module';
import { ResponseService } from 'src/services/response.service';
@Module({
  imports: [EncDecModule],
  controllers: [],
  providers: [ResponseService],
})
export class AppModule {}
