import ContextMaster from "@/context/ContextProvider";
import { useCallback, useContext, useState } from "react";
import styles from './WelcomeLogin.module.css';
import { WelcomePage } from "./welcome-page/WelcomePage";
import { allPages } from './data/data';
import { Spinner } from "@/utils/spinner/Spinner";

export const WelcomeLogin = () => {
  const { setFinalizedInteraction, currentPage } = useContext(ContextMaster);

  const endPreview = useCallback(()=> {
    setTimeout(()=>{setFinalizedInteraction(true)}, 8000);
    return <>
      <div className={`${styles.wrapMsgReady}`}>
        <p>Tudo pronto, aguarde um momento enquanto a ativação do servidor é finalizada.</p> 
        <Spinner/>
      </div>
    </>
  }, []);

  return <>
    {allPages.map((page, id) => {
        if(currentPage == id){
          const lastPage = allPages.length - 1 == id;
          return <WelcomePage key={id} strs={page} isLastPage={lastPage}/>
        }
      })
    }
    {currentPage == allPages.length && endPreview()}
  </>
}