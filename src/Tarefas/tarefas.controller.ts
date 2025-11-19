import { Controller, Get, Param, ParseIntPipe, Put, Body, Req } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasDTO } from './TarefasDTO/tarefasDTO';

@Controller()
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  
  @Get(':id')
  pegaTarefas(@Param('id', ParseIntPipe) id: number) {

    return this.tarefasService.pegaTarefas(id);

  }

  @Put(':id')
  tarefaConcluida(
    @Param('id', ParseIntPipe) id: number,
    @Body() bodyData: TarefasDTO) {
      
      return this.tarefasService.tarefaConcluida(id, bodyData);
    }

  
}
