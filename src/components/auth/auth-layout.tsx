import type { ReactNode } from 'react';
import Link from 'next/link';
import { IGenLogo } from '../icons';
import { cn } from '@/lib/utils';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background p-4">
       <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-foreground" prefetch={false}>
          <IGenLogo className="h-6 w-6 text-[#00d3f3]" />
          <span className="font-semibold text-[#00d3f3]">iGen Technology</span>
        </Link>
      </div>
      <div className="w-full max-w-md">
        {children}
      </div>
    </main>
  );
}
