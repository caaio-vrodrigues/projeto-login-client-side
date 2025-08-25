import styles from '@/components/login/login/err-msg/ErrMsg.module.css';

type Props = {
  loading: boolean;
  errMsg: string | null;
}

export const ErrMsg = ({ loading, errMsg }: Props) => 
  <>
    {loading && (
      <div className={`${styles.wrapMsg}`}>
        <p className={`${styles.loading}`}>aguarde...</p>
      </div>
    )}
    {errMsg && (
      <div className={`${styles.wrapMsg}`}>
        <p className={styles.errorMsg}>{errMsg}</p>
      </div>
    )}
  </>
