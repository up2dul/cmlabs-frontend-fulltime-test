import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import api from '@/lib/api';
import { type MealDetail } from '@/lib/types';
import Highlight from '@/components/atoms/Highlight';
import Layout from '@/components/organisms/Layout';
import Hero from '@/components/atoms/Hero';

const Meal = ({ meal }: { meal: MealDetail }) => {
  const ingredientWithMeasure = () => {
    const ingredients = Object.entries(meal)
      .filter((ing) => ing[0].includes('strIngredient'))
      .map((ing) => ing[1])
      .filter((ing) => ing !== '');

    const measures = Object.entries(meal)
      .filter((measure) => measure[0].includes('strMeasure'))
      .map((measure) => measure[1])
      .filter((measure) => measure !== '');

    return ingredients.map((ingredient, idx) => ({
      name: ingredient,
      measure: measures[idx],
    }));
  };

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
          {ingredientWithMeasure().map(({ measure, name }) => (
            <li key={name}>
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

export async function getStaticPaths() {
  const allMeals = await api.getAllMeals();

  const paths = allMeals.map(({ idMeal }) => ({
    params: { id: idMeal },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const meal = await api.getMeal(params.id);

  return {
    props: {
      meal,
    },
  };
}

export default Meal;
