import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, IsEnum } from "class-validator";

import { Cargo } from "../Model/cargos"; 

export class RegisterDTO {

  @IsString()  
  @IsNotEmpty({message: 'preencha o campo (nome)'})
  name: string;

  @IsString()
  @IsNotEmpty({message: 'preencha o campo (email)'})
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({message: 'preencha o campo (senha)'})
  @MaxLength(10, {message: 'deve conter no maximo 10 caracteres'})
  @MinLength(5, {message: 'deve conter no minimo 5 caracteres'})
  senha: string;

  @IsEnum(Cargo, {message: 'cargo invalido' })
  @IsNotEmpty({message: 'selecione o seu cargo'})
  cargo: Cargo;

}