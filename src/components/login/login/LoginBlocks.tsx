import { msgInitServer } from '@/data/consts';
import { Spinner } from '@/utils/spinner/Spinner';

import styles from './Login.module.css';

export const msgWaitBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>Aguarde um momento enquanto o processo é finalizado.</p>
    <Spinner login={false}/>  
  </div>

export const waitServerBlock = () =>
  <div className={styles.wrapMsgAndSpinner}>
    <p>{msgInitServer}</p>
    <Spinner login={false}/>
  </div> 