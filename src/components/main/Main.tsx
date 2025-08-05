import styles from '@/components/main/Main.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.boasVindas}>
        <p>Olá.</p>
        <p>Seja muito bem vindo!</p>
      </div>
       <div className={styles.videoBlock}>
        <iframe
          src="https://www.youtube.com/embed/k41rkkPLasY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`${styles.descricao}`}>
        <h2>Descrição</h2>
        <div className={`${styles.circle}`}>
          <div className={`${styles.FontAweEl}`}>
            <FontAwesomeIcon icon={faCircle}/>
          </div>
          <div>
            <p>Essa aplicação foi criada com o objetivo principal de exemplificar um CRUD utilizando a línguagem de programação Java.</p>
            <p>Código fonte: 
              <Link 
                href={"https://github.com/caaio-vrodrigues/crud-springboot"}
                target='blank'
                className={`${styles.link}`}>
                Github-Caio-Vinicius-Rodrigues
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles.circle}`}>
          <div className={`${styles.FontAweEl}`}>
            <FontAwesomeIcon icon={faCircle}/>
          </div>
          <div>
            <p>Aqui está o link para acessar um projeto onde meu foco é exclusivamente o Frontend.</p>
            <p>Código fonte: 
              <Link 
                href={"https://github.com/caaio-vrodrigues/crud-springboot"}
                target='blank'
                className={`${styles.link}`}>
                Github-Caio-Vinicius-Rodrigues
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles.circle}`}>
          <div className={`${styles.FontAweEl}`}>
            <FontAwesomeIcon icon={faCircle}/>
          </div>
          <div>
            <p>Essa aplicação foi criada com o objetivo principal de exemplificar a criação e execução do CRUD utilizando a línguagem de programação Java</p>
            <p>Essa aplicação foi criada com o objetivo principal de exemplificar a criação e execução do CRUD utilizando a línguagem de programação Java</p>
          </div>
        </div>
      </div>
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
    </main>
  )
}