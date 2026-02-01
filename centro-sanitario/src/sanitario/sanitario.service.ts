import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSanitarioDto } from './dto/create-sanitario.dto';
import { UpdateSanitarioDto } from './dto/update-sanitario.dto';

@Injectable()
export class SanitarioService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.sanitario.findMany();
  }

  findOne(id: number) {
    return this.prisma.sanitario.findUnique({
      where: { id },
    });
  }

  create(data: CreateSanitarioDto) {
    return this.prisma.sanitario.create({
      data,
    });
  }

  update(id: number, data: UpdateSanitarioDto) {
    return this.prisma.sanitario.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.sanitario.delete({
      where: { id },
    });
  }
}
