import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import api from '@/lib/api';
import { cn } from '@/lib/utils';
import { type MealDetail } from '@/lib/types';
import Highlight from '@/components/atoms/Highlight';
import Layout from '@/components/organisms/Layout';

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
      <section
        className={cn(
          'border-b-2 border-dashed border-mine-500 sm:rounded-b-3xl sm:border-x-2',
          'px-3 py-16 text-center',
        )}
      >
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
      </section>

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

      <section className='my-10'>
        <h1 className='mb-3 text-2xl'>Tutorial</h1>
        <a href={meal.strYoutube} target='_blank' rel='noreferrer'>
          {meal.strYoutube}
        </a>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await api.getAllMeals();
  const allMeals = res.data.meals;

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
