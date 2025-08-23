import ContextMaster from "@/context/ContextProvider";
import { useContext, useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './WelcomePage.module.css';

type Props = {
  strs: {
    id: number,
    str: string,
  }[],
};

export const WelcomePage = ({ strs }: Props) => {
  const { currentPage, setCurrentPage  } = useContext(ContextMaster);
  const [showNext, setShowNext] = useState(false);

  const buttonNextPage = () => 
    <FontAwesomeIcon 
      icon={faArrowRight}
      className={styles.buttonNextPage}
      onClick={()=>setCurrentPage(currentPage + 1)}
    />

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNext(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return <>
    <div className={styles.wrapParagraphs}>
      <div className={styles.paragraphBlock}>
        {strs.map(p => <p key={p.id}>{p.str}</p>)}
      </div>
      <div className={styles.buttonBlock}>
        {showNext && buttonNextPage()}
      </div>
    </div> 
  </>
  
}
  

  