'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState, useEffect } from 'react';
import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
import { ErrMsg } from './err-msg/ErrMsg';
import { createUser, loginAcces } from '@/server/connection/conn';
import { FormLogin } from './form-login/FormLogin';
import { WelcomeLogin } from './welcome-login/WelcomeLogin';
import { Spinner } from '@/utils/spinner/Spinner';
import { msgWaitBlock, waitServerBlock } from './LoginBlocks';
import { ContextMaster } from '@/context/ContextProvider';
import { SuccessAssign } from './success-assign/SuccessAssign';
import { TopSec } from '../top-sec/TopSec';
import { BottomSec } from '../bottom-sec/BottomSec';
import styles from '@/components/login/login/Login.module.css';

type Props = {
  e: React.FormEvent<HTMLFormElement>,
}

export const Login = () => {
  const { 
    showCreateAcc, endPreview, loading, waitingServer, setWaitingServer, 
    errMsg, setErrMsg, setLoading, setShowCreateAcc, succesAssign, 
    setSuccessAssign
  } = useContext(ContextMaster);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  useEffect(() => {setTimeout(()=>setWaitingServer(false), 8000)}, []);

  const handleSubmit = async ({ e }: Props): Promise<void> => {
    e.preventDefault();
    setErrMsg(null);
    setLoading(true);
    try{
      if(showCreateAcc){
        await createUser({
          body: {email, password},
          setShowModal: setSuccessAssign,
        });
        setShowCreateAcc(false);
        return;
      }
      await loginAcces({email, password});
      router.replace('/');
      return;
    } 
    catch(e){
      e instanceof Error && setErrMsg(e.message);
    } 
    finally{
     setLoading(false);
    }
  };

  const formProps = { 
    email, setEmail, password, setPassword, loading, showCreateAcc 
  };

  return(
    <div className={styles.loginContainer}>
      <TopSec/>
      {endPreview ? 
        <section className={styles.loginCentralizedBlock}>
          {errMsg && <ErrMsg errMsg={errMsg}/>}
          <ButtonBlock />
          {succesAssign && !errMsg && <SuccessAssign/>}
          {!loading && 
            <FormLogin 
              formValues={{...formProps}} 
              handleSubmit={(e) => handleSubmit({ e })}
            />}
          {!errMsg && loading && showCreateAcc && msgWaitBlock()}
          {!errMsg && loading && !showCreateAcc && <Spinner login={true}/>}
        </section> 
      : <>
          {waitingServer ? waitServerBlock() : <WelcomeLogin/>}
        </>}
      <BottomSec/>
    </div>
  );
};