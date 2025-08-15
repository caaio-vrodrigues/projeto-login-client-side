// src/connection/auth.ts

export type UserDto = Record<string, unknown>;

const BASE_URL = 'http://localhost:8080';

const TOKEN_KEY = 'auth_token';
let memoryToken: string | null = null;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function setToken(token: string): void {
  try {
    if (isBrowser()) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      memoryToken = token;
    }
  } catch {
    memoryToken = token;
  }
}

// [ALTERAÇÃO] Leitura do token (usado por LoginGate)
export function getToken(): string | null {
  try {
    if (isBrowser()) {
      return localStorage.getItem(TOKEN_KEY);
    }
    return memoryToken;
  } catch {
    return memoryToken;
  }
}

// [ALTERAÇÃO] Remoção do token
export function clearToken(): void {
  try {
    if (isBrowser()) {
      localStorage.removeItem(TOKEN_KEY);
    }
    memoryToken = null;
  } catch {
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

// [ALTERAÇÃO] Mantido: login para gerar e salvar o token via POST /auth/login
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

// [ALTERAÇÃO] Novo: loginAcces com persistência opcional (padrão: persistir)
export interface LoginAccesResult {
  ok: boolean;
  status: number;
  token?: string;
  error?: string;
}

export async function loginAcces(
  credentials: LoginRequest,
  options?: { persist?: boolean }
): Promise<LoginAccesResult> {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!res.ok) {
      let message = res.statusText || 'Erro ao autenticar';
      try {
        const err = await res.json() as { code?: number; message?: string; path?: string };
        if (err?.message) message = err.message;
      } catch {}
      return { ok: false, status: res.status, error: message };
    }

    const data = await res.json() as TokenResponse;
    if (!data?.token) {
      return { ok: false, status: 200, error: 'Resposta de login sem token.' };
    }

    const shouldPersist = options?.persist !== false;
    if (shouldPersist) {
      // [ALTERAÇÃO] Persistindo o token para que getToken() funcione no LoginGate
      setToken(data.token);
    }

    return { ok: true, status: 200, token: data.token };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Falha de rede';
    return { ok: false, status: 0, error: msg };
  }
}

export const logout = () => {
  localStorage.removeItem("auth_token");
}

export default { createUser, login, loginAcces, getToken, clearToken };