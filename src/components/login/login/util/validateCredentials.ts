import { createUser, loginAcces } from '@/connection/auth';

type Props = {
  email: string;
  password: string;
}

export const validateCreate = async ({email, password}: Props) => {
  const res: unknown = await createUser({ email, password: password });
  if (res instanceof Response) {
    if (!res.ok) {
      const bodyText = await res.clone().text();
      throw new Error(`${res.status} ${res.statusText}${bodyText ? 
                                                      ' - ' + bodyText : ''}`);
    }
  }
  if (res && typeof res === 'object' && 'ok' in (res as any) && 
                                                  (res as any).ok === false) {
    const r: any = res;
    const status = r.status ? ` ${r.status}` : '';
    const msg = r.error || `Falha de requisição${status}`;
    throw new Error(msg);
  }
}

export const validateLogin = async ({email, password}: Props) => {
  const res: unknown = await loginAcces({ email, password: password });
  if (res instanceof Response) {
    if (!res.ok) {
      const bodyText = await res.clone().text();
      throw new Error(`${res.status} ${res.statusText}${bodyText ? 
                                                      ' - ' + bodyText : ''}`);
    }
  }
  if (res && typeof res === 'object' && 'ok' in (res as any) && 
                                                    (res as any).ok === false) 
  {
    const r: any = res;
    const status = r.status ? ` ${r.status}` : '';
    const msg = r.error || `Falha de requisição${status}`;
    throw new Error(msg);
  }
}