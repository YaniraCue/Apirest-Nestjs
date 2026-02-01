import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitaService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.cita.findMany({
      include: {
        paciente: true,      // muestra datos del paciente
        sanitarios: true,    // muestra asociaciones N:N
      },
    });
  }

  findOne(id: number) {
    return this.prisma.cita.findUnique({
      where: { id },
      include: {
        paciente: true,
        sanitarios: true,
      },
    });
  }

    create(data: CreateCitaDto) {
    return this.prisma.cita.create({
      data: {
        fechaHora: data.fechaHora, 
        sintomas: data.sintomas,
        pacienteId: data.pacienteId,
      },
    });
  }

  update(id: number, data: UpdateCitaDto) {
  return this.prisma.cita.update({
    where: { id },
    data,
  });
}

  remove(id: number) {
    return this.prisma.cita.delete({
      where: { id },
    });
  }
}
