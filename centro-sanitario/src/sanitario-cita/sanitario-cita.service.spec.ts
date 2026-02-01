import { Test, TestingModule } from '@nestjs/testing';
import { SanitarioCitaService } from './sanitario-cita.service';

describe('SanitarioCitaService', () => {
  let service: SanitarioCitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanitarioCitaService],
    }).compile();

    service = module.get<SanitarioCitaService>(SanitarioCitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
