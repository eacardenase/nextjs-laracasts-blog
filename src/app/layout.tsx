import type { Metadata } from 'next';

import './globals.css';

import Nav from '@/app/components/Nav';
import Header from '@/app/components/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <section className='px-6 py-8'>
          <Nav />
          <Header />
          {children}
        </section>
      </body>
    </html>
  );
}
