// src/services/auth.ts

const TOKEN_KEY = 'auth_token';

export const saveToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error(`login: HTTP ${res.status}`);
    const data = await res.json();
    if (data?.token) saveToken(data.token);
    return data;
  } catch (err) {
    throw err instanceof Error ? err : new Error('login: erro na requisição');
  }
};

export const me = async (token?: string) => {
  try {
    const t = token ?? getToken();
    if (!t) throw new Error('me: token ausente');
    const res = await fetch('http://localhost:8080/auth/me', {
      headers: { Authorization: `Bearer ${t}` }
    });
    if (!res.ok) throw new Error(`me: HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    throw err instanceof Error ? err : new Error('me: erro na requisição');
  }
};

export const logout = () => {
  clearToken();
};