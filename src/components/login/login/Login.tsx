'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState, useEffect } from 'react';
import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
import { ErrMsg } from './err-msg/ErrMsg';
import { createUser, loginAcces } from '@/connection/conn';
import { FormLogin } from './form-login/FormLogin';
import { WelcomeLogin } from './welcome-login/WelcomeLogin';
import { Spinner } from '@/utils/spinner/Spinner';
import { msgInitServer } from '@/data/consts';
import styles from '@/components/login/login/Login.module.css';
import ContextMaster from '@/context/ContextProvider';

type Props = {
  e: React.FormEvent<HTMLFormElement>,
}

export const Login = () => {
  const { 
    showCreateAcc, endIntercation, loading, waitingServer,
    setWaitingServer, errMsg, setErrMsg, setLoading,
    setShowCreateAcc
  } = useContext(ContextMaster);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  useEffect(() => { setTimeout(() => setWaitingServer(false), 8000) }, []);
  const handleSubmit = async ({ e }: Props): Promise<void> => {
    e.preventDefault();
    setErrMsg(null);
    setLoading(true);
    try{
      if(showCreateAcc){
        await createUser({email, password});
        setShowCreateAcc(false);
        return;
      }
      await loginAcces({email, password});
      router.replace('/');
      return;
    } 
    catch(e){ e instanceof Error && setErrMsg(e.message); } 
    finally{ setLoading(false); }
  };

  return(
    <section className={styles.loginSection}>
      {endIntercation ? 
        <div className={styles.loginCentralizedBlock}>
          {!loading && <>
            <ButtonBlock />
            <div className={styles.loginTitle}>
              <h1>{showCreateAcc ? 'Nova Conta' : 'Login'}</h1>
            </div>
            <FormLogin 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              loading={loading}
              handleSubmit={(e) => handleSubmit({ e })}
              showCreateAcc={showCreateAcc} 
            />
          </>}
          {errMsg && <ErrMsg errMsg={errMsg}/>}
          {loading && !errMsg &&
            <div className={styles.wrapMsgAndSpinner}>
              <p>Aguarde um momento enquanto o processo é finalizado</p>
              <Spinner/>  
            </div>}
        </div> 
        : <>
        {waitingServer ? 
          <div className={styles.wrapMsgAndSpinner}>
            <p>{msgInitServer}</p>
            <Spinner/>
          </div> 
          : <WelcomeLogin/>
        }</>
      }
    </section>
  );
};