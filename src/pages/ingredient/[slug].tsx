import { useState } from 'react';

import api from '@/lib/api';
import { cn, slugToNormal, textToSlug } from '@/lib/utils';
import { type Meal } from '@/lib/types';
import Layout from '@/components/organisms/Layout';
import SearchBar from '@/components/molecules/SearchBar';
import Card from '@/components/molecules/Card';

const Ingredient = ({
  ingredient,
  name,
}: {
  ingredient: Meal[];
  name: string;
}) => {
  const [meals, setMeals] = useState<Meal[]>(ingredient);
  const mealsLength = meals.length;

  const handleSearch = (query: string) => {
    setMeals(
      ingredient.filter(({ strMeal }) => {
        return strMeal.toLowerCase().includes(query?.toLowerCase());
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
        <h1 className='mb-3 text-xl'>🥧 🍜 🥪</h1>
        <h1 className='text-2xl leading-relaxed sm:text-3xl'>{name}</h1>
      </section>

      <section className='mt-10'>
        <SearchBar
          placeholder='Search meals . . .'
          onSubmit={(query) => handleSearch(query as string)}
        />
        <p className='mt-5'>
          {mealsLength > 1
            ? `Showed ${mealsLength} meals.`
            : mealsLength === 1
            ? `Showed ${mealsLength} meal.`
            : 'No meal found.'}
        </p>
      </section>

      <section
        className={cn(
          'mt-10 mb-10 grid gap-4',
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        )}
      >
        {meals.map(({ idMeal, strMealThumb, strMeal }) => (
          <Card
            key={idMeal}
            href={`meal/${idMeal}`}
            imgSrc={strMealThumb}
            name={strMeal}
          />
        ))}
      </section>
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await api.getAllIngredients();
  const allIngredients = res.data.meals;

  // Get the paths we want to pre-render based on posts
  const paths = allIngredients.map(({ strIngredient }) => ({
    params: { slug: textToSlug(strIngredient) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  // params contains the ingredient `slug`.
  // If the route is like /ingredient/chicken, then params.slug is chicken
  const ingredientName = slugToNormal(params.slug);
  const res = await api.getIngredient(ingredientName);
  const ingredient = res.data.meals;

  // Pass ingredient data to the page via props
  return {
    props: {
      ingredient,
      name: ingredientName,
    },
  };
}

export default Ingredient;
