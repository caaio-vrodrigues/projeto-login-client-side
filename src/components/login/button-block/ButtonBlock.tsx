'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ContextMaster } from '@/context/ContextProvider';
import styles from '@/components/login/button-block/ButtonBlock.module.css';

export const ButtonBlock = () => {
  const {showCreateAcc, setShowCreateAcc, setErrMsg} = useContext(ContextMaster);
  return (
    <div className={styles.buttonBlock}>
      {!showCreateAcc && 
      <span>Já possui cadastro? Crie uma nova conta.</span>}
      <button onClick={()=>{
        setShowCreateAcc(!showCreateAcc);
        setErrMsg(null);
      }}>
        {showCreateAcc ? 'login' : <>
          nova conta <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></>}
      </button>
    </div>
  );
}