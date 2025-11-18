import { Tarefas } from "./tarefas";



export type TarefasBD = Tarefas;

export const devTasks: TarefasBD[] = [
  {
    id: 1,
    title: 'Criar módulo de autenticação',
    description: 'Implementar JWT e proteção das rotas.',
    completed: false,
  },
  {
    id: 2,
    title: 'Configurar CI/CD',
    description: 'Criar pipeline automatizada no GitHub Actions.',
    completed: true,
  },
  {
    id: 3,
    title: 'Refatorar serviço de usuários',
    description: 'Melhorar a performance e organização do código.',
    completed: false,
  },
  {
    id: 4,
    title: 'Criar testes unitários',
    description: 'Cobrir serviços principais com Jest.',
    completed: true,
  },
  {
    id: 5,
    title: 'Integrar sistema de logs',
    description: 'Adicionar Winston e padronizar logs.',
    completed: false,
  },
  {
    id: 6,
    title: 'Correção de bugs críticos',
    description: 'Resolver falhas reportadas na última sprint.',
    completed: false,
  },
];

export const designTasks: TarefasBD[] = [
  {
    id: 1,
    title: 'Criar paleta de cores',
    description: 'Definir identidade visual primária e secundária.',
    completed: true,
  },
  {
    id: 2,
    title: 'Criar protótipo de alta fidelidade',
    description: 'Construir telas principais no Figma.',
    completed: false,
  },
  {
    id: 3,
    title: 'Atualizar design system',
    description: 'Padronizar componentes reutilizáveis.',
    completed: false,
  },
  {
    id: 4,
    title: 'Criar ícones personalizados',
    description: 'Desenvolver ícones para o dashboard.',
    completed: true,
  },
  {
    id: 5,
    title: 'Revisar UX do fluxo de cadastro',
    description: 'Melhorar experiência do usuário no onboarding.',
    completed: false,
  },
  {
    id: 6,
    title: 'Criar materiais de apresentação',
    description: 'Elaborar slides para apresentação interna.',
    completed: false,
  },
];

export const managerTasks: TarefasBD[] = [
  {
    id: 1,
    title: 'Organizar planejamento mensal',
    description: 'Estruturar metas e objetivos com a equipe.',
    completed: false,
  },
  {
    id: 2,
    title: 'Realizar reunião 1:1',
    description: 'Conversar com integrantes sobre performance.',
    completed: true,
  },
  {
    id: 3,
    title: 'Preparar relatório executivo',
    description: 'Apresentar resultados para diretoria.',
    completed: false,
  },
  {
    id: 4,
    title: 'Controlar orçamento do projeto',
    description: 'Revisar custos operacionais e alocação.',
    completed: true,
  },
  {
    id: 5,
    title: 'Revisar indicadores da sprint',
    description: 'Avaliar KPIs e progresso das entregas.',
    completed: false,
  },
  {
    id: 6,
    title: 'Ajustar cronograma do time',
    description: 'Reorganizar prazos conforme prioridades.',
    completed: false,
  },
];

export const poTasks: TarefasBD[] = [
  {
    id: 1,
    title: 'Refinar backlog',
    description: 'Revisar, priorizar e detalhar user stories.',
    completed: false,
  },
  {
    id: 2,
    title: 'Criar critérios de aceitação',
    description: 'Documentar regras para novas funcionalidades.',
    completed: true,
  },
  {
    id: 3,
    title: 'Realizar meeting com stakeholders',
    description: 'Alinhar entregas e expectativas.',
    completed: false,
  },
  {
    id: 4,
    title: 'Avaliar feedback dos usuários',
    description: 'Utilizar dados para priorizar melhorias.',
    completed: true,
  },
  {
    id: 5,
    title: 'Planejar próxima sprint',
    description: 'Selecionar itens e definir objetivos.',
    completed: false,
  },
  {
    id: 6,
    title: 'Acompanhar métricas do produto',
    description: 'Monitorar engajamento e performance.',
    completed: false,
  },
];

export const marketingTasks: TarefasBD[] = [
  {
    id: 1,
    title: 'Criar campanha de lançamento',
    description: 'Planejar anúncios e materiais promocionais.',
    completed: false,
  },
  {
    id: 2,
    title: 'Ajustar branding nas redes sociais',
    description: 'Atualizar perfis e identidade visual.',
    completed: true,
  },
  {
    id: 3,
    title: 'Produzir conteúdo semanal',
    description: 'Escrever posts para blog e redes.',
    completed: false,
  },
  {
    id: 4,
    title: 'Analisar métricas de campanha',
    description: 'Avaliar alcance e engajamento.',
    completed: true,
  },
  {
    id: 5,
    title: 'Criar materiais para e-mail marketing',
    description: 'Desenvolver templates e textos.',
    completed: false,
  },
  {
    id: 6,
    title: 'Planejar estratégia de SEO',
    description: 'Definir palavras-chave e otimizar conteúdos.',
    completed: false,
  },
];