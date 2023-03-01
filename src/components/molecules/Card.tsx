import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type CardProps = {
  href: string;
  imgSrc: string;
  name: string;
};

const Card = ({ href, imgSrc, name }: CardProps) => (
  <Link href={href} title={name} className='block'>
    <article
      className={cn(
        'rounded-2xl p-4',
        'bg-cream-200 transition-colors hover:bg-cream-400',
      )}
    >
      <Image
        src={imgSrc}
        alt={`${name} image`}
        width={140}
        height={140}
        className='mx-auto rounded-2xl'
      />
      <h1 className='mt-2 text-center text-xl text-mine-900 sm:truncate'>
        {name}
      </h1>
    </article>
  </Link>
);

export default Card;
