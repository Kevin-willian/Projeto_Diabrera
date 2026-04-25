import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { IGraficoPizzaProps } from '../../types'

const CORES = ['#6dbf8a', '#e2a24b', '#7a7a7a']

const GraficoPizza: React.FC<IGraficoPizzaProps> = ({
  concluidas,
  pendentes,
  canceladas,
  receitaTotal,
  metaMensal,
}) => {
  const dadosStatus = [
    { name: 'Concluídas', value: concluidas },
    { name: 'Pendentes', value: pendentes },
    { name: 'Canceladas', value: canceladas },
  ].filter(d => d.value > 0)

  const dadosReceita = [
    { name: 'Receita obtida', value: receitaTotal },
    { name: 'Restante da meta', value: Math.max(metaMensal - receitaTotal, 0) },
  ]

  const coresReceita = ['#c9a96e', 'rgba(255,255,255,0.08)']

  return (
    <section className="mb-4">
      <h2 className="section-titulo">📈 Gráficos e Estimativas</h2>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 10, padding: '1rem' }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(240,230,216,0.5)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
              Status das Consultas
            </p>
            {dadosStatus.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={dadosStatus} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                    {dadosStatus.map((_, i) => (
                      <Cell key={i} fill={CORES[i % CORES.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#1a0010', border: '1px solid rgba(201,169,110,0.3)', borderRadius: 6, fontSize: 12 }}
                    labelStyle={{ color: '#c9a96e' }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, color: 'rgba(240,230,216,0.6)' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ fontSize: '0.8rem', color: 'rgba(240,230,216,0.35)', textAlign: 'center', paddingTop: 60 }}>Sem dados</p>
            )}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 10, padding: '1rem' }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(240,230,216,0.5)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
              Meta Mensal — R${metaMensal}
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={dadosReceita} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value" startAngle={90} endAngle={-270}>
                  {dadosReceita.map((_, i) => (
                    <Cell key={i} fill={coresReceita[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#1a0010', border: '1px solid rgba(201,169,110,0.3)', borderRadius: 6, fontSize: 12 }}
                  formatter={(v: number) => `R$ ${v}`}
                />
                <Legend wrapperStyle={{ fontSize: 12, color: 'rgba(240,230,216,0.6)' }} />
              </PieChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(240,230,216,0.45)', marginTop: 4 }}>
              R$ {receitaTotal} de R$ {metaMensal} ({Math.min(Math.round((receitaTotal / metaMensal) * 100), 100)}%)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GraficoPizza
