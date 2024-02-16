import { Test, TestingModule } from '@nestjs/testing';
import { AllomasService } from './allomas.service';

describe('AllomasService', () => {
  let service: AllomasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllomasService],
    }).compile();

    service = module.get<AllomasService>(AllomasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
