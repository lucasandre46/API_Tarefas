import { Injectable, NotFoundException } from '@nestjs/common';
import { userBD } from 'src/auth/Model/userBD';
import { tarefasBD } from './model/tarefasBD';
import { Cargo } from 'src/auth/Model/cargos';

@Injectable()
export class TarefasService {
  
  pegaTarefas(id: number) {

   const index = userBD.find((c) => c.id === id)

   if(!index){
      throw new NotFoundException('Error: 404');
   }

   return tarefasBD[index.cargo];

   }

   tarefaConcluida(id: number, bodyData: any) {

    const  completed = bodyData;

  const index = tarefasBD.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new NotFoundException('Tarefa não encontrada (ID inválido)');
  }

  tarefasBD[index].completed = completed;

  return {
    message: 'Tarefa atualizada com sucesso',
    tarefa: tarefasBD[index]
   }

}
}
