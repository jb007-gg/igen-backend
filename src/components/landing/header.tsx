'use client';

import Link from 'next/link';
import { IGenLogo } from '../icons';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
    { href: '#about', label: 'Giới thiệu' },
    { href: '#services', label: 'Dịch vụ' },
    { href: '#courses', label: 'Khóa học' },
    { href: '#testimonials', label: 'Nhận xét' },
    { href: '#contact', label: 'Liên hệ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const headerClasses = cn(
    "px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
    scrolled ? "bg-white shadow-sm" : "bg-transparent"
  );

  const linkClasses = (isMobile = false) => cn(
    "font-bold hover:underline underline-offset-4",
    isMobile ? "text-black text-lg" : `text-sm ${scrolled ? "text-black" : "text-white"}`
  );

  return (
    <header className={headerClasses}>
      <Link href="/" className="flex items-center justify-center mr-auto" prefetch={false}>
        <IGenLogo className={cn("h-6 w-6", scrolled ? "text-primary" : "text-white")} />
        <span className={cn(
            "ml-2 text-xl font-bold",
            scrolled ? "text-primary" : "text-white"
        )}>
            iGen Technology
        </span>
      </Link>
      <nav className="hidden lg:flex gap-4 sm:gap-6 items-center">
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={linkClasses()}
                prefetch={false}
            >
                {link.label}
            </Link>
        ))}
        <Button variant="outline" asChild className={cn("border-primary text-primary hover:bg-[#00FFFF] hover:text-white bg-transparent", scrolled ? 'text-primary border-primary' : 'text-white border-white')}>
            <Link href="/dang-nhap">Đăng nhập</Link>
        </Button>
      </nav>
      <div className="lg:hidden ml-auto">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn(scrolled ? "text-black" : "text-white", "hover:bg-white/20")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
                <Link href="#" className="flex items-center" prefetch={false} onClick={() => setMobileMenuOpen(false)}>
                    <IGenLogo className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-xl font-bold text-primary">iGen Technology</span>
                </Link>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={linkClasses(true)}
                            prefetch={false}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-col gap-2">
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-[#00FFFF] hover:text-white bg-transparent">
                        <Link href="/dang-nhap">Đăng nhập</Link>
                    </Button>
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
