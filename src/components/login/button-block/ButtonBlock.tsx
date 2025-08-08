'use context';

import styles from '@/components/login/button-block/ButtonBlock.module.css';
import ContextMaster from '@/context/ContextProvider';
import { useContext } from 'react';

export const ButtonBlock = () => {
  const {showCreateAcc, setShowCreateAcc} = useContext(ContextMaster);

  return <>
    <div className={styles.buttonBlock}>
      <button 
        className={styles.button}
        onClick={()=>setShowCreateAcc(!showCreateAcc)}>
        {showCreateAcc?"voltar":"voltar"}
    </button>
    </div>
  </>
}