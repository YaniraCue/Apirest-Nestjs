import { IsString, IsNotEmpty, IsDateString, IsInt } from 'class-validator';

export class CreateCitaDto {
  @IsString()
  fechaHora: string;

  @IsString()
  @IsNotEmpty()
  sintomas: string;

  @IsInt()
  pacienteId: number;   // esta seria la clave foránea que relaciona la cita con un paciente
}
