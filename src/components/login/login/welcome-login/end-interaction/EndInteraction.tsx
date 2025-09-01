import { useEffect, useContext } from "react";
import { ContextMaster } from "@/context/ContextProvider";
import styles from '../WelcomeLogin.module.css';
import { msgEndInteraction } from '@/data/consts';
import { Spinner } from "@/utils/spinner/Spinner";

export const EndInteraction = () => {
  const { setEndPreview } = useContext(ContextMaster);
  useEffect(()=> { setTimeout(()=>setEndPreview(true), 8000) }, []);
  return (
    <div className={`${styles.wrapMsgReady}`}>
      <p>{msgEndInteraction}</p> 
      <Spinner login={false}/>
    </div>
  );
}