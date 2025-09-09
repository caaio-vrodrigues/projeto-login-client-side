import { msgInitServer } from '@/data/consts';
import { Spinner } from '@/utils/spinner/Spinner';

import styles from './Login.module.css';

export const msgWaitBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>Criando nova conta, aguarde.</p>
    <Spinner login={false}/>  
  </div>

export const waitServerBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>{msgInitServer}</p>
    <Spinner login={false}/>
  </div> 

export const loginSpinnerBlock = () => 
  <div className={styles.wrapLoginSpinner}>
    <span>Validando credenciais, aguarde.</span>
    <Spinner login={true}/>
  </div>