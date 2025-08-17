import styles from '@/components/main/Main.module.css';

import { Contacts } from './contacts/Contacts';
import { Description } from './description/Description';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.boasVindas}>
        <p>Olá.</p>
        <p>Seja muito bem vindo!</p>
      </div>
      <div className={styles.videoBlock}>
        <iframe
          src='https://www.youtube.com/embed/k41rkkPLasY'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          frameBorder='0'
          allowFullScreen />
      </div>
      <Description/>
      <div className={`${styles.wrapSpecialties}`}>
        <div className={`${styles.blockSpecialt}`}>
          <FontAwesomeIcon icon={faReact}/>
        </div>
        <div className={`${styles.blockSpecialt} ${styles.blockSpecialtCenter}`}>
          <FontAwesomeIcon icon={faArrowRight}/>
          <FontAwesomeIcon icon={faArrowLeft}/>
        </div>
        <div className={`${styles.blockSpecialt}`}>
          <FontAwesomeIcon icon={faJava}/>
        </div>
      </div>
      <Contacts/>
    </main>
  )
}