import Head from 'next/head';
import { type PropsWithChildren as LayoutProps } from 'react';

import { cn } from '@/lib/utils';
import Header from './Header';

const metaTitle = 'GetMeal - Get your delicious meal recipes here!';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>{metaTitle}</title>
      <meta name='title' content={metaTitle} />
      <meta
        name='description'
        content='GetMeal is your go-to destination for mouth-watering meal recipes sourced from the themealdb API'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />

    <main
      className={cn(
        'mx-auto mt-[66px] mb-10',
        'px-5 xs:px-12 sm:px-20 md:px-32 lg:px-40 xl:px-56',
      )}
    >
      {children}
    </main>
  </>
);

export default Layout;
