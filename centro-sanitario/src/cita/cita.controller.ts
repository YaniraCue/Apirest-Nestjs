import {Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe,} from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Citas')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Get()
  findAll() {
    return this.citaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.citaService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateCitaDto) {
    return this.citaService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCitaDto,
  ) {
    return this.citaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.citaService.remove(id);
  }
}
