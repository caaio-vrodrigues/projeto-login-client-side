'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, TOKEN_TIMER, logout } from '@/server/connection/conn';

type Props = { 
  children: React.ReactNode 
};

export function Protected({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();

    const sessionInit = Number(localStorage.getItem(TOKEN_TIMER));
    const sessionExpired = (Date.now() - sessionInit) >= 60_000 * 60;
    sessionExpired && logout();
    
    if(!token){
      router.replace('/login');
      return;
    }

    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if(e.key === 'auth_token' && e.newValue === null) 
        router.replace('/login');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [router]);
  
  if(!ready) return null;
  return <>{children}</>;
}