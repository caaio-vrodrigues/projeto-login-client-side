'use client';

// react
import { useContext, useState } from 'react';

// components
import { ButtonBlock } from '@/components/login/button-block/ButtonBlock';

// styles
import styles from '@/components/login/login/Login.module.css';

// context
import ContextMaster from '@/context/ContextProvider';

export const Login = () => {
  const { showCreateAcc } = useContext(ContextMaster);
  const [ email, setEmail ] = useState("");
  const [ passWord, setPassWord ] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(email, passWord);
  }

  return <>
    <section className={styles.loginSection}>
      <div className={styles.loginCentralizedBlock}>
        <ButtonBlock/>
        <div className={styles.loginTitle}>
          <h1>{showCreateAcc ? "Nova Conta" : "Login"}</h1>
        </div>
        <form className={styles.formLogin} onSubmit={()=>handleSubmit}>
          <div className={`${styles.wrapInput} ${styles.wrapInputEmail}`}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.wrapInput} ${styles.wrapInputPassword}`}>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              autoComplete="current-password"
              required
              value={passWord}
              onChange={(e)=>setPassWord(e.target.value)}
              className={styles.passwordInput}
            />
            <button type='submit' className={styles.submitBtn}>
              {showCreateAcc ? "enviar" : "entrar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
}