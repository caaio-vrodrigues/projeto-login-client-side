import { Card } from './card/Card';
import styles from './Description.module.css';

export const Description = () => {
  const cardInfos = [
    {
      id: 0,
      text: 'Aplicação criada do absoluto zero para exemplificar algumas de minhas capacitações no frontend e backend.',
      link: null,
      linkTxt: null,
    },
    {
      id: 1,
      text: "As principais tecnologias utilizadas para desenvolver essa aplicação foram 'Java + Springboot' e 'React + Next-Js'. Além disso, a aplicação está disponível rodando em tempo real pelas plataformas Vercel para o frontend e Render para o backend.",
      link: null,
      linkTxt: null,
    },
    {
      id: 2,
      text: 'Código fonte do backend: ',
      link: 'https://github.com/caaio-vrodrigues/crud-springboot',
      linkTxt: 'backend-github',
    },
    {
      id: 3,
      text: 'Código fonte do frontend: ',
      link: 'https://github.com/caaio-vrodrigues/projeto-login-client-side',
      linkTxt: 'frontend-github',
    },
  ];

  return <>
    <section className={`${styles.secDescription}`}>
      <h1>Descrição</h1>
      <div className={styles.cardsContainer}>
        <div className={`${styles.wrapCards} ${styles.leftWrapCards}`}>
          {cardInfos.map(infos => 
            <Card 
              key={infos.id}
              text={infos.text}
              link={infos.link}
              linkTxt={infos.linkTxt}
            />)}
        </div>
        <div className={`${styles.wrapCards} ${styles.rightWrapCard}`}>
          <h2>Breve resumo sobre meu trabalho</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolores vero! Laudantium velit doloribus debitis, amet consequatur totam accusantium facere vitae, nostrum aliquam iusto a aspernatur molestiae neque modi dolore eligendi, distinctio illum unde? Dolore eveniet rerum minima adipisci soluta neque est ullam reiciendis minus a, fugiat quaerat ex voluptate eius ducimus iure obcaecati magni! Possimus laborum at nam. Temporibus repellat blanditiis qui assumenda eius expedita quisquam mollitia eveniet. Quod quos qui fugit? Vero tempore mollitia delectus qui obcaecati odit!</p>
        </div>
      </div>
    </section>
  </>
}