import type { Metadata } from 'next';

import '@/styles/styles.css';
import { ContextMasterProvider } from '@/context/ContextProvider';
import { ServerWarmup } from '@/components/server/ServerWarmup';

export const metadata: Metadata = {
  title: 'Login Project',
  description: 'Criação de um sistema de login completo.',
};

export default function RootLayout({ 
  children }: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body suppressHydrationWarning={true}>
        <ContextMasterProvider>
          <ServerWarmup/>
          {children}
        </ContextMasterProvider>
      </body>
    </html>
  );
}
