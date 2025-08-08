import styles from '@/components/login/login/Login.module.css';
import { LoginBlock } from '../login-block/LoginBlock';

export const Login = () => {
  return <>
    {/* <LoginBlock/> */}
    <div className={styles.loginTitle}>
      <h1>Login</h1>
    </div>
    <div className={styles.wrapInputs}>
      <div className={`${styles.inputBlocks} ${styles.wrapEmail}`}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          autoComplete="username"
          required
        />
      </div>
      <div className={`${styles.inputBlocks} ${styles.wrapPassword}`}>
        <input
          type="password"
          placeholder="Senha"
          name="password"
          autoComplete="current-password"
          required
        />
      </div>
    </div>
  </>
}