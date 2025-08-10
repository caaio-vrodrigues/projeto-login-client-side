'use client';
// react
import { useContext, useState } from 'react';
// next
import { useRouter } from 'next/navigation';
// components
import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
// styles
import styles from '@/components/login/login/Login.module.css';
// context
import ContextMaster from '@/context/ContextProvider';
// connection
import { login, me } from '@/connection/auth';

export const Login = () => {
  const { showCreateAcc } = useContext(ContextMaster);
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrMsg(null);
    setLoading(true);
    try {
      const { token } = await login(email, passWord);
      if (!token) throw new Error('Token ausente na resposta do login');
      await me(token);
      router.replace('/');
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : 'Falha no login. Tente novamente.';
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
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'aguarde...' : showCreateAcc ? 'enviar' : 'entrar'}
            </button>
          </div>
          {errMsg && (
            <p style={{ color: 'crimson', marginTop: 8 }}>{errMsg}</p>
          )}
        </form>
      </div>
    </section>
  </>;
};