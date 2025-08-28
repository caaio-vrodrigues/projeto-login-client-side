# PROJECT-LOGIN-CLIENT-SIDE

Frontend de um sistema de autenticação (login) com rotas protegidas, construído em Next.js e TypeScript. Integra-se a um backend independente via REST.

- Produção (Frontend): https://projeto-login-client-side.vercel.app/ 
- Repositório do Backend (Spring Boot): https://github.com/caaio-vrodrigues/crud-springboot 

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Rotas Principais](#rotas-principais)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Integração com o Backend (REST)](#integração-com-o-backend-rest)
- [Autenticação e Rotas Protegidas](#autenticação-e-rotas-protegidas)
- [Gerenciamento de Estado e Sessão](#gerenciamento-de-estado-e-sessão)
- [Estilos e Componentização](#estilos-e-componentização)
- [Build e Deploy (Vercel)](#build-e-deploy-vercel)
- [Troubleshooting](#troubleshooting)
- [Padrões de Código e Scripts](#padrões-de-código-e-scripts)

---

## Visão Geral

Esta aplicação é o frontend do sistema de login, rodando de forma independente e consumindo uma API REST de um backend separado (hospedado na Render). A comunicação entre as camadas ocorre via endpoints REST, com suporte a autenticação e rotas protegidas.

O projeto demonstra:
- Fluxo de login
- Proteção de rotas
- Context API para estado global
- Componentização de UI com CSS Modules
- Integração REST centralizada

---

## Funcionalidades

- Tela de login dedicada
- Proteção de conteúdo através de um guard (Protected)
- Contexto global para sessão/estado
- Componentes reutilizáveis para UI
- Integração com backend via REST
- Tipagem com TypeScript

---

## Tecnologias Utilizadas

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- ESLint

---

## Arquitetura e Estrutura do Projeto

Destaques da arquitetura:
- `src/app`: Páginas e layout usando App Router.
- `src/auth/Protected.tsx`: Guard de rotas/conteúdos autenticados.
- `src/server/connection/conn.ts`: Cliente/central de chamadas HTTP ao backend.
- `src/context/ContextProvider.tsx`: Provedor de contexto global e utilitário de `sessionStorage`.
- `src/data/`: Conteúdo estático (textos, listas, etc.).

---

## Rotas Principais

- `/login` — Página de autenticação
- `/` — Página inicial

---

## Pré-requisitos

- Node.js 18+ (ou 20+)
- npm, yarn ou pnpm
- Acesso à URL do backend (Render) com CORS configurado para o domínio do frontend

---

## Instalação

1. Clonar o repositório
-  bash:
-  git clone https://github.com/caaio-vrodrigues/projeto-login-client-side
-  cd PROJECT-LOGIN-CLIENT-SIDE

2. Instalar dependências
- npm install
- # ou
- yarn install
- # ou
- pnpm install

## Executando o projeto

- npm run dev
- # ou
- yarn dev

- Acesse: localhost
- Build de produção: npm run build
- Rodar o build: npm start

## Integração com o Backend (REST)

- O frontend se comunica com o backend via REST (Render) centralizado em src/server/connection/conn.ts. 

## Autenticação e Rotas Protegidas

1. src/auth/Protected.tsx é o guard utilizado para envolver páginas/trechos que exigem autenticação.

2. Fluxo típico:
  
- Usuário acessa /login e envia credenciais.
- Backend retorna token no corpo.
- O estado global é atualizado e o usuário é redirecionado para a rota protegida.
- Em rotas protegidas, Protected verifica a sessão (ex.: chamando /auth/me) e decide renderizar ou redirecionar.

## Gerenciamento de Estado e Sessão
- src/context/ContextProvider.tsx: concentra o estado global (ex: status de autenticação, dados do usuário).
- src/context/sessionStorage.ts: utilitários para persistir informações não sensíveis por aba/sessão.

## Estilos e Componentização

1. CSS global: src/styles/styles.css

2. CSS Modules por componente

3. Componentes principais:

- Login: src/app/login/page.tsx e src/components/login/*
- Home/main: src/components/main/* (header, footer, welcome, specialties, description, contacts)

4. Princípios:
  - Componentes pequenos e reutilizáveis
  - Estilos com escopo local via CSS Modules
  - Dados de texto/estáticos em src/data/*

## Build e Deploy (Vercel)

1. Conecte o repositório à Vercel: https://vercel.com/login

2. Configure as URL's:

- NEXT_PUBLIC_API_BASE_URL
- (opcional) NEXT_PUBLIC_ENV
- Faça o deploy (Vercel cria Preview a cada PR/branch; merge na branch principal publica em Produção).
- Backend com CORS permitindo o domínio de produção do frontend e credentials: true.

## Troubleshooting

1. 401/403 ao logar ou acessar rota protegida:

- Verifique NEXT_PUBLIC_API_BASE_URL.
- CORS do backend deve permitir o domínio do frontend e credentials.

2. Resposta 204/sem corpo quebra o parse:

- O cliente HTTP já trata ausência de JSON retornando undefined. Ajuste chamadas conforme necessário.

3. Timeout/erros 5xx:

- Verifique logs do backend (Render).

## Padrões de Código e Scripts

1. Scripts usuais (ajuste conforme seu package.json):

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

2. Boas práticas:

- Rodar npm run lint antes de abrir PR.
- Tipagem de requests/responses em src/server/connection/typesAuth.ts.
- Centralizar chamadas no conn.ts para padronizar headers/erros.