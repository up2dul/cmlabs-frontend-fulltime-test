import { FiSearch } from 'react-icons/fi';

import { cn } from '@/lib/utils';

const SearchBar = () => (
  <form className={cn('mx-auto flex h-10', 'w-full sm:w-3/4 md:w-2/4')}>
    <input
      type='text'
      className={cn(' w-3/4 rounded-l-xl bg-mine-800 px-4 text-mine-50')}
      placeholder='Search by ingredients...'
      maxLength={34}
      autoComplete='off'
    />
    <button
      type='submit'
      className=' w-1/4 rounded-r-xl bg-cream-200 text-mine-900'
    >
      <FiSearch className='mx-auto stroke-[3px]' />
    </button>
  </form>
);

export default SearchBar;
