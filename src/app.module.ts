import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AllomasModule } from './allomas/allomas.module';

@Module({
  imports: [AllomasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
