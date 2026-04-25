export type StatusConsulta = 'pendente' | 'concluida' | 'cancelada'

export interface IServico {
  id: number
  nome: string
  descricao: string
  preco: number
  duracao: string
  icone: string
  status: 'disponivel' | 'indisponivel'
}

export interface IConsulta {
  id: number
  cliente: string
  servico: string
  data: string
  horario: string
  valor: number
  status: StatusConsulta
}

export interface IDashboardStats {
  totalConsultas: number
  consultasConcluidas: number
  consultasPendentes: number
  receitaTotal: number
}

export interface ICardServicoProps {
  servico: IServico
}

export interface IDashboardProps {
  stats: IDashboardStats
}

export interface IConsultaItemProps {
  consulta: IConsulta
  onConcluir: (id: number) => void
  onCancelar: (id: number) => void
}

export interface IHeaderAdminProps {
  onLogout: () => void
}

export interface IFooterProps {
  nomeAluno: string
  disciplina: string
}

export interface IGraficoPizzaProps {
  concluidas: number
  pendentes: number
  canceladas: number
  receitaTotal: number
  metaMensal: number
}
