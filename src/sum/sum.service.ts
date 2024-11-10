import { Injectable } from '@nestjs/common';
import { CreateSumDto } from './dto/create-sum.dto';
import { UpdateSumDto } from './dto/update-sum.dto';

@Injectable()
export class SumService {
  create(createSumDto: CreateSumDto) {
    return 'This action adds a new sum';
  }

  findAll() {
    return `This action returns all sum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sum`;
  }

  update(id: number, updateSumDto: UpdateSumDto) {
    return `This action updates a #${id} sum`;
  }

  remove(id: number) {
    return `This action removes a #${id} sum`;
  }
}
