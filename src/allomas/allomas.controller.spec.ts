import { Test, TestingModule } from '@nestjs/testing';
import { AllomasController } from './allomas.controller';
import { AllomasService } from './allomas.service';

describe('AllomasController', () => {
  let controller: AllomasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllomasController],
      providers: [AllomasService],
    }).compile();

    controller = module.get<AllomasController>(AllomasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
