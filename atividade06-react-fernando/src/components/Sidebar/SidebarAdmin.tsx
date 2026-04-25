import React from 'react'
import { IDashboardStats } from '../../types'

interface ISidebarAdminProps {
  stats: IDashboardStats
}

const SidebarAdmin: React.FC<ISidebarAdminProps> = ({ stats }) => {
  return (
    <aside className="sidebar-admin">
      <div className="sidebar-admin__avatar">🌙</div>
      <h2 className="sidebar-admin__nome">Selene</h2>
      <p className="sidebar-admin__titulo">Cartomante & Bruxa</p>
      <hr className="sidebar-admin__divider" />

      <div className="mb-3">
        <p className="sidebar-admin__label">Receita do mês</p>
        <p className="sidebar-admin__valor">R$ {stats.receitaTotal}</p>
      </div>
      <div className="mb-3">
        <p className="sidebar-admin__label">Consultas realizadas</p>
        <p className="sidebar-admin__valor">{stats.consultasConcluidas}</p>
      </div>
      <div className="mb-3">
        <p className="sidebar-admin__label">Aguardando atendimento</p>
        <p className="sidebar-admin__valor">{stats.consultasPendentes}</p>
      </div>

      <hr className="sidebar-admin__divider" />

      <div className="mb-3">
        <p className="sidebar-admin__label">Horários</p>
        <ul className="sidebar-admin__horarios">
          <li>Seg – Sex: 10h às 20h</li>
          <li>Sábado: 10h às 16h</li>
          <li>Domingo: fechado</li>
        </ul>
      </div>

      <hr className="sidebar-admin__divider" />

      <div>
        <p className="sidebar-admin__label mb-2">Aviso</p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(240,230,216,0.45)', lineHeight: 1.6 }}>
          🌹 Meus trabalhos não substituem profissionais de saúde, direito ou psicologia.
        </p>
      </div>
    </aside>
  )
}

export default SidebarAdmin
