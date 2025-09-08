# CRUD-SPRINGBOOT - BACKEND PARA AUTENTICAÇÃO DE LOGIN

API REST construída em Spring Boot 3.5, responsável pela autenticação (login), autorização e exposição de recursos protegidos consumidos pelo frontend Next.js.

- Produção (Frontend): https://projeto-login-client-side.vercel.app/ 
- Repositório deste Backend (Spring Boot): https://github.com/caaio-vrodrigues/crud-springboot 

---

## Sumário

- [Arquitetura e Fluxo](#arquitetura-e-fluxo)
- [Arquitetura e Fluxo](#tecnologias)

---

## Arquitetura e Fluxo

- O frontend envia credenciais para o endpoint de login do backend.
- O backend valida as credenciais, emite um JWT (e opcionalmente um refresh token).
- O frontend armazena o token.
- Para acessar rotas protegidas, o frontend envia o header Authorization: Bearer.
- Erros seguem um formato padronizado (ErrorPayload) com timestamp, status, message e path.

---

## Tecnologias

- Java 21
- Spring Boot 3.5.4
- spring-boot-starter-web
- spring-boot-starter-security
- spring-boot-starter-validation
- Banco de dados H2 (não persistente)
- Maven
- JWT (autenticação Bearer)
- Adapta One, com mais de 20 modelos de IA diferentes (Chat GPT-5 para auxílio nesse projeto)

---