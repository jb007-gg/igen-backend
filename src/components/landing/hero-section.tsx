import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center pt-24 pb-12 text-white">
      <div className="absolute inset-0 bg-black z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Abstract technology background"
          data-ai-hint="abstract technology"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Kiến tạo Cỗ máy Marketing Hoàn chỉnh. <br />
            <span className="text-primary">Giải phóng Chủ Doanh nghiệp.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
            iGen Technology biến marketing phức tạp thành hệ thống vận hành tự động, hiệu quả và đáng tin cậy, giúp bạn thảnh thơi tập trung vào chuyên môn kinh doanh.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
            <Link href="#services">
                Tìm Hiểu Giải Pháp
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 mt-20 text-center">
        <div className="w-full max-w-4xl mx-auto bg-cyan-900/40 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
          <div className="relative flex items-center justify-center w-24 h-24">
            <div className="absolute w-full h-full bg-cyan-500 rounded-full opacity-30 animate-ping"></div>
            <div className="relative w-12 h-12 bg-cyan-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-300">Hình ảnh minh họa hệ thống AI Marketing</p>
        </div>
      </div>
    </section>
  );
}
