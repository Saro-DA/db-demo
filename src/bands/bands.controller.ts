import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { BandsService } from './bands.service';
import { CreateBandDto } from './dto/create-band.dto';
import { TransferFundsDto } from './dto/transfer-funds.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Controller('bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Post()
  create(@Body() createBandDto: CreateBandDto) {
    return this.bandsService.create(createBandDto);
  }

  @Get()
  findAll() {
    return this.bandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bandsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBandDto: UpdateBandDto) {
    return this.bandsService.update(+id, updateBandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bandsService.remove(+id);
  }

  @Post("transferfunds")
  @HttpCode(200)
  transferFunds(@Body() transferFundsDto: TransferFundsDto) {
    return this.bandsService.transferFunds(transferFundsDto);
  }
}
