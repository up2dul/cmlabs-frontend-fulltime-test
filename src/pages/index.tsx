import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';
import api from '@/lib/api';
import Layout from '@/components/organisms/Layout';
import SearchBar from '@/components/molecules/SearchBar';
import Card from '@/components/molecules/Card';

type Meals = Array<{
  idIngredient: string;
  strIngredient: string;
}>;

interface Ingredients {
  meals: Meals;
}

const Home = ({ allIngredients }: { allIngredients: Meals }) => (
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

    <section className='my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {allIngredients.map(({ idIngredient, strIngredient }) => (
        <Card
          key={idIngredient}
          href={`/ingredient/${strIngredient}`}
          imgSrc={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`}
          name={strIngredient}
        />
      ))}
    </section>
  </Layout>
);

export async function getStaticProps() {
  const res = await api.getIngredients<Ingredients>();

  return {
    props: {
      allIngredients: [...res.data.meals].slice(0, 12),
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default Home;
