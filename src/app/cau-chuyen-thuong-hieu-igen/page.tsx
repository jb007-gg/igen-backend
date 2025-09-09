import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const brandStoryPoints = [
    {
        title: "Nguồn Cảm Hứng Ban Đầu",
        points: [
            "Nhận thấy nỗi đau của các chủ doanh nghiệp vừa và nhỏ: loay hoay với marketing, lãng phí nguồn lực, và thiếu định hướng chiến lược.",
            "Khát vọng tạo ra một giải pháp toàn diện, không chỉ là công cụ, mà là một đối tác đồng hành thực sự, giúp họ giải phóng khỏi những gánh nặng vận hành."
        ]
    },
    {
        title: "Triết Lý 'Công Nghệ Phụ Vụ Con Người'",
        points: [
            "iGen tin rằng công nghệ phải đơn giản, tin cậy và dễ tiếp cận. Chúng tôi biến những công nghệ AI phức tạp thành hệ thống tự động, hiệu quả.",
            "Mục tiêu cuối cùng là để công nghệ lo việc vận hành, còn chủ doanh nghiệp tập trung vào thế mạnh cốt lõi: phát triển sản phẩm và chiến lược kinh doanh."
        ]
    },
    {
        title: "Sứ Mệnh & Tầm Nhìn Tương Lai",
        points: [
            "Sứ mệnh của iGen là phá vỡ rào cản công nghệ, trang bị cho doanh nghiệp Việt những lợi thế cạnh tranh sắc bén để vươn ra biển lớn.",
            "Chúng tôi không ngừng nghiên cứu và phát triển để luôn đi đầu trong việc ứng dụng AI, kiến tạo những cỗ máy marketing ngày càng thông minh và hiệu quả hơn."
        ]
    },
];

export default function BrandStoryPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxqb3VybmV5fGVufDB8fHx8MTc1NzY2MzMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brand story background"
              data-ai-hint="journey vision"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Câu Chuyện Thương Hiệu iGen
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Hành trình từ ý tưởng đến sứ mệnh giải phóng chủ doanh nghiệp.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {brandStoryPoints.map((point, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {point.points.map((p, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-muted-foreground">{p}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng Đồng hành cùng chúng tôi?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
              Hãy để iGen Technology trở thành đối tác chiến lược, giúp bạn kiến tạo cỗ máy tăng trưởng bền vững.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
