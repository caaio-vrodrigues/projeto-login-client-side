import { msgInitServer } from '@/data/consts';
import { Spinner } from '@/utils/spinner/Spinner';

import styles from './Login.module.css';

export const msgWaitBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>Finalizando processo, Aguarde um momento...</p>
    <Spinner login={false}/>  
  </div>

export const waitServerBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>{msgInitServer}</p>
    <Spinner login={false}/>
  </div> 

export const loginSpinnerBlock = () => 
  <div className={styles.wrapLoginSpinner}>
    <span>Validando credênciais. Aguarde um momento...</span>
    <Spinner login={true}/>
  </div>