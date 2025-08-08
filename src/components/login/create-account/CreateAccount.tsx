import styles from '@/components/login/create-account/CreateAccount.module.css';
import ContextMaster from '@/context/ContextProvider';
import { useContext } from 'react';

export const CreateAccount = () => {
  const {showCreateAcc, setShowCreateAcc} = useContext(ContextMaster);
  return <>
    <div className={styles.goBack}>
      <button onClick={() => setShowCreateAcc(!showCreateAcc)}>voltar</button>
    </div>
    <div className={styles.createAccWrap}>

    </div>
  </>
}