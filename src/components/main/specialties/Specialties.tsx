import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Specialties.module.css';

export const Specialties = () => 
  <section className={`${styles.wrapSpecialties}`}>
    <div className={`${styles.blockSpecialt} ${styles.blockSpecialtTool}`}>
      <FontAwesomeIcon  icon={faReact}/>
    </div>
    <div className={`${styles.blockSpecialt} ${styles.blockSpecialtCenter}`}>
      <FontAwesomeIcon icon={faArrowRight}/>
      <FontAwesomeIcon icon={faArrowLeft}/>
    </div>
    <div className={`${styles.blockSpecialt} ${styles.blockSpecialtTool}`}>
      <FontAwesomeIcon icon={faJava}/>
    </div>
  </section>