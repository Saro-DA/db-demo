import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Band } from 'src/bands/entities/band.entity';
import { Instrument } from 'src/instruments/entities/instrument.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Member, Instrument])],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
