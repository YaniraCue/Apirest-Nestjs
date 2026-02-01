import { PartialType } from '@nestjs/mapped-types';
import { CreateSanitarioDto } from './create-sanitario.dto';

export class UpdateSanitarioDto extends PartialType(CreateSanitarioDto) {}
