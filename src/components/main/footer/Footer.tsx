import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export const Footer = () => 
  <footer className={styles.foot}>
    <div className={styles.footTitle}>
      <h2>Developed by</h2>
      <div className={styles.copy}>
        <p>Caio Vinicius Rodrigues</p>
        <FontAwesomeIcon icon={faCopyright}/>
      </div>
      <a href="https://www.freepik.com/free-vector/white-technology-background-concept_6514902.htm#fromView=keyword&page=3&position=39&uuid=434c589d-d709-4b90-ac96-a95b48253ccb&query=Technology">Background image by freepik</a>
    </div>
  </footer>
  