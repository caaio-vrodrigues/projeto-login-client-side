'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getToken } from '@/connection/auth';

type Props = { 
  children: React.ReactNode 
};

export function Protected({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();
    if(!token){
      router.replace('/login');
      return;
    }

    setReady(true);

    const onStorage = (e: StorageEvent) => {
      if(e.key === 'auth_token' && e.newValue === null){
        router.replace('/login');
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [router]);
  
  if(!ready) return null;
  return <>{children}</>;
}