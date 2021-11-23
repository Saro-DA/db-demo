import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandsModule } from './bands/bands.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
