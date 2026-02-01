import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany({
      include: { citas: true }, // opcional (útil para ver sus citas)
    });
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
      include: { citas: true },
    });
  }

  create(data: CreatePacienteDto) {
    return this.prisma.paciente.create({
      data,
    });
  }

  update(id: number, data: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}
