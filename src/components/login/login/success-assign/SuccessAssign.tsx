import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import styles from './SuccessAssign.module.css';
import { useContext } from 'react';
import { ContextMaster } from '@/context/ContextProvider';

export const SuccessAssign = () => {
  const { setSuccessAssign } = useContext(ContextMaster);
  return <div className={styles.wrapSuccessMsg}>
    <span>Sua conta foi criada com sucesso! Clique abaixo e faça login.</span>
    <div className={styles.wrapIcon}>
      <button onClick={()=>setSuccessAssign(false)}>
        <FontAwesomeIcon icon={faRightToBracket}/>
      </button>
    </div>
  </div>
}