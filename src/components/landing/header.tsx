import Link from 'next/link';
import { IGenLogo } from '../icons';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <IGenLogo className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold text-foreground">iGen Technology</span>
      </Link>
    </header>
  );
}
