import { Module } from '@nestjs/common';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CitaController],
  providers: [CitaService],
  imports: [PrismaModule],
})
export class CitaModule {}
