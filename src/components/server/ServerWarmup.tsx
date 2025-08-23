'use client';
import { useContext, useEffect, useRef } from 'react';
import ContextMaster from '@/context/ContextProvider';
import { startServer } from '@/connection/conn';

const SESSION_KEY = 'serverWarmed';

export function ServerWarmup() {
  const { setInitServer, setLoading } = useContext(ContextMaster);
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    const alreadyWarmed = typeof window !== 'undefined' 
      ? sessionStorage.getItem(SESSION_KEY) === '1' : false;

    const warmup = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          if(!alreadyWarmed) await startServer({setInitServer, setLoading});
          setInitServer(true);
        },0);
      } catch (e) {
        console.error(e);
      } finally {
        if(!alreadyWarmed) sessionStorage.setItem(SESSION_KEY, '1');
        setLoading(false);
      }
    };
    warmup();
  }, [setInitServer]);

  return null;
}