import styles from './Welcome.module.css';

export const Welcome = () => 
  <section>
    <div className={styles.welcome}>
      <span>Olá.</span>
      <span>Seja muito bem vindo!</span>
    </div>
    <div className={styles.videoBlock}>
      <iframe
        src='https://www.youtube.com/embed/icrTbtYLqUw&list=RDicrTbtYLqUw&start_radio=1'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        allowFullScreen />
    </div>
  </section>