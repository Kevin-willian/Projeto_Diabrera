import { useState, useEffect } from 'react'
import { IConsulta, IDashboardStats } from '../types'
import { consultasIniciais, servicosIniciais, META_MENSAL } from '../data/dados'
import HeaderAdmin from '../components/Header/HeaderAdmin'
import Dashboard from '../components/Dashboard/Dashboard'
import CardServico from '../components/CardServico/CardServico'
import ConsultaItem from '../components/ConsultaItem/ConsultaItem'
import SidebarAdmin from '../components/Sidebar/SidebarAdmin'
import Footer from '../components/Footer/Footer'
import GraficoPizza from '../components/GraficoPizza/GraficoPizza'
import '../styles/admin.css'

interface IAdminPageProps {
  onLogout: () => void
}

function AdminPage({ onLogout }: IAdminPageProps) {
  const [consultas, setConsultas] = useState<IConsulta[]>(consultasIniciais)
  const [toast, setToast] = useState<string>('')

  const stats: IDashboardStats = {
    totalConsultas: consultas.length,
    consultasConcluidas: consultas.filter(c => c.status === 'concluida').length,
    consultasPendentes: consultas.filter(c => c.status === 'pendente').length,
    receitaTotal: consultas.filter(c => c.status === 'concluida').reduce((acc, c) => acc + c.valor, 0),
  }

  const handleConcluir = (id: number): void => {
    setConsultas(prev => prev.map(c => c.id === id ? { ...c, status: 'concluida' } : c))
    mostrarToast('✅ Consulta concluída!')
  }

  const handleCancelar = (id: number): void => {
    setConsultas(prev => prev.map(c => c.id === id ? { ...c, status: 'cancelada' } : c))
    mostrarToast('❌ Consulta cancelada.')
  }

  const mostrarToast = (msg: string): void => setToast(msg)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 3000)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div>
      <HeaderAdmin onLogout={onLogout} />

      <main className="admin-main">
        <div className="container-fluid">
          <div className="row g-4">

            <aside className="col-12 col-md-3">
              <SidebarAdmin stats={stats} />
            </aside>

            <div className="col-12 col-md-9">
              <Dashboard stats={stats} />

              <GraficoPizza
                concluidas={stats.consultasConcluidas}
                pendentes={stats.consultasPendentes}
                canceladas={consultas.filter(c => c.status === 'cancelada').length}
                receitaTotal={stats.receitaTotal}
                metaMensal={META_MENSAL}
              />

              <section className="mb-4">
                <h2 className="section-titulo">🃏 Serviços Cadastrados</h2>
                <div className="row g-3">
                  {servicosIniciais.map(s => (
                    <div className="col-12 col-sm-6 col-xl-3" key={s.id}>
                      <CardServico servico={s} />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="section-titulo">📅 Consultas Agendadas</h2>
                <div className="lista-consultas">
                  {consultas.map(c => (
                    <ConsultaItem
                      key={c.id}
                      consulta={c}
                      onConcluir={handleConcluir}
                      onCancelar={handleCancelar}
                    />
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>

      <Footer nomeAluno="Seu Nome Completo Aqui" disciplina="Desenvolvimento Web" />

      {toast && <div className="toast-admin">{toast}</div>}
    </div>
  )
}

export default AdminPage
