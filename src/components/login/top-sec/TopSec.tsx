import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import { 
  faJava, faReact, faHtml5, faCss3 
} from '@fortawesome/free-brands-svg-icons';

import styles from './TopSec.module.css';

export const TopSec = () => {
  return(
    <section className={`${styles.secTop}`}>
      <div>
        <span className={styles.spanNone}>Sistema desenvolvido por Caio Vinicius Rodrigues</span>
        <div className={`${styles.containerWrapDeveloper}`}>
          <div className={`${styles.wrapDeveloper} ${styles.wrapDeveloperFirst}`}>
            <span>Desenvolvido por Caio Vinicius Rodrigues.</span>
            <div className={styles.wrapIcon}>
              <FontAwesomeIcon icon={faCopyright}/> 2025
            </div>
          </div>
          <div className={styles.wrapDeveloper}>
            <span>Frontend criado com React-js + Next-js</span>
            <div className={styles.wrapIcon}>
              <FontAwesomeIcon icon={faReact}/>
            </div>
          </div>
          <div className={styles.wrapDeveloper}>
            <span>Backend programado com Java + Springboot</span>
            <div className={styles.wrapIcon}>
              <FontAwesomeIcon icon={faJava}/>
            </div>
          </div>
          <div className={`${styles.wrapDeveloper} ${styles.wrapDeveloperLast}`}>
            <span>Layout desenvolvido de forma pura.</span>
            <div className={styles.wrapIcon}>
              <FontAwesomeIcon icon={faHtml5} className={styles.iconHtml}/>
              <FontAwesomeIcon icon={faCss3}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}