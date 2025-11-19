import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { Cargo } from "../../auth/Model/cargos";

export class TarefasDTO {

  @IsNumber()
  @IsNotEmpty({ message: 'O campo (id) é obrigatório' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'O campo (title) é obrigatório' })
  @MinLength(3, { message: 'O título deve ter no mínimo 3 caracteres' })
  @MaxLength(50, { message: 'O título deve ter no máximo 50 caracteres' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo (description) é obrigatório' })
  @MinLength(5, { message: 'A descrição deve ter no mínimo 5 caracteres' })
  @MaxLength(200, { message: 'A descrição deve ter no máximo 200 caracteres' })
  description: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'O campo (completed) é obrigatório' })
  completed: boolean;

  @IsEnum(Cargo, { message: 'O cargo informado é inválido' })
  @IsNotEmpty({ message: 'O campo (cargo) é obrigatório' })
  cargo: Cargo;
}
