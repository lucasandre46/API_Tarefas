import { Cargo } from "../../auth/Model/cargos";
import { Tarefas } from "./tarefas";

export type TarefasBD = Tarefas;

export const tarefasBD: TarefasBD[] = [
  // DEV
  {
    id: 1,
    title: 'Criar módulo de autenticação',
    description: 'Implementar JWT e proteção das rotas.',
    completed: false,
    cargo: Cargo.DEV,
  },
  {
    id: 2,
    title: 'Configurar CI/CD',
    description: 'Criar pipeline automatizada no GitHub Actions.',
    completed: true,
    cargo: Cargo.DEV,
  },
  {
    id: 3,
    title: 'Refatorar serviço de usuários',
    description: 'Melhorar performance e organização do código.',
    completed: false,
    cargo: Cargo.DEV,
  },
  {
    id: 4,
    title: 'Criar testes unitários',
    description: 'Cobrir serviços principais com Jest.',
    completed: true,
    cargo: Cargo.DEV,
  },
  {
    id: 5,
    title: 'Integrar sistema de logs',
    description: 'Adicionar Winston e padronizar logs.',
    completed: false,
    cargo: Cargo.DEV,
  },
  {
    id: 6,
    title: 'Correção de bugs críticos',
    description: 'Resolver falhas da última sprint.',
    completed: false,
    cargo: Cargo.DEV,
  },

  // DESIGN
  {
    id: 7,
    title: 'Criar paleta de cores',
    description: 'Definir identidade visual primária e secundária.',
    completed: true,
    cargo: Cargo.DESIGN,
  },
  {
    id: 8,
    title: 'Criar protótipo de alta fidelidade',
    description: 'Construir telas no Figma.',
    completed: false,
    cargo: Cargo.DESIGN,
  },
  {
    id: 9,
    title: 'Atualizar design system',
    description: 'Padronizar componentes reutilizáveis.',
    completed: false,
    cargo: Cargo.DESIGN,
  },
  {
    id: 10,
    title: 'Criar ícones personalizados',
    description: 'Desenvolver ícones para o dashboard.',
    completed: true,
    cargo: Cargo.DESIGN,
  },
  {
    id: 11,
    title: 'Revisar UX do fluxo de cadastro',
    description: 'Melhorar onboarding.',
    completed: false,
    cargo: Cargo.DESIGN,
  },
  {
    id: 12,
    title: 'Criar materiais de apresentação',
    description: 'Elaborar slides internos.',
    completed: false,
    cargo: Cargo.DESIGN,
  },

  // GERENTE
  {
    id: 13,
    title: 'Organizar planejamento mensal',
    description: 'Estruturar metas com a equipe.',
    completed: false,
    cargo: Cargo.GERENTE,
  },
  {
    id: 14,
    title: 'Reunião 1:1 com integrantes',
    description: 'Avaliar performance individual.',
    completed: true,
    cargo: Cargo.GERENTE,
  },
  {
    id: 15,
    title: 'Preparar relatório executivo',
    description: 'Apresentar resultados para diretoria.',
    completed: false,
    cargo: Cargo.GERENTE,
  },
  {
    id: 16,
    title: 'Controlar orçamento do projeto',
    description: 'Revisar custos e alocação.',
    completed: true,
    cargo: Cargo.GERENTE,
  },
  {
    id: 17,
    title: 'Revisar KPIs da sprint',
    description: 'Avaliar progresso das entregas.',
    completed: false,
    cargo: Cargo.GERENTE,
  },
  {
    id: 18,
    title: 'Ajustar cronograma',
    description: 'Reorganizar prazos.',
    completed: false,
    cargo: Cargo.GERENTE,
  },

  // PO
  {
    id: 19,
    title: 'Refinar backlog',
    description: 'Revisar e priorizar user stories.',
    completed: false,
    cargo: Cargo.PO,
  },
  {
    id: 20,
    title: 'Criar critérios de aceitação',
    description: 'Definir regras das features.',
    completed: true,
    cargo: Cargo.PO,
  },
  {
    id: 21,
    title: 'Reunião com stakeholders',
    description: 'Alinhar expectativas.',
    completed: false,
    cargo: Cargo.PO,
  },
  {
    id: 22,
    title: 'Avaliar feedback dos usuários',
    description: 'Definir melhorias.',
    completed: true,
    cargo: Cargo.PO,
  },
  {
    id: 23,
    title: 'Planejar sprint',
    description: 'Organizar objetivos.',
    completed: false,
    cargo: Cargo.PO,
  },
  {
    id: 24,
    title: 'Acompanhar métricas do produto',
    description: 'Monitorar engajamento.',
    completed: false,
    cargo: Cargo.PO,
  },

  // MARKETING
  {
    id: 25,
    title: 'Criar campanha de lançamento',
    description: 'Planejar anúncios.',
    completed: false,
    cargo: Cargo.MARKETING,
  },
  {
    id: 26,
    title: 'Ajustar branding',
    description: 'Atualizar identidade nas redes.',
    completed: true,
    cargo: Cargo.MARKETING,
  },
  {
    id: 27,
    title: 'Produzir conteúdo semanal',
    description: 'Criar posts.',
    completed: false,
    cargo: Cargo.MARKETING,
  },
  {
    id: 28,
    title: 'Analisar métricas de campanha',
    description: 'Avaliar alcance.',
    completed: true,
    cargo: Cargo.MARKETING,
  },
  {
    id: 29,
    title: 'Criar material de e-mail marketing',
    description: 'Criar templates.',
    completed: false,
    cargo: Cargo.MARKETING,
  },
  {
    id: 30,
    title: 'Planejar estratégia de SEO',
    description: 'Definir keywords.',
    completed: false,
    cargo: Cargo.MARKETING,
  },
];
