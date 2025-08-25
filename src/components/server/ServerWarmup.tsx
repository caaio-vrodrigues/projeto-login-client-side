'use client';
import { useContext, useEffect, useRef } from 'react';
import ContextMaster from '@/context/ContextProvider';
import { startServer } from '@/connection/conn';

const SESSION_KEY = 'serverWarmed';

export const ServerWarmup = () => {
  const { setInitServer } = useContext(ContextMaster);
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    const alreadyWarmed = typeof window !== 'undefined' 
      ? sessionStorage.getItem(SESSION_KEY) === '1' : false;

    const warmup = () => {
      if(!alreadyWarmed) startServer({setInitServer});
      if(!alreadyWarmed) sessionStorage.setItem(SESSION_KEY, '1');
    };
    warmup();
  }, [setInitServer]);

  return null;
}