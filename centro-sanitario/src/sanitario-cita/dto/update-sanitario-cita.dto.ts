import { PartialType } from '@nestjs/mapped-types';
import { CreateSanitarioCitaDto } from './create-sanitario-cita.dto';

export class UpdateSanitarioCitaDto extends PartialType(CreateSanitarioCitaDto) {}
