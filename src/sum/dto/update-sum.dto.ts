import { PartialType } from '@nestjs/mapped-types';
import { CreateSumDto } from './create-sum.dto';

export class UpdateSumDto extends PartialType(CreateSumDto) {}
