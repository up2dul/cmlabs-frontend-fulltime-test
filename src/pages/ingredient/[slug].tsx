import api from '@/lib/api';
import { cn, slugToNormal, textToSlug } from '@/lib/utils';
import { type Meal } from '@/lib/types';
import useSearch from '@/hooks/use-search';
import Layout from '@/components/organisms/Layout';
import Hero from '@/components/atoms/Hero';
import SearchBar from '@/components/molecules/SearchBar';
import Card from '@/components/molecules/Card';

const Ingredient = ({
  ingredient,
  name,
}: {
  ingredient: Meal[];
  name: string;
}) => {
  const { filteredData: meals, handleSearch } = useSearch<Meal>(
    ingredient,
    'strMeal',
  );
  const mealsLength = meals?.length;

  return (
    <Layout>
      <Hero>
        <h1 className='mb-3 text-xl'>🥧 🍜 🥪</h1>
        <h1 className='text-2xl leading-relaxed sm:text-3xl'>{name}</h1>
      </Hero>

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
          'mt-10 grid gap-4',
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        )}
      >
        {meals.map(({ idMeal, strMealThumb, strMeal }) => (
          <Card
            key={idMeal}
            href={`/meal/${idMeal}`}
            imgSrc={strMealThumb}
            name={strMeal}
          />
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await api.getAllIngredients();
  const allIngredients = res.data.meals.slice(0, 16);

  const paths = allIngredients.map(({ strIngredient }) => ({
    params: { slug: textToSlug(strIngredient) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const ingredientName = slugToNormal(params.slug);
  const res = await api.getIngredient(ingredientName);
  const ingredient = res.data.meals;

  return {
    props: {
      ingredient,
      name: ingredientName,
    },
  };
}

export default Ingredient;
