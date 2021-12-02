import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { Instrument } from './entities/instrument.entity';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(Instrument)
    private readonly instrumentRepo: Repository<Instrument>,
    @InjectConnection()
    private readonly connection: Connection
  ) {}
  create(createInstrumentDto: CreateInstrumentDto) {
    return 'This action adds a new instrument';
  }

  findAll() {
    return `This action returns all instruments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrument`;
  }

  update(id: number, updateInstrumentDto: UpdateInstrumentDto) {
    return `This action updates a #${id} instrument`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrument`;
  }

  findMembers(id: number) {
    return this.connection.getRepository(Instrument)
      .createQueryBuilder('i')
      .leftJoinAndSelect('i.members', 'm')
      .orderBy('i.id', 'ASC')
      .getMany();
  }
}
