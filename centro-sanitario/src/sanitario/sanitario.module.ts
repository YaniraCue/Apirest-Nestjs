import { Module } from '@nestjs/common';
import { SanitarioController } from './sanitario.controller';
import { SanitarioService } from './sanitario.service';
import { PrismaModule } from '../prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  providers: [SanitarioService],
  controllers: [SanitarioController],
})
export class SanitarioModule {}
