import { Test, TestingModule } from '@nestjs/testing';
import { SanitarioCitaController } from './sanitario-cita.controller';

describe('SanitarioCitaController', () => {
  let controller: SanitarioCitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SanitarioCitaController],
    }).compile();

    controller = module.get<SanitarioCitaController>(SanitarioCitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
