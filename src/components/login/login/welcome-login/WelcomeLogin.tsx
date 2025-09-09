import { useContext, useState } from 'react';
import { WelcomePage } from './welcome-page/WelcomePage';
import { ContextMaster } from '@/context/ContextProvider';
import { allPages } from '@/data/previewData';
import { EndInteraction } from './end-interaction/EndInteraction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';
import styles from './WelcomeLogin.module.css';

export const WelcomeLogin = () => {
  const [skipPresentation, setSkipPresentation] = useState<boolean>(false);
  const { currentPage } = useContext(ContextMaster);
  return <>
    {allPages.map((page, id) => {
      if(currentPage == id){
        return !skipPresentation ? <>
          <button 
            className={styles.buttonSkipPresentation}
            onClick={()=>setSkipPresentation(true)}
          >
            <span>Pular apresentação </span>
            <FontAwesomeIcon icon={faArrowsTurnRight}/>
          </button>
          <WelcomePage key={id} strs={page}/>
        </> 
        : <EndInteraction/>
      }
    })}
    {currentPage == allPages.length && <EndInteraction/>}
  </>
}