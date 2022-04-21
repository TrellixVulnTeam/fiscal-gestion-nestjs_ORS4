import { Test, TestingModule } from '@nestjs/testing';
import { RfcsService } from './rfcs.service';

describe('RfcsService', () => {
  let service: RfcsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RfcsService],
    }).compile();

    service = module.get<RfcsService>(RfcsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
