import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { Cargo } from "../../auth/Model/cargos";

export class TarefasDTO {

  @IsBoolean()
  @IsNotEmpty({ message: 'O campo (completed) é obrigatório' })
  completed: boolean;

}
