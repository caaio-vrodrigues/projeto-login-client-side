'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faClose } from '@fortawesome/free-solid-svg-icons';
import { logout } from '@/server/connection/conn';
import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace('/login');
  };
  
  return(
    <header className={styles.header}>
      <div className={`${styles.leftBlock} ${styles.block}`}>
        <FontAwesomeIcon icon={faAppleAlt}/>
      </div>
      <div className={`${styles.centerBlock} ${styles.block}`}>
        <h1>Caio V. Rodrigues Systems</h1>
      </div>
      <div className={`${styles.rightBlock} ${styles.block}`} >
        <span onClick={handleLogout}>
          <FontAwesomeIcon 
          icon={faClose}/>
        </span>
      </div>
    </header>
  );
}