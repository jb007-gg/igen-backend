'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IGenLogo } from '../icons';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
    { href: '/#about', label: 'Giới thiệu' },
    { href: '/giai-phap', label: 'Giải pháp' },
    { href: '/#services', label: 'Dịch vụ' },
    { href: '/#courses', label: 'Khóa học' },
    { href: '/#testimonials', label: 'Nhận xét' },
    { href: '/#contact', label: 'Liên hệ' },
];

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);
  
  const isTransparent = mounted && isHomePage && !scrolled;

  const headerClasses = cn(
    "px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
    isTransparent ? "bg-transparent" : "bg-white shadow-sm"
  );

  const linkClasses = (isMobile = false) => cn(
    "font-bold hover:underline underline-offset-4",
    isMobile ? "text-black text-lg" : `text-sm ${isTransparent ? "text-white" : "text-black"}`
  );

  const buttonClasses = cn(
    "border-[#00FFFF] hover:bg-[#00FFFF] hover:text-white bg-transparent",
    isTransparent ? 'text-white' : 'text-primary'
  );
  
  const mobileMenuButtonClasses = cn(
    isTransparent ? "text-white" : "text-black",
    "hover:bg-white/20"
  );
  
  if (!mounted) {
    return (
      <header className="px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 bg-transparent lg:bg-white lg:shadow-sm" />
    );
  }

  return (
    <header className={headerClasses}>
      <Link href="/" className="flex items-center justify-center mr-auto" prefetch={false}>
        <IGenLogo className="h-6 w-6 text-[#00FFFF]" />
        <span className="ml-2 text-xl font-bold text-[#00FFFF]">
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
        <Button 
          variant="outline" 
          asChild 
          className={buttonClasses}
        >
            <Link href="/dang-nhap">Đăng nhập</Link>
        </Button>
      </nav>
      <div className="lg:hidden ml-auto">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={mobileMenuButtonClasses}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center" prefetch={false} onClick={() => setMobileMenuOpen(false)}>
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
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
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
