import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSanitarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  especialidad: string;
}
