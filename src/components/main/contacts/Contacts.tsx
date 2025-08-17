import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp, faJava } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.css';
import Link from 'next/link';

export const Contacts = () => {
  return <>
    <div className={`${styles.contactContainer}`}>
      <div className={`${styles.contact}`}>
        <div className={`${styles.iconContact}`}>
          <FontAwesomeIcon icon={faGithub}/>
        </div>
        <div className={`${styles.iconContact}`}>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className={`${styles.iconContact}`}>
          <FontAwesomeIcon icon={faWhatsapp}/>
        </div>
        <div className={`${styles.iconContact}`}>
          <FontAwesomeIcon icon={faEnvelope}/>
        </div>
      </div>
      <div className={`${styles.certificateContainer}`}>
        <div className={`${styles.wrapCertificate}`}>
          <Link 
            href={'https://drive.google.com/file/d/16Kx3MT5M3oLrqf3Q51Y9d50Ph2JnUABr/view?usp=sharing'}
            target='blank'
          >
            <FontAwesomeIcon icon={faJava}/>
            <h2>Certified by Oracle</h2>
          </Link>
        </div>
      </div>
    </div>
  </>
}