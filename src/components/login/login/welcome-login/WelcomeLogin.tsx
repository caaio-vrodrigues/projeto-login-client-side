import ContextMaster from "@/context/ContextProvider";
import { useContext } from "react";
import styles from './WelcomeLogin.module.css';
import { WelcomePage } from "./welcome-page/WelcomePage";
import { allPages } from './data/data';

export const WelcomeLogin = () => {
  const { setFinalizedInteraction, currentPage } = useContext(ContextMaster);

  return <>
    <div className={styles.welcomeLoginContainer}>
      <>
        {allPages.map((page, id) => {
            if(currentPage == id){
              return <WelcomePage key={id} strs={page} />
            }
          })
        }
      </>
      {currentPage == 8 && 
        <button onClick={()=>setFinalizedInteraction(true)}>
          click
        </button>
      }
    </div>
  </>
}