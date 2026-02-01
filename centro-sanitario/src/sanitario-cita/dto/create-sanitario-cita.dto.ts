import { IsInt } from 'class-validator';

export class CreateSanitarioCitaDto {
  @IsInt()
  sanitarioId: number;

  @IsInt()
  citaId: number;
}
