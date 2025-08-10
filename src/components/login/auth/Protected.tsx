'use client';
// react
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/navigation';
// connection
import { getToken } from '@/connection/auth';

type Props = { children: React.ReactNode };

export function Protected({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = getToken();
    if (!t) {
      router.replace('/login');
      return;
    }
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'auth_token' && e.newValue === null) {
        router.replace('/login');
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [router]);
  if (!ready) return null;
  return <>{children}</>;
}