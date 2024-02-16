import { Module } from '@nestjs/common';
import { AllomasService } from './allomas.service';
import { AllomasController } from './allomas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AllomasController],
  providers: [AllomasService, PrismaService],
})
export class AllomasModule {}
