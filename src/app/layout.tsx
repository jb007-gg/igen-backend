import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackToTop } from '@/components/ui/back-to-top';
import { ChatPopup } from '@/components/chat/chat-popup';

export const metadata: Metadata = {
  title: 'Hệ sinh thái Làm việc – Học tập – Khởi nghiệp iGen Office',
  description: 'iGen Office - không gian khởi nguồn ý tưởng và nuôi dưỡng thành công. Dành cho cá nhân, sinh viên, học sinh, freelancer và start-up, iGen mang đến môi trường hiện đại – linh hoạt – đầy cảm hứng để bạn học tập, làm việc và phát triển.',
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
