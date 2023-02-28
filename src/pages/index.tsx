import { type NextPage } from 'next';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';
import Layout from '@/components/organisms/Layout';
import SearchBar from '@/components/molecules/SearchBar';

const Home: NextPage = () => (
  <Layout>
    <div
      className={cn(
        'border-b-2 border-dashed border-mine-500 sm:border-x-2',
        'px-3 py-16 sm:rounded-b-3xl',
      )}
    >
      <h1 className='mb-3 text-center text-xl'>🍱 🍜 🥪</h1>
      <h1
        className={cn(
          'text-center text-2xl sm:text-3xl',
          'leading-relaxed decoration-cream-200 decoration-wavy',
          'underline underline-offset-2 md:underline-offset-4 lg:underline-offset-8',
        )}
      >
        <Balancer>
          Get your <span className='text-cream-200'>delicious</span> meal{' '}
          <span className='text-cream-200'>recipes</span> here!
        </Balancer>
      </h1>
    </div>

    <section className='mt-10'>
      <SearchBar />
    </section>
  </Layout>
);

export default Home;
