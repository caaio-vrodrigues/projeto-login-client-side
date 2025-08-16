import type { FormEvent, Dispatch, SetStateAction } from 'react';

import styles from '@/components/login/login/Login.module.css';

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  loading: boolean;
  showCreateAcc: boolean;
}

export const FormLogin = (props: Props) => {
  const {
    handleSubmit, email, setEmail, password, setPassword, loading, showCreateAcc 
  } = props;

  return <>
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
  </>
}