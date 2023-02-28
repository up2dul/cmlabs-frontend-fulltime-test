import { type PropsWithChildren as LayoutProps } from 'react';
import Head from 'next/head';

import { cn } from '@/lib/utils';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>🍽 GetMeal</title>
      <meta name='description' content='GetMeal apps' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />

    <main
      className={cn(
        'mx-auto mt-[66px]',
        'px-8 pt-10 xs:px-12 sm:px-20 md:px-32 lg:px-40 xl:px-56',
      )}
    >
      {children}
    </main>
  </>
);

export default Layout;
