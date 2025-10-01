
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center mt-12">
        <div className="container mx-auto px-4 md:px-6 mb-12">
            <div className="max-w-md mx-auto">
                 <Image
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Rtc2p1cG5jYjZlZDIxNmc2ejA2N25qZ2Z4d2tmaGtncHVqMGF4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aTskHEUdgCQAXde/giphy.gif"
                    alt="Confused Robot"
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg"
                    unoptimized
                />
                <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-destructive">
                    404 - Lạc Lối Rồi!
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg">
                    Trang bạn đang tìm kiếm dường như đã đi nghỉ mát hoặc không tồn tại. Đừng lo, hãy quay về trang chủ.
                </p>
                <div className="mt-8">
                    <Button asChild className="bg-[#00d3f3] text-black hover:bg-[#00d3f3]/90 group">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                            Quay về trang chủ
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
