import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit';
  className?: string;
}>;

const Button = ({ type = 'button', className, children }: ButtonProps) => (
  <button
    type={type}
    className={cn(
      'h-10 w-16 rounded-xl text-mine-900',
      'bg-cream-200 transition-colors hover:bg-cream-400',
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
