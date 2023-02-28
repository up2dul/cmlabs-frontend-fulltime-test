import { type NextPage } from 'next';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';
import Layout from '@/components/organisms/Layout';

const Home: NextPage = () => (
  <Layout>
    <h1 className='mb-3 text-center text-xl'>🍱 🍜 🥪</h1>
    <h1
      className={cn(
        'text-center text-3xl',
        'leading-relaxed underline decoration-cream-200 decoration-wavy underline-offset-8',
      )}
    >
      <Balancer>
        Get your <span className='text-cream-200'>delicious</span> meal{' '}
        <span className='text-cream-200'>recipes</span> here!
      </Balancer>
    </h1>
  </Layout>
);

export default Home;
