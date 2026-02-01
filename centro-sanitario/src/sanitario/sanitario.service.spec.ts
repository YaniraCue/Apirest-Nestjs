import { Test, TestingModule } from '@nestjs/testing';
import { SanitarioService } from './sanitario.service';

describe('SanitarioService', () => {
  let service: SanitarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanitarioService],
    }).compile();

    service = module.get<SanitarioService>(SanitarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
