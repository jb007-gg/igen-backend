import Link from 'next/link';
import { IGenLogo } from '../icons';

const navLinks = [
    { href: '#about', label: 'Giới thiệu' },
    { href: '#services', label: 'Dịch vụ' },
    { href: '#courses', label: 'Khóa học' },
    { href: '#testimonials', label: 'Nhận xét' },
    { href: '#contact', label: 'Liên hệ' },
];

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link href="#" className="flex items-center justify-center mr-auto" prefetch={false}>
        <IGenLogo className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold text-primary">iGen Technology</span>
      </Link>
      <nav className="hidden lg:flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold hover:underline underline-offset-4"
                prefetch={false}
            >
                {link.label}
            </Link>
        ))}
      </nav>
    </header>
  );
}
