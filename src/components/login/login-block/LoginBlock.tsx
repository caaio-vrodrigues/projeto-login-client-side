import styles from '@/components/login/login-block/LoginBlock.module.css';

export const LoginBlock = () => {
  return <>
    <div className={styles.loginBlock}>
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
    </div>
  </>
}