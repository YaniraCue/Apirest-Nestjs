import {Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe,} from '@nestjs/common';
import { SanitarioService } from './sanitario.service';
import { CreateSanitarioDto } from './dto/create-sanitario.dto';
import { UpdateSanitarioDto } from './dto/update-sanitario.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Sanitarios')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('sanitario')
export class SanitarioController {
  constructor(private readonly sanitarioService: SanitarioService) {}
  
  @Get()
  findAll() {
    return this.sanitarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sanitarioService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateSanitarioDto) {
    return this.sanitarioService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateSanitarioDto,
  ) {
    return this.sanitarioService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sanitarioService.remove(id);
  }
}
