import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSanitarioCitaDto } from './dto/create-sanitario-cita.dto';
import { UpdateSanitarioCitaDto } from './dto/update-sanitario-cita.dto';

@Injectable()
export class SanitarioCitaService {
  constructor(private prisma: PrismaService) {}

  // GET ALL
  findAll() {
    return this.prisma.sanitarioCita.findMany();
  }

  // GET ONE
  findOne(sanitarioId: number, citaId: number) {
    return this.prisma.sanitarioCita.findUnique({
      where: {
        sanitarioId_citaId: {
          sanitarioId,
          citaId,
        },
      },
    });
  }

  // POST - crear relación
  create(data: CreateSanitarioCitaDto) {
    return this.prisma.sanitarioCita.create({
      data,
    });
  }

  // PUT - actualizar relación
 update(
  sanitarioId: number,
  citaId: number,
  data: UpdateSanitarioCitaDto,
) {
  return this.prisma.sanitarioCita.update({
    where: {
      sanitarioId_citaId: {
        sanitarioId,
        citaId,
      },
    },
    data,
  });
}

  // DELETE
  remove(sanitarioId: number, citaId: number) {
    return this.prisma.sanitarioCita.delete({
      where: {
        sanitarioId_citaId: {
          sanitarioId,
          citaId,
        },
      },
    });
  }
}
