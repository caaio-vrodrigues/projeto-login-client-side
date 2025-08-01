import type { Metadata } from 'next';
import '@/styles/styles.css';

export const metadata: Metadata = {
  title: 'Formulário com React e Springboot',
  description: 'Criação de formulário utilizando ferramentas dos ecossistemas React e Java',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
