import { type GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import api from '@/lib/api';
import { mergeIngredientsMeasures } from '@/lib/utils';
import { type MealDetail } from '@/lib/types';
import Highlight from '@/components/atoms/Highlight';
import Layout from '@/components/organisms/Layout';
import Hero from '@/components/atoms/Hero';

const Meal = ({ meal }: { meal: MealDetail }) => {
  const ingredientWithMeasure = mergeIngredientsMeasures(meal);

  return (
    <Layout>
      <Hero>
        <h1 className='mb-3 text-xl'>🥞 🍛 🍕</h1>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={240}
          height={240}
          className='mx-auto my-4 rounded-2xl'
        />
        <h1 className='text-2xl leading-relaxed sm:text-3xl'>
          <Balancer>
            <Highlight>{meal.strMeal}</Highlight>
          </Balancer>
        </h1>
      </Hero>

      <section className='mt-10'>
        <h1 className='mb-3 text-2xl'>Ingredients</h1>
        <ul className='list-disc'>
          {ingredientWithMeasure.map(({ key, measure, name }) => (
            <li key={key}>
              {measure} {name}
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-10'>
        <h1 className='mb-3 text-2xl'>Instructions</h1>
        <p>{meal.strInstructions}</p>
      </section>

      <section className='mt-10'>
        <h1 className='mb-3 text-2xl'>Tutorial</h1>
        <a
          href={meal.strYoutube}
          className='text-link'
          target='_blank'
          rel='noreferrer'
        >
          {meal.strYoutube}
        </a>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const mealId = ctx.params?.id as string;
  const meal = await api.getMeal(mealId);

  return {
    props: {
      meal,
    },
  };
}

export default Meal;
