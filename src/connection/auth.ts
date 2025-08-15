// [ALTERAÇÃO] Mantido: tipos básicos
export type UserDto = Record<string, unknown>;

const BASE_URL = 'http://localhost:8080';

// [ALTERAÇÃO] Chave do token e fallback em memória para ambientes sem window
const TOKEN_KEY = 'auth_token';
let memoryToken: string | null = null;

// [ALTERAÇÃO] Utilitário seguro para checar ambiente
function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

// [ALTERAÇÃO] Persistência do token
function setToken(token: string): void {
  if (isBrowser()) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    memoryToken = token;
  }
}

// [ALTERAÇÃO] Leitura do token (usado por LoginGate)
export function getToken(): string | null {
  if (isBrowser()) {
    return localStorage.getItem(TOKEN_KEY);
  }
  return memoryToken;
}

// [ALTERAÇÃO] Remoção do token
export function clearToken(): void {
  if (isBrowser()) {
    localStorage.removeItem(TOKEN_KEY);
  } else {
    memoryToken = null;
  }
}

// [ALTERAÇÃO] Mantido: criar usuário via POST /auth/create
export async function createUser(body: UserDto): Promise<void> {
  const res = await fetch(`${BASE_URL}/auth/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    let details = '';
    try {
      const err = await res.json() as { code?: number; message?: string; path?: string };
      details = err && err.message ? ` - ${err.message}` : '';
    } catch {}
    throw new Error(`Falha ao criar usuário (status ${res.status})${details}`);
  }
}

// [ALTERAÇÃO] Novo: login para gerar e salvar o token via POST /auth/login
export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export async function login(credentials: LoginRequest): Promise<string> {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (!res.ok) {
    let details = '';
    try {
      const err = await res.json() as { code?: number; message?: string; path?: string };
      details = err && err.message ? ` - ${err.message}` : '';
    } catch {}
    throw new Error(`Falha no login (status ${res.status})${details}`);
  }

  const data = await res.json() as TokenResponse;
  if (!data?.token) {
    throw new Error('Resposta de login sem token.');
  }
  setToken(data.token);
  return data.token;
}

export default { createUser, login, getToken, clearToken };