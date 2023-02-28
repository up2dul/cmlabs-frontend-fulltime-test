import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

import api from '@/lib/api';
import { cn, textToSlug } from '@/lib/utils';
import { type Ingredient } from '@/lib/types';
import Layout from '@/components/organisms/Layout';
import Highlight from '@/components/atoms/Highlight';
import SearchBar from '@/components/molecules/SearchBar';
import Card from '@/components/molecules/Card';

interface AllIngredients extends Ingredient {
  slug: string;
}

const Home = ({ allIngredients }: { allIngredients: AllIngredients[] }) => {
  const [ingredients, setIngredients] =
    useState<AllIngredients[]>(allIngredients);
  const ingLength = ingredients.length;

  const handleSearch = (query: string) => {
    setIngredients(
      allIngredients.filter(({ strIngredient }) => {
        return strIngredient.toLowerCase().includes(query?.toLowerCase());
      }),
    );
  };

  return (
    <Layout>
      <section
        className={cn(
          'border-b-2 border-dashed border-mine-500 sm:rounded-b-3xl sm:border-x-2',
          'px-3 py-16 text-center',
        )}
      >
        <h1 className='mb-3 text-xl'>🍗 🥦 🥩</h1>
        <h1 className='text-2xl leading-relaxed sm:text-3xl'>
          <Balancer>
            <Highlight>Get</Highlight> your delicious{' '}
            <Highlight>meal</Highlight> recipes here!
          </Balancer>
        </h1>
      </section>

      <section className='mt-10'>
        <SearchBar
          placeholder='Search ingredients . . .'
          onSubmit={(query) => handleSearch(query as string)}
        />
        <p className='mt-5'>
          {ingLength > 1
            ? `Showed ${ingLength} ingredients.`
            : ingLength === 1
            ? `Showed ${ingLength} ingredient.`
            : 'No ingredient found.'}
        </p>
      </section>

      <section
        className={cn(
          'mt-10 mb-10 grid gap-4',
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
  const res = await api.getAllIngredients();
  const allIngredients = res.data.meals.slice(0, 16).map((ingredient) => ({
    ...ingredient,
    slug: textToSlug(ingredient.strIngredient),
  }));

  return {
    props: {
      allIngredients,
    },
    revalidate: 10,
  };
}

export default Home;
