'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';

import styles from '@/components/login/login/Login.module.css';
import ContextMaster from '@/context/ContextProvider';

import { createUser, loginAcces } from '@/connection/auth';

export const Login = () => {
  const { showCreateAcc, setShowCreateAcc } = useContext(ContextMaster);
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setErrMsg(null);
    setLoading(true);
    try {
      if (showCreateAcc) {
        const res: unknown = await createUser({ email, password: passWord });
        if (res instanceof Response) {
          if (!res.ok) {
            let bodyText = '';
            try {
              bodyText = await res.clone().text();
            } catch (_) {}
            throw new Error(`${res.status} ${res.statusText}${bodyText ? ' - ' + bodyText : ''}`);
          }
        } else if (res && typeof res === 'object' && 'ok' in (res as any) && (res as any).ok === false) {
          const r: any = res;
          const status = r.status ? ` ${r.status}` : '';
          const msg = r.error || `Falha de requisição${status}`;
          throw new Error(msg);
        }
        setShowCreateAcc(false);
        return;
      }
      const res: unknown = await loginAcces({ email, password: passWord });
      if (res instanceof Response) {
        if (!res.ok) {
          let bodyText = '';
          try {
            bodyText = await res.clone().text();
          } catch (_) {}
          throw new Error(`${res.status} ${res.statusText}${bodyText ? ' - ' + bodyText : ''}`);
        }
      } else if (res && typeof res === 'object' && 'ok' in (res as any) && (res as any).ok === false) {
        const r: any = res;
        const status = r.status ? ` ${r.status}` : '';
        const msg = r.error || `Falha de requisição${status}`;
        throw new Error(msg);
      }
      router.replace('/');
      return;
    } catch (err: unknown) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : 'Falha no login. Tente novamente.';
      setErrMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return <>
    <section className={styles.loginSection}>
      <div className={styles.loginCentralizedBlock}>
        <ButtonBlock />
        <div className={styles.loginTitle}>
          <h1>{showCreateAcc ? 'Nova Conta' : 'Login'}</h1>
        </div>
        <form className={styles.formLogin} onSubmit={handleSubmit}>
          <div className={`${styles.wrapInput} ${styles.wrapInputEmail}`}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.wrapInput} ${styles.wrapInputPassword}`}>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              autoComplete="current-password"
              required
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              className={styles.passwordInput}
            />
            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={loading}>
              {showCreateAcc ? 'enviar' : 'entrar'}
            </button>
          </div>
        </form>
        {loading && (
          <div className={`${styles.wrapMsg}`}>
            <p className={`${styles.loading}`}>aguarde...</p>
          </div>
        )}
        {errMsg && (
          <div className={`${styles.wrapMsg}`}>
            <p className={styles.errorMsg}>{errMsg}</p>
          </div>
        )}
      </div>
    </section>
  </>
};