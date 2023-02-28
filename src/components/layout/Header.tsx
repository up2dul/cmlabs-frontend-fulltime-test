import Link from 'next/link';

import { cn } from '@/lib/utils';

const Header = () => (
  <header
    className={cn(
      'fixed top-0 z-10',
      'w-full border-b-2 border-mine-800 px-5 py-4',
      'text-center backdrop-blur-sm',
    )}
  >
    <h1 className='text-2xl'>
      <Link href='/'>🍽 GetMeal</Link>
    </h1>
  </header>
);

export default Header;