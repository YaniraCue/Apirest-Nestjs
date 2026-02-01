import { Module } from '@nestjs/common';
import { SanitarioCitaController } from './sanitario-cita.controller';
import { SanitarioCitaService } from './sanitario-cita.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SanitarioCitaController],
  providers: [SanitarioCitaService],
  imports: [PrismaModule],
})
export class SanitarioCitaModule {}
