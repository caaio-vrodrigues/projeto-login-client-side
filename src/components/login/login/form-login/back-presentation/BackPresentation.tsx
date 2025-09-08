import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons';
import { ContextMaster } from '@/context/ContextProvider';
import { useContext } from 'react';
import styles from '../FormLogin.module.css';

export const BackPresentation = () => {
  const { setEndPreview, setCurrentPage } = useContext(ContextMaster);

  return(
    <div className={styles.presentation}>
      <span>Apresentação</span>
      <FontAwesomeIcon 
          icon={faPersonWalkingArrowLoopLeft}
          className={styles.buttonNextPage}
          onClick={()=>{
            setEndPreview(false);
            setCurrentPage(0);
          }}
        />
    </div>
  );
}
  