import ContextMaster from "@/context/ContextProvider";
import { useContext, useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './WelcomePage.module.css';
import Link from "next/link";

type Props = {
  strs: {
    id: number,
    str: string,
  }[],
};

export const WelcomePage = ({ strs }: Props) => {
  const { currentPage, setCurrentPage  } = useContext(ContextMaster);
  const [showNext, setShowNext] = useState(false);
  console.log(currentPage);
  let time = currentPage == 0 ? 3000 : 8000;
  const buttonNextPage = () => 
    <FontAwesomeIcon 
      icon={faArrowRight}
      className={styles.buttonNextPage}
      onClick={()=>setCurrentPage(currentPage + 1)}
    />

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNext(true);
    }, time);
    return () => clearTimeout(timer);
  }, []);
  
  return <>
    <div className={styles.wrapParagraphs}>
      <div className={styles.paragraphBlock}>
        {strs.map(p => {
          if(p.id == 100){
            return <div  key={p.id} className={`${styles.wrapLink}`}>
              <Link href={p.str} target='_blank'>
                {"certificado-caio-oracle-java-se8"}
              </Link>
            </div>
          } 
          return <p key={p.id}>{p.str}</p>;
        })}
      </div>
      <div className={styles.buttonBlock}>
        {showNext && buttonNextPage()}
      </div>
    </div> 
  </>
}
  

  