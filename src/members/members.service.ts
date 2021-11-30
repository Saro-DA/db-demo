import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Band } from 'src/bands/entities/band.entity';
import { Instrument } from 'src/instruments/entities/instrument.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Band)
    private readonly bandRepo: Repository<Band>,
    @InjectRepository(Member)
    private readonly memberRepo: Repository<Member>,
    @InjectRepository(Instrument)
    private readonly instrumentRepo: Repository<Instrument>
  ) {}

  async create(createMemberDto: CreateMemberDto) {
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

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
