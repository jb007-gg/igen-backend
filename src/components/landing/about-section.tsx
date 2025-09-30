import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AboutSection({ className }: { className?: string }) {
  return (
    <section id="about" className={cn("w-full py-12 md:py-24 lg:py-32 bg-background", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-current">
                Ra đời từ Thực chiến, Dành cho Chủ Doanh nghiệp.
              </h2>
              <p className={cn("max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", className ? "text-primary-foreground/80" : "text-muted-foreground")}>
                Chúng tôi nhận thấy các chủ doanh nghiệp tâm huyết đang phải làm marketing một cách rời rạc và lãng phí nguồn lực. iGen Technology được sinh ra để thay đổi điều đó, với triết lý công nghệ phải đơn giản, tin cậy và hiệu quả.
              </p>
            </div>
             <div className="flex justify-center">
              <Button asChild className="bg-[#00d3f3] text-black hover:bg-[#00d3f3]/90 group">
                <Link href="/cau-chuyen-thuong-hieu-igen">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8dGVjaG5vbG9neXxlbnwwfHx8fDE3NTczMDM1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              width="600"
              height="400"
              alt="Abstract graphic"
              data-ai-hint="order chaos"
              className="overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
