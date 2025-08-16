'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
import { ErrMsg } from './err-msg/ErrMsg';

import styles from '@/components/login/login/Login.module.css';
import ContextMaster from '@/context/ContextProvider';

import { createUser, loginAcces } from '@/connection/auth';

export const Login = () => {
  const { showCreateAcc, setShowCreateAcc } = useContext(ContextMaster);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>): Promise<void> => 
  {
    e.preventDefault();
    setErrMsg(null);
    setLoading(true);
    try{
      if(showCreateAcc){
        await createUser({email, password});
        setShowCreateAcc(false);
        return;
      }
      await loginAcces({email, password});
      router.replace('/');
      return;
    } 
    catch(err: unknown){
      const msg = err instanceof Error && err.message ? err.message
                                          : 'Falha no login. Tente novamente.';
      setErrMsg(msg);
    } 
    finally{ setLoading(false); }
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.passwordInput}
            />
            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={loading}
            >
              {showCreateAcc ? 'enviar' : 'entrar'}
            </button>
          </div>
        </form>
        <ErrMsg errMsg={errMsg} loading={loading}/>
      </div>
    </section>
  </>
};