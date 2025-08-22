'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';
import { ErrMsg } from './err-msg/ErrMsg';

import styles from '@/components/login/login/Login.module.css';
import ContextMaster from '@/context/ContextProvider';

import { startServer, createUser, loginAcces } from '@/connection/auth';
import { FormLogin } from './form-login/FormLogin';

type Props = {
  e: React.FormEvent<HTMLFormElement>,
}

export const Login = () => {
  const { 
    showCreateAcc, setShowCreateAcc, initServer, setInitServer,
    initDb, setInitDb, 
  } = useContext(ContextMaster);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
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
      const msg = err instanceof Error && err.message ? err.message
                                          : 'Falha no login. Tente novamente.';
      setErrMsg(msg);
    } 
    finally{ setLoading(false); }
  };

  return <>
    <section className={styles.loginSection}>
      <div className={styles.loginCentralizedBlock}>
        {initServer ? initDb ? <> 
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
            
          </> : <>
            <div>
              <p>Agora ative o banco de dados clicando no botão, o processo levará mais 10 segundos. Após isso você poderá criar uma nova conta com e-mail e senha para logar no sistema.</p>
            </div>
            <button onClick={()=>{
              setLoading(true);
              setTimeout(()=> { 
                setLoading(false);
                setInitDb(true); 
              }, 13000)}
            }>Servidor</button>
          </>
          
          : <>
            <div>
              <p>Essa aplicação encontra-se em estado de hibernação.</p>
              <p>Clique no botão abaixo para acionar o servidor, o processo levará 10 segundos.</p>
            </div>
            <button onClick={()=>startServer({ setInitServer, setLoading })}>Servidor</button>
          </>
        }
        <ErrMsg errMsg={errMsg} loading={loading}/>
      </div>
    </section>
  </>
};