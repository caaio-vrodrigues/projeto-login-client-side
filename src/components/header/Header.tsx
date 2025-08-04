import styles from '@/components/header/Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.leftBlock} ${styles.block}`}>
        <FontAwesomeIcon icon={faAppleAlt}/>
      </div>
      <div className={`${styles.centerBlock} ${styles.block}`}>
        <h1>Dashboard</h1>
      </div>
      <div className={`${styles.rightBlock} ${styles.block}`}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
    </header>
  )
}