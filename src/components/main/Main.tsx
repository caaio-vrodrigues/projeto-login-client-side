import styles from '@/components/main/Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <p>Olá</p>
      <p>Seja muito bem vindo!</p>
       <div className={styles.videoBlock}>
        <iframe
          src="https://www.youtube.com/embed/k41rkkPLasY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}