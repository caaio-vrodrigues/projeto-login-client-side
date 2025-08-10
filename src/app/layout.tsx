// next
import type { Metadata } from 'next';
// styles
import '@/styles/styles.css';
// context
import { ContextMasterProvider } from '@/context/ContextProvider';

export const metadata: Metadata = {
  title: 'Formulário com React e Springboot',
  description: 'Criação de formulário utilizando ferramentas dos ecossistemas React e Java',
};

export default function RootLayout({ 
  children }: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body suppressHydrationWarning={true}>
        <ContextMasterProvider>
          {children}
        </ContextMasterProvider>
      </body>
    </html>
  );
}
