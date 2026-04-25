import React from 'react'
import { IConsultaItemProps } from '../../types'

const ConsultaItem: React.FC<IConsultaItemProps> = ({ consulta, onConcluir, onCancelar }) => {
  const badgeClass = { pendente: 'badge-pendente', concluida: 'badge-concluida', cancelada: 'badge-cancelada' }[consulta.status]
  const badgeLabel = { pendente: '⏳ Pendente', concluida: '✅ Concluída', cancelada: '❌ Cancelada' }[consulta.status]

  return (
    <div className={`consulta-item consulta-item--${consulta.status}`}>
      <div className="consulta-item__info">
        <strong className="consulta-item__cliente">{consulta.cliente}</strong>
        <span className="consulta-item__servico">{consulta.servico}</span>
        <span className="consulta-item__data">📅 {consulta.data} às {consulta.horario}</span>
      </div>
      <div className="consulta-item__acoes">
        <span className="consulta-item__valor">R$ {consulta.valor}</span>
        <span className={`consulta-badge ${badgeClass}`}>{badgeLabel}</span>
        {consulta.status === 'pendente' && (
          <div className="d-flex gap-2 mt-1">
            <button className="btn-concluir" onClick={() => onConcluir(consulta.id)}>Concluir</button>
            <button className="btn-cancelar" onClick={() => onCancelar(consulta.id)}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConsultaItem
