'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faClose } from '@fortawesome/free-solid-svg-icons';
import { logout } from '@/connection/conn';
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
        <h1>System</h1>
      </div>
      <div className={`${styles.rightBlock} ${styles.block}`} >
        <FontAwesomeIcon 
          className={`${styles.closeIcon}`} 
          onClick={handleLogout} 
          icon={faClose}/>
      </div>
    </header>
  );
}