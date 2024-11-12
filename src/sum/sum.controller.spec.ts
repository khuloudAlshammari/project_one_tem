import { Test, TestingModule } from '@nestjs/testing';
import { SumController } from './sum.controller';
import { SumService } from './sum.service';

describe('SumController', () => {
  let controller: SumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumController],
      providers: [SumService],
    }).compile();

    controller = module.get<SumController>(SumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
