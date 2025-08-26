'use client';
import { useEffect } from 'react';
import { startServer } from '@/connection/conn';

export const ServerWarmup = () => {
  const SESSION_KEY = 'serverWarmed';
  
  useEffect(() => {
    const alreadyWarmed = typeof window !== 'undefined' 
      ? sessionStorage.getItem(SESSION_KEY) === '1' : false;
   
    if(!alreadyWarmed){
      startServer();
      if(!alreadyWarmed) sessionStorage.setItem(SESSION_KEY, '1');
    } 
  }, []);

  return null;
}