import { type AppType } from 'next/app';
import { Inter } from '@next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <style jsx global>
      {`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
