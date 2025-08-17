import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope  } from '@fortawesome/free-solid-svg-icons';

import styles from '@/components/main/Main.module.css';

export const Contacts = () => {
  return <>
    <div className={`${styles.contato}`}>
      <div className={`${styles.iconContato}`}>
        <FontAwesomeIcon icon={faGithub}/>
      </div>
      <div className={`${styles.iconContato}`}>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
      <div className={`${styles.iconContato}`}>
        <FontAwesomeIcon icon={faWhatsapp}/>
      </div>
      <div className={`${styles.iconContato}`}>
        <FontAwesomeIcon icon={faEnvelope}/>
      </div>
    </div>
  </>
}