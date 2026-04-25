import React from 'react'
import { IDashboardProps } from '../../types'
import { META_MENSAL } from '../../data/dados'

const Dashboard: React.FC<IDashboardProps> = ({ stats }) => {
  const pct = stats.totalConsultas > 0
    ? Math.round((stats.consultasConcluidas / stats.totalConsultas) * 100)
    : 0

  const pctMeta = Math.min(Math.round((stats.receitaTotal / META_MENSAL) * 100), 100)

  return (
    <section className="mb-4">
      <h2 className="section-titulo">📊 Painel de Controle</h2>
      <div className="row g-3">
        <div className="col-6 col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-card__icon">📋</div>
            <div className="dashboard-card__valor">{stats.totalConsultas}</div>
            <div className="dashboard-card__label">Total</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="dashboard-card dashboard-card--pendente">
            <div className="dashboard-card__icon">⏳</div>
            <div className="dashboard-card__valor">{stats.consultasPendentes}</div>
            <div className="dashboard-card__label">Pendentes</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="dashboard-card dashboard-card--concluida">
            <div className="dashboard-card__icon">✅</div>
            <div className="dashboard-card__valor">{stats.consultasConcluidas}</div>
            <div className="dashboard-card__label">Concluídas</div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-card__icon">💰</div>
            <div className="dashboard-card__valor">R${stats.receitaTotal}</div>
            <div className="dashboard-card__label">Receita</div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-0">
        <div className="col-12 col-md-6">
          <div className="progress-wrap">
            <div className="d-flex justify-content-between mb-2">
              <span className="progress-label">Taxa de conclusão</span>
              <span className="progress-label">{pct}%</span>
            </div>
            <div className="progress">
              <div className="progress-bar-ouro" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="progress-wrap">
            <div className="d-flex justify-content-between mb-2">
              <span className="progress-label">Meta mensal (R${META_MENSAL})</span>
              <span className="progress-label">{pctMeta}%</span>
            </div>
            <div className="progress">
              <div className="progress-bar-ouro" style={{ width: `${pctMeta}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
