import { Controller, Get, Post, Body, Patch, Param, Delete ,Query} from '@nestjs/common';
import { SumService } from './sum.service';
import { CreateSumDto } from './dto/create-sum.dto';
import { UpdateSumDto } from './dto/update-sum.dto';

@Controller('sum')
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Post()
  create(@Body() createSumDto: CreateSumDto) {
    return this.sumService.create(createSumDto);
  }

  @Get()
  findAll() {
    return this.sumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSumDto: UpdateSumDto) {
    return this.sumService.update(+id, updateSumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sumService.remove(+id);
  }
@Post('/findSum')
  findSum(@Body('num1')number1 : Number,@Body('num2') number2 : Number){

    const sum = Number(number1) +  Number(number1);
    return { total : sum }
 }
 @Get ('/findSum')

 findSumB(@Query('num1')number1 : Number,@Query('num2') number2 : Number){

   const sum = Number(number1) *  Number(number1);
   return { total : sum }

 }


}
