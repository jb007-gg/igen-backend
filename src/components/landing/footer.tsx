'use client';

import Link from 'next/link';
import { IGenLogo } from '../icons';
import { Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-foreground py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 flex flex-col items-start space-y-4">
          <h3 className="text-xl font-bold">iGen Technology</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Trao quyền cho các doanh nghiệp Việt Nam với giải pháp Marketing AI tiên tiến, giúp tối ưu hóa quy trình và đạt được kết quả vượt trội.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Dịch vụ</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Marketing AI</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Khóa học AI</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Tư vấn chiến lược</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Hỗ trợ kỹ thuật</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Công ty</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Giới thiệu</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Blog</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Tuyển dụng</Link></li>
            <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Liên hệ</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} iGen Technology. Bảo lưu mọi quyền.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Điều khoản dịch vụ</Link>
        </div>
      </div>
    </footer>
  );
}
