# Diabrera — Tarot & Oráculos
### Atividade 06 — React + TypeScript + Bootstrap

> **Disciplina:** Desenvolvimento Web — Prof. Fernando
> **Aluno:** Seu Nome Completo
> **Curso:** Análise e Desenvolvimento de Sistemas
> **Entrega:** Abril / 2025

---

## Tema

**Gestão de consultas de Tarot e Cartomancia** — plataforma da cartomante Selene para gerenciar seus serviços e atendimentos. O sistema possui fluxo de autenticação, homepage pública para clientes e painel administrativo exclusivo para a Selene.

---

## Como rodar

```bash
cd atividade06-react-fernando
npm install
npm run dev
```

**Login admin:** usuário `admin` / senha `admin`
Qualquer outro usuário → homepage pública.

---

## Fluxo de navegação

```
App
 └── LoginPage
      ├── admin/admin  →  AdminPage (painel da Selene)
      └── outro        →  HomePage  (página pública)
```

---

## Justificativa da Arquitetura

A aplicação segue o padrão **Smart/Dumb components**: componentes inteligentes (com estado) vs. apresentacionais (só renderizam props).

**`App.tsx`** — único responsável pelo estado de navegação (`useState<Pagina>`). Nenhum filho sabe sobre roteamento — apenas recebem callbacks.

**`LoginPage`** — lógica de autenticação isolada. Mudanças nas regras de login não afetam o restante.

**`HomePage`** — puramente apresentacional. Exibe carrossel, serviços e botão de WhatsApp. Sem estado próprio.

**`AdminPage`** — único componente "inteligente" da área admin. Centraliza o `useState` de consultas e calcula os `IDashboardStats` derivados. Todos os filhos recebem dados prontos via props.

**`Dashboard`** — recebe `IDashboardStats` e exibe os contadores. Não sabe como os números são calculados.

**`GraficoPizza`** — isolado por ser o componente mais pesado (dependência `recharts`). Substituível sem impactar o restante.

**`CardServico`** — card reutilizável tipado com `IServico`. Pode ser usado em qualquer listagem.

**`ConsultaItem`** — exibição condicional de botões (só em pendentes). Callbacks sobem o evento para o `AdminPage`.

**`SidebarAdmin`** — recebe `IDashboardStats` e exibe dados em tempo real. Componente de leitura — nunca modifica estado.

**`HeaderAdmin` e `Footer`** — estrutura semântica isolada. `Footer` contém `<address>` com identificação.

**`ImageSlider`** — componente original convertido de `.jsx` para `.tsx` com tipagem. Gerencia estado interno de slides.

---

## Estrutura de Pastas

```
atividade06-react-fernando/
├── index.html                     ← Bootstrap 5.3.3 via CDN
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── README.md
└── src/
    ├── App.tsx                    ← Controle de navegação
    ├── main.tsx                   ← Ponto de entrada
    ├── types/
    │   └── index.ts               ← Todas as interfaces TypeScript
    ├── data/
    │   └── dados.ts               ← Dados mockados
    ├── pages/
    │   ├── LoginPage.tsx
    │   ├── HomePage.tsx
    │   └── AdminPage.tsx          ← Estado central
    ├── components/
    │   ├── Header/HeaderAdmin.tsx
    │   ├── Dashboard/Dashboard.tsx
    │   ├── CardServico/CardServico.tsx
    │   ├── ConsultaItem/ConsultaItem.tsx
    │   ├── Sidebar/SidebarAdmin.tsx
    │   ├── Footer/Footer.tsx
    │   ├── GraficoPizza/GraficoPizza.tsx
    │   └── ImageSlider/ImageSlider.tsx + .css
    └── styles/
        ├── admin.css              ← Tema dark (variáveis CSS: noite, vinho, rubi, ouro)
        └── homepage.css           ← Estilos da home e login
```

---

## Interfaces TypeScript

| Interface | Uso |
|---|---|
| `IServico` | Tipagem dos serviços de tarot |
| `IConsulta` | Tipagem das consultas agendadas |
| `IDashboardStats` | Contadores do painel |
| `ICardServicoProps` | Props do CardServico |
| `IDashboardProps` | Props do Dashboard |
| `IConsultaItemProps` | Props do ConsultaItem (com callbacks) |
| `IHeaderAdminProps` | Props do HeaderAdmin |
| `IFooterProps` | Props do Footer |
| `IGraficoPizzaProps` | Props do GraficoPizza |
| `StatusConsulta` | Union type: pendente / concluida / cancelada |

---

## Checklist de Requisitos

| Requisito | |
|---|---|
| React + Vite + TypeScript (.tsx) | ✅ |
| Interfaces TypeScript para Props e estados | ✅ |
| Bootstrap 5.3.3 via CDN | ✅ |
| Grid assimétrico col-md-3 / col-md-9 | ✅ |
| Empilhamento mobile col-12 | ✅ |
| `<header>` `<main>` `<section>` `<aside>` `<address>` | ✅ |
| Dashboard com contadores dinâmicos | ✅ |
| Mudança de status + atualização imediata | ✅ |
| CSS externo com variáveis de cor | ✅ |

---

## Tecnologias

React 18 · Vite · TypeScript · Bootstrap 5.3.3 (CDN) · recharts · GSAP · react-icons

---

**Aluno:** Seu Nome Completo | **Disciplina:** Desenvolvimento Web — Prof. Fernando | **Abril / 2025**
