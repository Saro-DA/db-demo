import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateBandDto } from './dto/create-band.dto';
import { TransferFundsDto } from './dto/transfer-funds.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { Band } from './entities/band.entity';

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Band)
    private readonly bandRepo: Repository<Band>,
    @InjectConnection()
    private readonly connection: Connection
  ) {}

  create(createBandDto: CreateBandDto) {
    const band = this.bandRepo.create(createBandDto);
    return this.bandRepo.save(band);
  }

  findAll() {
    return this.bandRepo.find({
      order: {
        id: 'ASC'
      }
    });
  }

  findOne(id: number) {
    return this.bandRepo.findOne({ id }, {
      relations: ['members']
    });
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    return `This action updates a #${id} band`;
  }

  remove(id: number) {
    return `This action removes a #${id} band`;
  }

  async transferFunds(transferFundsDto: TransferFundsDto) {
    const runner = this.connection.createQueryRunner();
    await runner.connect();
    await runner.startTransaction();

    try {
      const from = await this.bandRepo.findOne({ id: transferFundsDto.from });
      if (!from) {
        throw new NotFoundException(`Band with id ${transferFundsDto.from} was not found.`);
      }

      const to = await this.bandRepo.findOne({ id: transferFundsDto.to });
      if (!to) {
        throw new NotFoundException(`Band with id ${transferFundsDto.to} was not found.`);
      }

      from.balance -= transferFundsDto.amount;
      to.balance += transferFundsDto.amount;

      await runner.manager.save(from);

      // // something is going on here...
      // throw new Error();

      await runner.manager.save(to);

      await runner.commitTransaction();
    } catch (error) {
      await runner.rollbackTransaction();
      throw error;
    } finally {
      await runner.release();
    }
  }
}
