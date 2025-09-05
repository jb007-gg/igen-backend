'use client';

import Link from 'next/link';
import { IGenLogo } from '../icons';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '#about', label: 'Giới thiệu' },
    { href: '#services', label: 'Dịch vụ' },
    { href: '#courses', label: 'Khóa học' },
    { href: '#testimonials', label: 'Nhận xét' },
    { href: '#contact', label: 'Liên hệ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
        "px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
    )}>
      <Link href="#" className="flex items-center justify-center mr-auto" prefetch={false}>
        <IGenLogo className={cn("h-6 w-6 text-primary")} />
        <span className={cn(
            "ml-2 text-xl font-bold text-primary"
        )}>
            iGen Technology
        </span>
      </Link>
      <nav className="hidden lg:flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-sm font-bold hover:underline underline-offset-4",
                    scrolled ? "text-black" : "text-white"
                )}
                prefetch={false}
            >
                {link.label}
            </Link>
        ))}
      </nav>
    </header>
  );
}
