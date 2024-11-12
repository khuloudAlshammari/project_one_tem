import { Module } from '@nestjs/common';
import { SumService } from './sum.service';
import { SumController } from './sum.controller';

@Module({
  controllers: [SumController],
  providers: [SumService],
})
export class SumModule {}
