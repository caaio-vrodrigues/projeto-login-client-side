import { LoginRequest, TokenResponse, UserDto } from './typesAuth';

const BASE_URL = 'http://localhost:8080';
const TOKEN_KEY = 'auth_token';
let memoryToken: string | null = null;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function setToken(token: string): void {
  if (isBrowser()) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    memoryToken = token;
  }
}

export function getToken(): string | null {
  if (isBrowser()) return localStorage.getItem(TOKEN_KEY);
  return memoryToken;
}

export function clearToken(): void {
  if (isBrowser()) localStorage.removeItem(TOKEN_KEY);
  memoryToken = null;
}

const request = async (body: any, url: string): Promise<Response> => {
  return await fetch(`${BASE_URL}/auth/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body),
  });
}

const dealingErrorRequest = async (msgErr: string, res: Response) => {
  if(!res.ok){
    const err = await res.json() as { 
      code?: number; 
      message?: string; 
      path?: string 
    }; 
    const details = err && err.message ? ` - ${err.message}` : '';
    throw new Error(`${msgErr} (status ${res.status})${details}`);
  }
}

export async function createUser(body: UserDto): Promise<void> {
  const res = await request(body, 'create');
  await dealingErrorRequest('Falha ao criar usuário', res);
}

export async function loginAcces(credentials: LoginRequest): Promise<string> {
  const res = await request(credentials, 'login');
  await dealingErrorRequest('Falha no login', res);
  const tokenRes = await res.json() as TokenResponse;
  if(!tokenRes?.token) throw new Error('Resposta de login sem token.');
  setToken(tokenRes.token);
  return tokenRes.token;
}

export const logout = (): void => clearToken();

export default { createUser, loginAcces, getToken, clearToken, logout };