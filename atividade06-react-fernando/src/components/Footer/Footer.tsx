import React from 'react'
import { IFooterProps } from '../../types'

const Footer: React.FC<IFooterProps> = ({ nomeAluno, disciplina }) => {
  const dataAtual = new Date().toLocaleDateString('pt-BR')

  return (
    <footer className="admin-footer">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <p className="footer-marca">🔮 Diabrera — Tarot & Oráculos</p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(240,230,216,0.35)', margin: 0 }}>
            Sua guia espiritual
          </p>
        </div>
        <address className="footer-address">
          <strong style={{ color: 'rgba(240,230,216,0.7)' }}>{nomeAluno}</strong><br />
          {disciplina} — Prof. Fernando<br />
          <time dateTime={dataAtual}>{dataAtual}</time>
        </address>
      </div>
    </footer>
  )
}

export default Footer
