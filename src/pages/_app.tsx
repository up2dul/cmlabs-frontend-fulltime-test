import { type AppType } from 'next/app';
import { Poppins } from '@next/font/google';

import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <style jsx global>
      {`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
