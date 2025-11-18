import { Controller, Get } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller()
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  
}
