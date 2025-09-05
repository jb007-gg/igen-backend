import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center pt-16">
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
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Kiến tạo Cỗ máy Marketing Hoàn chỉnh. <br />
            <span className="text-primary">Giải phóng Chủ Doanh nghiệp.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
            iGen Technology biến marketing phức tạp thành hệ thống vận hành tự động, hiệu quả và đáng tin cậy, giúp bạn thảnh thơi tập trung vào chuyên môn kinh doanh.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#services">
                Tìm Hiểu Giải Pháp
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
