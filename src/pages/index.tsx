import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

import api from '@/lib/api';
import { cn } from '@/lib/utils';
import { type IngredientProps } from '@/lib/types';
import Layout from '@/components/organisms/Layout';
import SearchBar from '@/components/molecules/SearchBar';
import Card from '@/components/molecules/Card';

type HomeProps = {
  allIngredients: IngredientProps[];
};

const Home = ({ allIngredients }: HomeProps) => {
  const [ingredients, setIngredients] =
    useState<IngredientProps[]>(allIngredients);
  const ingLength = ingredients.length;

  const handleSearch = (query: string) => {
    setIngredients(
      allIngredients.filter((ing) => {
        return ing.strIngredient.toLowerCase().includes(query?.toLowerCase());
      }),
    );
  };

  return (
    <Layout>
      <section
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
      </section>

      <section className='mt-10'>
        <SearchBar onSubmit={(query) => handleSearch(query as string)} />
      </section>

      <p className='mt-10'>
        {ingLength > 1
          ? `Showed ${ingLength} ingredients.`
          : ingLength === 1
          ? `Showed ${ingLength} ingredient.`
          : 'No ingredient found.'}
      </p>

      <section
        className={cn(
          'mt-5 mb-10 grid gap-4',
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        )}
      >
        {ingredients.map(({ idIngredient, strIngredient, slug }) => (
          <Card
            key={idIngredient}
            href={`ingredient/${slug}`}
            imgSrc={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`}
            name={strIngredient}
          />
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await api.getIngredients();
  const allIngredients = [...res.data.meals].slice(0, 16).map((ingredient) => ({
    ...ingredient,
    slug: ingredient.strIngredient.toLowerCase().replace(/ /g, '-'),
  }));

  return {
    props: {
      allIngredients,
    },
    revalidate: 10,
  };
}

export default Home;
