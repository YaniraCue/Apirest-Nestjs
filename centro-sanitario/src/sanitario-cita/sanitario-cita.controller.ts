import {Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe,} from '@nestjs/common';
import { SanitarioCitaService } from './sanitario-cita.service';
import { CreateSanitarioCitaDto } from './dto/create-sanitario-cita.dto';
import { UpdateSanitarioCitaDto } from './dto/update-sanitario-cita.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Tabla Sanitario-cita')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('sanitario-cita')
export class SanitarioCitaController {
  constructor(private readonly sanitarioCitaService: SanitarioCitaService) {}

  // GET ALL
  @Get()
  findAll() {
    return this.sanitarioCitaService.findAll();
  }

  // GET ONE
  @Get(':sanitarioId/:citaId')
  findOne(
    @Param('sanitarioId', ParseIntPipe) sanitarioId: number,
    @Param('citaId', ParseIntPipe) citaId: number,
  ) {
    return this.sanitarioCitaService.findOne(sanitarioId, citaId);
  }

  // POST
  @Post()
  create(@Body() data: CreateSanitarioCitaDto) {
    return this.sanitarioCitaService.create(data);
  }

  // PUT
    @Put(':sanitarioId/:citaId')
    update(
    @Param('sanitarioId', ParseIntPipe) sanitarioId: number,
    @Param('citaId', ParseIntPipe) citaId: number,
    @Body() data: UpdateSanitarioCitaDto,
    ) {
    return this.sanitarioCitaService.update(sanitarioId, citaId, data);
    }

  // DELETE
  @Delete(':sanitarioId/:citaId')
  remove(
    @Param('sanitarioId', ParseIntPipe) sanitarioId: number,
    @Param('citaId', ParseIntPipe) citaId: number,
  ) {
    return this.sanitarioCitaService.remove(sanitarioId, citaId);
  }
}
