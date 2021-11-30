import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandsModule } from './bands/bands.module';
import { MembersModule } from './members/members.module';
import { InstrumentsModule } from './instruments/instruments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BandsModule,
    MembersModule,
    InstrumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
