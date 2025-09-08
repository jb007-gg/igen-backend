import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const websitePoints = [
  {
    title: 'Thiết kế Giao diện Hiện đại & Tối ưu Trải nghiệm',
    points: [
        'Chúng tôi không chỉ tạo ra một website đẹp, mà còn là một công cụ bán hàng hiệu quả. Giao diện được thiết kế tập trung vào trải nghiệm người dùng (UX/UI), giúp khách hàng dễ dàng tìm kiếm thông tin và thực hiện hành động mua hàng.',
        'Tương thích hoàn hảo trên mọi thiết bị, từ máy tính đến điện thoại di động, đảm bảo khách hàng của bạn có trải nghiệm tốt nhất dù ở bất kỳ đâu.',
    ]
  },
  {
    title: 'Nền tảng Chuẩn SEO - Chinh phục Vị trí Top Google',
    points: [
      'Website được xây dựng trên nền tảng kỹ thuật vững chắc, tối ưu hóa cho các công cụ tìm kiếm ngay từ đầu. Điều này giúp website của bạn dễ dàng được Google "yêu thích" và xếp hạng cao trên kết quả tìm kiếm.',
      'Tốc độ tải trang nhanh là một yếu tố quan trọng. Chúng tôi đảm bảo website của bạn vận hành mượt mà, giữ chân khách hàng và cải thiện thứ hạng SEO.',
    ],
  },
  {
    title: 'Tích hợp AI - Trợ lý Ảo cho Website của Bạn',
    points: [
        'Tích hợp Chatbot AI thông minh để tư vấn và trả lời các câu hỏi thường gặp của khách hàng 24/7, giúp bạn không bỏ lỡ bất kỳ cơ hội kinh doanh nào.',
        'Sử dụng AI để gợi ý sản phẩm phù hợp dựa trên hành vi của người dùng, cá nhân hóa trải nghiệm mua sắm và gia tăng tỷ lệ chuyển đổi.',
    ]
  },
  {
    title: 'Quản trị Dễ dàng & Mở rộng Vô hạn',
    points: [
        'Hệ thống quản trị nội dung (CMS) thân thiện, giúp bạn dễ dàng cập nhật thông tin sản phẩm, bài viết blog mà không cần kiến thức kỹ thuật.',
        'Nền tảng được thiết kế để dễ dàng mở rộng, tích hợp thêm các tính năng mới khi doanh nghiệp của bạn phát triển.',
    ]
  },
];

export default function AutoPostingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1561070791-36c11767b26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZGVzaWdufGVufDB8fHx8MTc1NzMwNDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Website design background"
              data-ai-hint="website design"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Thiết kế Website chuyên nghiệp ứng dụng AI
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Nền tảng vững chắc để thu hút và chuyển đổi khách hàng tiềm năng từ Google.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {websitePoints.map((point, index) => (
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
              Sẵn sàng để Xây dựng Ngôi nhà Số cho Doanh nghiệp?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
              Một website chuyên nghiệp là tài sản quý giá, giúp bạn xây dựng thương hiệu và thu hút khách hàng bền vững.
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
