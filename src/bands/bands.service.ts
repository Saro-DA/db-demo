import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBandDto } from './dto/create-band.dto';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { Band } from './entities/band.entity';
import { Instrument } from './entities/instrument.entity';
import { Member } from './entities/member.entity';

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Band)
    private readonly bandRepo: Repository<Band>,
    @InjectRepository(Member)
    private readonly memberRepo: Repository<Member>,
    @InjectRepository(Instrument)
    private readonly instrumentRepo: Repository<Instrument>
  ) {}

  create(createBandDto: CreateBandDto) {
    const band = this.bandRepo.create(createBandDto);
    return this.bandRepo.save(band);
  }

  findAll() {
    return this.bandRepo.find({});
  }

  findOne(id: number) {
    return this.bandRepo.findOne({ id });
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    return `This action updates a #${id} band`;
  }

  remove(id: number) {
    return `This action removes a #${id} band`;
  }

  async createBandMember(createMemberDto: CreateMemberDto) {
    const band = await this.bandRepo.findOne({ id: createMemberDto.bandId });

    if (!band) {
      throw new NotFoundException(`Band with id ${createMemberDto.bandId} was not found.`);
    }

    const instrument = await this.instrumentRepo.findOne({
      id: createMemberDto.instrumentId
    })

    if (!instrument) {
      throw new NotFoundException(`Instrument with id ${createMemberDto.instrumentId} was not found.`);
    }

    const member = this.memberRepo.create(createMemberDto);

    member.band = band;

    member.instruments = [];
    member.instruments.push(instrument);

    return this.memberRepo.save(member);
  }
}
