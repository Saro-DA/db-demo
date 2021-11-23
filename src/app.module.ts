import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandsModule } from './bands/bands.module';

@Module({
  imports: [BandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
