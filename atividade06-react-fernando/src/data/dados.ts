import { IServico, IConsulta } from '../types'

export const servicosIniciais: IServico[] = [
  {
    id: 1,
    nome: 'A Destemida',
    descricao: 'Consulta completa: âmbito amoroso, profissional e espiritual. Presente, obstáculos e aconselhamentos futuros.',
    preco: 250,
    duracao: '60 min',
    icone: '🔮',
    status: 'disponivel',
  },
  {
    id: 2,
    nome: 'Quem Soltou os Cães?',
    descricao: 'Entramos no inconsciente do seu parceiro. Pensamentos, sentimentos e intenções com relação a você.',
    preco: 190,
    duracao: '45 min',
    icone: '🐺',
    status: 'disponivel',
  },
  {
    id: 3,
    nome: 'Abutres do Velho Mundo',
    descricao: 'Análise de energia nociva que trava seus caminhos e identificação da área que necessita limpeza energética.',
    preco: 120,
    duracao: '30 min',
    icone: '🌑',
    status: 'disponivel',
  },
  {
    id: 4,
    nome: 'A Cura ou o Veneno?',
    descricao: 'Para situações sem saída — ficar ou partir. Válido para trabalho, ciclo social, religião, mudanças de casa.',
    preco: 90,
    duracao: '30 min',
    icone: '🥀',
    status: 'disponivel',
  },
]

export const consultasIniciais: IConsulta[] = [
  {
    id: 1,
    cliente: 'Ana Souza',
    servico: 'A Destemida',
    data: '24/04/2025',
    horario: '14:00',
    valor: 250,
    status: 'pendente',
  },
  {
    id: 2,
    cliente: 'Marcos Lima',
    servico: 'Quem Soltou os Cães?',
    data: '24/04/2025',
    horario: '15:30',
    valor: 190,
    status: 'pendente',
  },
  {
    id: 3,
    cliente: 'Fernanda Costa',
    servico: 'A Cura ou o Veneno?',
    data: '23/04/2025',
    horario: '10:00',
    valor: 90,
    status: 'concluida',
  },
  {
    id: 4,
    cliente: 'João Pedro',
    servico: 'Abutres do Velho Mundo',
    data: '23/04/2025',
    horario: '16:00',
    valor: 120,
    status: 'concluida',
  },
  {
    id: 5,
    cliente: 'Larissa Mendes',
    servico: 'A Destemida',
    data: '22/04/2025',
    horario: '11:00',
    valor: 250,
    status: 'cancelada',
  },
]

export const META_MENSAL = 2000
