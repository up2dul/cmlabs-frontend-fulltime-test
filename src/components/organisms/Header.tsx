import Link from 'next/link';

import { cn } from '@/lib/utils';

const Header = () => (
  <header
    className={cn(
      'fixed top-0 z-10',
      'w-full border-b-2 border-cream-400 px-5 py-4',
      'bg-mine-900/10 backdrop-blur-md',
    )}
  >
    <h1 className='text-center text-2xl text-cream-300'>
      <Link href='/'>🍽 GetMeal</Link>
    </h1>
  </header>
);

export default Header;
