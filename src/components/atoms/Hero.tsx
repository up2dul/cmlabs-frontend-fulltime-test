import { cn } from '@/lib/utils';
import { type PropsWithChildren as HeroProps } from 'react';

const Hero = ({ children }: HeroProps) => (
  <section
    className={cn(
      'border-b-2 border-dashed border-mine-500 sm:rounded-b-3xl sm:border-x-2',
      'px-3 py-16 text-center',
    )}
  >
    {children}
  </section>
);

export default Hero;
