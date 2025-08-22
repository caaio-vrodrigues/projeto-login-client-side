import ContextMaster from "@/context/ContextProvider";
import { useContext, useState, useEffect } from "react";
import styles from './WelcomeLogin.module.css';
import { WelcomePage } from "./welcome-page/WelcomePage";

export const WelcomeLogin = () => {
  
  const { setFinalizedInteraction, page, setPage } = useContext(ContextMaster);
  const [showNext, setShowNext] = useState(false);

  const p0 = [
    {
      id: 0, 
      str: 'Olá, seja muito bem vindo ao meu projeto!'
    },
    {
      id: 1, 
      str: 'Espero que você possa ter uma boa experiência ao navegar pelo App.'
    }
  ];

  const p1 = [
    {
      id: 0, 
      str: 'Testando'
    },
    {
      id: 1, 
      str: 'Tudo funcionando!'
    }
  ];

  const buttonNextPage = () => {
    return <button onClick={()=>setPage(page + 1)}>next</button>
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNext(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>
    <div className={styles.welcomeLoginContainer}>
      <div className={styles.wrapParagraphs}>
        {page == 0 && <WelcomePage strs={p0} page={page}/>}
        {page == 1 && <WelcomePage strs={p1} page={page}/>}
        {showNext && buttonNextPage()}
      </div>
      <button onClick={()=>setFinalizedInteraction(true)}>
        click
      </button>
    </div>
  </>
}