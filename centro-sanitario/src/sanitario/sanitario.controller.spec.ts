import { Test, TestingModule } from '@nestjs/testing';
import { SanitarioController } from './sanitario.controller';

describe('SanitarioController', () => {
  let controller: SanitarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SanitarioController],
    }).compile();

    controller = module.get<SanitarioController>(SanitarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
