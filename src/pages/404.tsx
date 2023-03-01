import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/components/organisms/Layout';
import Highlight from '@/components/atoms/Highlight';

const metaTitle = 'Page not found | GetMeal';

const NotFound = () => (
  <Layout>
    <Head>
      <title>{metaTitle}</title>
      <meta name='title' content={metaTitle} />
    </Head>

    <section className='mt-24 text-center'>
      <h1>🍽 🍽</h1>
      <h1 className='mt-5 mb-10 text-4xl'>
        <Highlight>404</Highlight> - Page not found.
      </h1>

      <Link href='/' className='text-link'>
        Back to home
      </Link>
    </section>
  </Layout>
);

export default NotFound;
