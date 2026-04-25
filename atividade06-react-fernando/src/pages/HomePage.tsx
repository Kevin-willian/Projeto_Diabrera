import ImageSlider from '../components/ImageSlider/ImageSlider'
import '../components/ImageSlider/ImageSlider.css'

interface IHomePageProps {
  onLoginClick: () => void
}

function HomePage({ onLoginClick }: IHomePageProps) {
  return (
    <div className="homepage">
      <header className="hp-header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <h1 className="hp-logo">Diabrera</h1>
            <div className="d-flex gap-3 align-items-center">
              <a href="#" className="hp-link">Cadastre-se</a>
              <button className="hp-btn-login" onClick={onLoginClick}>Login</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hp-carrossel">
          <ImageSlider />
        </section>

        <section className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="hp-titulo-secao">É necessário saber que</h2>
              <p className="hp-texto">Embora eu possa ser carismática e amigável, também posso ser maldita e sem caráter, não me ofenda nas consultas de tarô. A boca que abençoa também é a que amaldiçoa.</p>
              <h2 className="hp-titulo-secao">Oráculo é oráculo</h2>
              <p className="hp-texto">Meus trabalhos não substituem ajuda de profissionais, sejam eles: médicos, psicólogos, psiquiatras, advogados, entre outros...</p>
            </div>
            <div className="col-12 col-md-6">
              <h2 className="hp-titulo-secao">Quem sou eu</h2>
              <p className="hp-texto">Me chamo Selene, tenho 21 anos, devota de Afrodite há muitas vidas, defendo uma bruxaria consciente, da qual resiste a imposições e luta contra opressões. Bruxa, feiticeira, pesquisadora eterna.</p>
              <h2 className="hp-titulo-secao">Suas mensagens estão seguras comigo</h2>
              <p className="hp-texto">Entrego um serviço de confidencialidade. O que foi dito entre nós está entre nós, até que seja levado junto à morte.</p>
            </div>
          </div>
        </section>

        <section className="container mt-5">
          <h2 className="hp-titulo-secao text-center">Métodos</h2>
          <div className="row g-3 mt-2">
            {[
              { nome: 'A Destemida', desc: 'Consulta completa: âmbito amoroso, profissional e espiritual. Presente, obstáculos e aconselhamentos futuros.', preco: 'R$ 250,00', icone: '🔮' },
              { nome: 'Quem Soltou os Cães?', desc: 'Entramos no inconsciente do seu parceiro. Pensamentos, sentimentos e intenções com relação a você.', preco: 'R$ 190,00', icone: '🐺' },
              { nome: 'Abutres do Velho Mundo', desc: 'Análise de energia nociva que trava seus caminhos e identificação da área para limpeza energética.', preco: 'R$ 120,00', icone: '🌑' },
              { nome: 'A Cura ou o Veneno?', desc: 'Para situações sem saída — ficar ou partir. Válido para trabalho, ciclo social, mudanças de casa.', preco: 'R$ 90,00', icone: '🥀' },
            ].map(s => (
              <div className="col-12 col-sm-6 col-lg-3" key={s.nome}>
                <div className="hp-metodo-card">
                  <div className="hp-metodo-icone">{s.icone}</div>
                  <h3 className="hp-metodo-nome">{s.nome}</h3>
                  <p className="hp-metodo-desc">{s.desc}</p>
                  <span className="hp-metodo-preco">{s.preco}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mt-5 text-center">
          <h2 className="hp-titulo-secao">Não é minha responsabilidade</h2>
          <div className="row justify-content-center mt-2">
            <div className="col-12 col-md-6">
              <p className="hp-texto">Não me responsabilizo por ações consequentes após consultas comigo. Eu apenas te mostro o caminho — o que você irá fazer com essa informação não cabe à minha responsabilidade.</p>
            </div>
          </div>
        </section>

        <section className="container mt-5 text-center pb-4">
          <h2 className="hp-titulo-secao">Agende sua consulta</h2>
          <p className="hp-texto mx-auto mt-2" style={{ maxWidth: 480 }}>
            Fale comigo diretamente pelo WhatsApp e marque sua consulta. Responderei assim que possível!
          </p>
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noreferrer"
            className="hp-btn-whatsapp mt-3 d-inline-block"
          >
            📱 Chamar no WhatsApp
          </a>
        </section>
      </main>

      <footer className="hp-footer">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 py-3">
            <div className="d-flex gap-4 align-items-center">
              <span className="hp-footer-item">📞 Contato</span>
              <span className="hp-footer-item">🏷 Produtos</span>
              <span className="hp-footer-item">🛒 Carrinho</span>
              <span className="hp-footer-item">📸 Instagram</span>
            </div>
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noreferrer"
              className="hp-footer-wpp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
