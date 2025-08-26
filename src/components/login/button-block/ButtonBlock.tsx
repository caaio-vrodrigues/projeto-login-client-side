'use client';
import { useContext } from 'react';
import styles from '@/components/login/button-block/ButtonBlock.module.css';
import ContextMaster from '@/context/ContextProvider';

export const ButtonBlock = () => {
  const {showCreateAcc, setShowCreateAcc} = useContext(ContextMaster);
  return (
    <div className={styles.buttonBlock}>
      <button 
        className={styles.button}
        onClick={()=>setShowCreateAcc(!showCreateAcc)}>
        {showCreateAcc ? 'login' : 'nova conta'}
      </button>
    </div>
  );
}