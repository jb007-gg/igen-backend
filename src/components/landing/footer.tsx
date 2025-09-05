import Link from 'next/link';
import { IGenLogo } from '../icons';
import { Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
            <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                <IGenLogo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-white">iGen Technology</span>
            </Link>
            <p className="text-sm">Kiến tạo Cỗ máy Marketing Hoàn chỉnh.</p>
        </div>
        <div className="space-y-4">
            <h4 className="font-semibold text-white">Thông tin liên hệ</h4>
            <ul className="space-y-2 text-sm">
                <li>Địa chỉ: 123 Tech Avenue, Innovation City</li>
                <li>Email: contact@igen.tech</li>
                <li>Số điện thoại: (123) 456-7890</li>
            </ul>
        </div>
        <div className="space-y-4">
            <h4 className="font-semibold text-white">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" prefetch={false}>
                    <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn" prefetch={false}>
                    <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} iGen Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
