import styles from '@/components/login/login/err-msg/ErrMsg.module.css';

type Props = {
  errMsg: string | null;
}

export const ErrMsg = ({ errMsg }: Props) => errMsg && 
  <div className={`${styles.wrapMsg}`}>
    <p className={styles.errorMsg}>{errMsg}</p>
  </div>
  
  
  
