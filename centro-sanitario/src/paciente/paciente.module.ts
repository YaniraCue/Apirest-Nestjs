import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService],
  imports: [PrismaModule],
})
export class PacienteModule {}
