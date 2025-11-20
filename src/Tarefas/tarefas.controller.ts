import { Controller, Get, Param, ParseIntPipe, Put, Body, Req, Query } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasDTO } from './TarefasDTO/tarefasDTO';

@Controller()
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  
  @Get('tasks')
  pegaTarefas(@Query('userId', ParseIntPipe) userId: number) {
    return this.tarefasService.pegaTarefas(userId);

  }

  @Put('tasks/:id')
  tarefaConcluida(
    @Param('id', ParseIntPipe) id: number,
    @Body() bodyData: TarefasDTO) {      
      return this.tarefasService.tarefaConcluida(id, bodyData);
    }

  
}
