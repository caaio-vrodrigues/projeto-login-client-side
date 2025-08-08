'use client';

import styles from '@/components/login/login-block/LoginBlock.module.css';
import { Login } from '../login/Login';
import { CreateAccount } from '../create-account/CreateAccount';
import ContextMaster from '@/context/ContextProvider';
import { useContext } from 'react';

export const LoginBlock = () => {
  const { showCreateAcc } = useContext(ContextMaster);

  return <>
    <div className={styles.loginBlock}>
      {showCreateAcc ? <CreateAccount/> : <Login/>}
    </div>
  </>
}