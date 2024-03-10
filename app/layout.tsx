import Header from './components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { createClient } from './utils/supabase/server';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data: userAuth } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="use-credentials"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body className="page-container">
        <Header user={userAuth.user} />
        {children}
      </body>
    </html>
  );
}
