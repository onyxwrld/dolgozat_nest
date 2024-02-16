import { Injectable } from '@nestjs/common';
import { CreateAllomaDto } from './dto/create-alloma.dto';
import { UpdateAllomaDto } from './dto/update-alloma.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AllomasService {
  constructor(private readonly db: PrismaService) {}
  create(createAllomaDto: CreateAllomaDto) {
    return this.db.station.create({
      data: {
        location: createAllomaDto.location,
        ipAddress: createAllomaDto.ipAddress,
        batteryCharge: createAllomaDto.batteryCharge,
        batteryCapacity: 100,
      }
    });
  }

  findAll() {
    return this.db.station.findMany();
  }

  findOne(id: number) {
    return this.db.station.findUniqueOrThrow({
      where: { id }
    })
  }

  update(id: number, updateAllomaDto: UpdateAllomaDto) {
    return this.db.station.update({
      data: updateAllomaDto,
      where: { id }
    })
  }

  remove(id: number) {
    return this.db.station.delete({
      where: { id }
    })
  }
}
