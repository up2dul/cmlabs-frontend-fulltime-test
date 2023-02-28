import { cn } from '@/lib/utils';

const Highlight = ({ children }: { children: string }) => (
  <span
    className={cn(
      'text-cream-200 underline decoration-cream-200 decoration-wavy',
      'underline-offset-4 lg:underline-offset-8',
    )}
  >
    {children}
  </span>
);

export default Highlight;
