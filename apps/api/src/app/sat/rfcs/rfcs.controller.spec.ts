import { Test, TestingModule } from '@nestjs/testing';
import { RfcsController } from './rfcs.controller';
import { RfcsService } from './rfcs.service';

describe('RfcsController', () => {
  let controller: RfcsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RfcsController],
      providers: [RfcsService],
    }).compile();

    controller = module.get<RfcsController>(RfcsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
