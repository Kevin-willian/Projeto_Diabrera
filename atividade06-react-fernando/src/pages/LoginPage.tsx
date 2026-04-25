import { useState } from 'react'

interface ILoginPageProps {
  onLogin: (isAdmin: boolean) => void
}

function LoginPage({ onLogin }: ILoginPageProps) {
  const [usuario, setUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [erro, setErro] = useState<string>('')

  const handleEntrar = (e: React.FormEvent): void => {
    e.preventDefault()
    setErro('')
    if (usuario === 'admin' && senha === 'admin') {
      onLogin(true)
    } else if (usuario.trim() !== '' && senha.trim() !== '') {
      onLogin(false)
    } else {
      setErro('Preencha usuário e senha.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-titulo">Diabrera</h1>
        <p className="login-subtitulo">Tarot & Oráculos</p>

        <form onSubmit={handleEntrar} className="login-form">
          <input
            type="text"
            placeholder="Usuário"
            className="login-input"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Senha"
            className="login-input"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            autoComplete="current-password"
          />
          {erro && <p className="login-erro">{erro}</p>}
          <button type="submit" className="login-btn">Entrar</button>
        </form>

        <p className="login-hint">
          Não tem conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
