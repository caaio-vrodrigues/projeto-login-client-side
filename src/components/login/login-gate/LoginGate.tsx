'use client';
// react
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/navigation';
// connection
import { getToken } from '@/connection/auth';

type Props = { children: React.ReactNode };

export function LoginGate({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = getToken();
    if (t) {
      router.replace('/');
      return;
    }
    setReady(true);
  }, [router]);
  if (!ready) return null;
  return <>{children}</>;
}