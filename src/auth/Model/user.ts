import { Cargo } from "./cargos";

export interface User {

   id: number;
   name: string;
   email: string;
   senha: string;
   cargo: Cargo;
   
}