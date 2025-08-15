'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getToken } from '@/connection/auth';

type Props = { children: React.ReactNode };

export function LoginGate({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = getToken();
    console.log(t)
    if (t) {
      router.replace('/');
      return;
    }
    setReady(true);
  }, [router]);
  if (!ready) return null;
  return <>{children}</>;
}