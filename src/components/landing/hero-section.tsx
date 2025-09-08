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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl font-headline">
            Kiến tạo Cỗ máy Marketing Hoàn chỉnh. <br />
            <span className="text-[#00d3f3]">Giải phóng Chủ Doanh nghiệp.</span>
          </h1>
          <p className="mx-auto max-w-[900px] text-gray-300 md:text-lg">
            iGen Technology biến marketing phức tạp thành hệ thống vận hành tự động, hiệu quả và đáng tin cậy, giúp bạn thảnh thơi tập trung vào chuyên môn kinh doanh.
          </p>
          <Button asChild size="lg" className="bg-[#00d3f3] text-primary-foreground hover:bg-[#00d3f3]/90 group">
            <Link href="#services">
                Tìm Hiểu Giải Pháp
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
