import { Cargo } from "src/auth/Model/cargos";

export interface Tarefas {

    id: number;
    title: string;
    description: string;
    completed: boolean;
    cargo: Cargo;
}