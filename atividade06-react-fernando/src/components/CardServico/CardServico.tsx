import React from 'react'
import { ICardServicoProps } from '../../types'

const CardServico: React.FC<ICardServicoProps> = ({ servico }) => {
  return (
    <div className="card-servico">
      <div className="card-servico__icone">{servico.icone}</div>
      <h3 className="card-servico__nome">{servico.nome}</h3>
      <p className="card-servico__descricao">{servico.descricao}</p>
      <div className="card-servico__rodape">
        <span className="card-servico__preco">R$ {servico.preco}</span>
        <span className="card-servico__duracao">⏱ {servico.duracao}</span>
      </div>
    </div>
  )
}

export default CardServico
