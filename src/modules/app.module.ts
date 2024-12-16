import { Module } from '@nestjs/common';
import { EncDecModule } from './enc_dec.module';
import { ResponseService } from 'src/services/response.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    EncDecModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist', 'node_modules', 'swagger-ui-dist'),
      serveRoot: '/', 
    }),
  ],
  controllers: [],
  providers: [ResponseService],
})

export class AppModule {}
