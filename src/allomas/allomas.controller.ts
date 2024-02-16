import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllomasService } from './allomas.service';
import { CreateAllomaDto } from './dto/create-alloma.dto';
import { UpdateAllomaDto } from './dto/update-alloma.dto';

@Controller('allomas')
export class AllomasController {
  constructor(private readonly allomasService: AllomasService) {}

  @Post()
  create(@Body() createAllomaDto: CreateAllomaDto) {
    return this.allomasService.create(createAllomaDto);
  }

  @Get()
  findAll() {
    return this.allomasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allomasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllomaDto: UpdateAllomaDto) {
    return this.allomasService.update(+id, updateAllomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allomasService.remove(+id);
  }
}
