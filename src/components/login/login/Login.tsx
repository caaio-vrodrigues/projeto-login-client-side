'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState, useEffect } from 'react';

import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
import { ErrMsg } from './err-msg/ErrMsg';

import styles from '@/components/login/login/Login.module.css';
import ContextMaster from '@/context/ContextProvider';

import { createUser, loginAcces } from '@/connection/conn';
import { FormLogin } from './form-login/FormLogin';
import { WelcomeLogin } from './welcome-login/WelcomeLogin';
import { Spinner } from '@/utils/spinner/Spinner';

type Props = {
  e: React.FormEvent<HTMLFormElement>,
}

export const Login = () => {
  const { 
    showCreateAcc, setShowCreateAcc, initServer, endIntercation, loading,
    setLoading, waitingServer, setWaitingServer,
  } = useContext(ContextMaster);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState<string | null>(null);
  
  const router = useRouter();

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
    catch(err: unknown){
      const msg = err instanceof Error && 
        err.message ? err.message : 'Falha no login. Tente novamente.';
      setErrMsg(msg);
    } 
    finally{ setLoading(false); }
  };

  useEffect(() => {
    setTimeout(() => {
      setWaitingServer(false);
    },8000);
  }, []);

  return <>
    <section className={styles.loginSection}>
      {endIntercation ? 
        <div className={styles.loginCentralizedBlock}>
          {initServer ? 
            <> 
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
            </> 
            : 
            <div className={styles.wrapMsgAndSpinner}>
              <p>Finalizando processo...</p>
              <Spinner/>
            </div>
          }
          {initServer && <ErrMsg errMsg={errMsg} loading={loading}/>}
        </div> 
        : 
        <>
          {waitingServer ? 
            <div className={styles.wrapMsgAndSpinner}>
              <p>Aguarde 10 segundos para a ativação do servidor em estado de hibernação</p>
              <Spinner/>
            </div>
            : 
            <WelcomeLogin/>
          }
        </>
      }
    </section>
  </>
};