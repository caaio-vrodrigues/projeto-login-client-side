import { LoginRequest, TokenResponse, UserDto, Props } from './typesAuth';

const BASE_URL = 'https://crud-springboot-e4ao.onrender.com';
const TOKEN_KEY = 'auth_token';
let memoryToken: string | null = null;

const isBrowser = (): boolean => 
  typeof window !== 'undefined' && typeof localStorage !== 'undefined';

const request = async (body: any, url: string): Promise<Response> => 
  await fetch(`${BASE_URL}/auth/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body),
  });

const setToken = (token: string): void => {
  if (isBrowser()) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    memoryToken = token;
  }
}

const dealingErrorRequest = async (msgErr: string, res: Response) => {
  if(!res.ok){
    const err = await res.json() as { 
      code?: number; 
      message?: string; 
      path?: string 
    }; 
    const details = err && err.message ? ` - ${err.message}` : '';

    if(err.message?.toLowerCase() == 'failed to fetch')
      throw new Error(`Falha na requisição`);
    if(res.status == 400)
      throw new Error(`Sua senha deve conter no mínimo 8 dígitos`);
    if(res.status == 500)
      throw new Error(`E-mail já cadastrado, tente um e-mail diferente`);
    if(res.status == 401) throw new Error(`Falha no login ${details}`);

    throw new Error(`${msgErr} (status ${res.status})${details}`);
  }
}

export const startServer = async (props: Props): Promise<boolean> => {
  const { setInitServer } = props;
  try{
    const res = await fetch(`${BASE_URL}/auth/ping`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' }
    });
    return res.ok;
  } 
  catch(err) {
    console.error(err);
    return false;
  }
  finally{ setInitServer(true); }
};

export const getToken = (): string | null => {
  if (isBrowser()) return localStorage.getItem(TOKEN_KEY);
  return memoryToken;
}

export const createUser = async (body: UserDto): Promise<void> => {
  const res = await request(body, 'create');
  await dealingErrorRequest('Falha ao criar usuário', res);
}

export const loginAcces = async (credentials: LoginRequest): Promise<string> => {
  const res = await request(credentials, 'login');
  await dealingErrorRequest('Falha no login', res);
  const tokenRes = await res.json() as TokenResponse;
  if(!tokenRes?.token) throw new Error('Resposta de login sem token.');
  setToken(tokenRes.token);
  return tokenRes.token;
}

export const logout = (): void => {
  if (isBrowser()) localStorage.removeItem(TOKEN_KEY);
  memoryToken = null;
}