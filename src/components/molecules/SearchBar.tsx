import { type FormEvent, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

import { cn } from '@/lib/utils';
import Button from '@/components/atoms/Button';

const SearchBar = ({
  onSubmit,
}: {
  onSubmit: (inputValue?: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    onSubmit(inputValue);
  };

  return (
    <form
      className={cn('mx-auto flex h-10', 'w-full sm:w-3/4 md:w-2/4')}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        ref={inputRef}
        type='text'
        className={cn(' w-3/4 rounded-l-xl bg-mine-800 px-4 text-mine-50')}
        placeholder='Search ingredients . . .'
        maxLength={34}
        autoComplete='off'
      />
      <Button type='submit' className='w-1/4 rounded-l-none'>
        <FiSearch className='mx-auto stroke-[3px]' />
      </Button>
    </form>
  );
};

export default SearchBar;
