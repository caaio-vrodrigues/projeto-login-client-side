import styles from '@/components/login/container-login/ContainerLogin.module.css';

import { LoginBlock } from '../login-block/LoginBlock';

export const ContainerLogin = () => {
  return <>
    <div className={styles.login}>
      <LoginBlock/>
    </div>
  </>
}