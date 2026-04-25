import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import './styles/homepage.css'

type Pagina = 'login' | 'home' | 'admin'

function App() {
  const [pagina, setPagina] = useState<Pagina>('login')

  const handleLogin = (isAdmin: boolean): void => {
    setPagina(isAdmin ? 'admin' : 'home')
  }

  const handleLogout = (): void => {
    setPagina('login')
  }

  if (pagina === 'login') return <LoginPage onLogin={handleLogin} />
  if (pagina === 'admin') return <AdminPage onLogout={handleLogout} />
  return <HomePage onLoginClick={() => setPagina('login')} />
}

export default App
