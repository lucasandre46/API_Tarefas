import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Cargo } from "../Model/cargos";


export class LoginDTO {

@IsNotEmpty({message: 'preencha o campo email!'})
@IsString()
email: string;

@IsNotEmpty({message: 'preencha o campo senha'})
@IsString()
senha: string;

@IsEnum(Cargo, {message: 'cargo invalido'})
@IsNotEmpty({ message: 'preencha o campo cargo'})
cargo: Cargo;

}
