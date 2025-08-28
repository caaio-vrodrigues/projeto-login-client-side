import type { Metadata } from 'next';

import '@/styles/styles.css';
import { ContextMasterProvider } from '@/context/ContextProvider';
import { ServerWarmup } from '@/server/ServerWarmup';

export const metadata: Metadata = {
  title: 'Login Project',
  description: 'Criação de um sistema de login completo.',
};

type Props = Readonly<{children: React.ReactNode;}>

const RootLayout = ({ children }: Props) => 
  <html lang='pt-BR'>
    <body suppressHydrationWarning={true}>
      <ContextMasterProvider>
        <ServerWarmup/>
        {children}
      </ContextMasterProvider>
    </body>
  </html>

export default RootLayout;
