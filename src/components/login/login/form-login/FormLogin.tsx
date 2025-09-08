import { type FormEvent, type Dispatch, type SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './FormLogin.module.css';

import { BackPresentation } from './back-presentation/BackPresentation';

type Props = {
  formValues: {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    loading: boolean;
    showCreateAcc: boolean;
  }
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const FormLogin = ({ formValues, handleSubmit}: Props) => {
  const {
    email, setEmail, password, setPassword, loading, showCreateAcc 
  } = formValues;

  return <>
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
          {showCreateAcc ? 
            <><span>cadastrar</span><FontAwesomeIcon icon={faShare}/></> 
            : <><span>entrar</span><FontAwesomeIcon icon={faHouseUser}/></>}
        </button>
      </div>
      <BackPresentation/>
    </form>
  </>
}