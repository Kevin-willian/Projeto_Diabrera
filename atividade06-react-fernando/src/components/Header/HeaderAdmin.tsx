import React from 'react'
import { IHeaderAdminProps } from '../../types'

const HeaderAdmin: React.FC<IHeaderAdminProps> = ({ onLogout }) => {
  return (
    <header className="admin-header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <h1 className="admin-logo">Diabrera</h1>
          <span className="admin-badge">Painel Admin</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span style={{ fontSize: '0.8rem', color: 'rgba(240,230,216,0.5)' }}>
            🌙 Selene
          </span>
          <button className="btn-logout" onClick={onLogout}>
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
