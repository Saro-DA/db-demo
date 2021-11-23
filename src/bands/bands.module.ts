import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from './entities/band.entity';
import { Member } from './entities/member.entity';
import { Instrument } from './entities/instrument.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Member, Instrument])],
  controllers: [BandsController],
  providers: [BandsService]
})
export class BandsModule {}
