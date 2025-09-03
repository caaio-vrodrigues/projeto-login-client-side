'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ContextMaster } from '@/context/ContextProvider';
import styles from '@/components/login/button-block/ButtonBlock.module.css';
import { 
  faArrowUpRightFromSquare, faRightToBracket 
} from '@fortawesome/free-solid-svg-icons';


export const ButtonBlock = () => {
  const {showCreateAcc, setShowCreateAcc, setErrMsg} = useContext(ContextMaster);
  return (
    <div className={styles.buttonBlock}>
      {!showCreateAcc && 
      <span>Já possui cadastro? Crie uma nova conta.</span>}
      <button 
        onClick={()=>{
          setShowCreateAcc(!showCreateAcc);
          setErrMsg(null);
        }
      }>
        {showCreateAcc ? <>login <FontAwesomeIcon icon={faRightToBracket}/></> 
        : <>nova conta <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></>}
      </button>
    </div>
  );
}