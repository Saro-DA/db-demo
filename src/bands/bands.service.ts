import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { Band } from './entities/band.entity';

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Band)
    private readonly bandRepo: Repository<Band>
  ) {}

  create(createBandDto: CreateBandDto) {
    const band = this.bandRepo.create(createBandDto);
    return this.bandRepo.save(band);
  }

  findAll() {
    return this.bandRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} band`;
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    return `This action updates a #${id} band`;
  }

  remove(id: number) {
    return `This action removes a #${id} band`;
  }
}
