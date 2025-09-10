import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackToTop } from '@/components/ui/back-to-top';
import { ChatPopup } from '@/components/chat/chat-popup';

export const metadata: Metadata = {
  title: 'iGen Technology',
  description: 'Kiến tạo Cỗ máy Marketing Hoàn chỉnh. Giải phóng Chủ Doanh nghiệp.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <BackToTop />
        <ChatPopup />
      </body>
    </html>
  );
}
