import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const websitePoints = [
  {
    title: 'Giải quyết Nỗi đau "Vô hình": Tối ưu SEO bằng Trí tuệ AI (AI-SEO)',
    points: [
      'Chuẩn SEO Nền tảng với Trí tuệ AI: Chúng tôi không chỉ làm SEO sau khi web hoàn thành. Cấu trúc website được xây dựng chuẩn SEO ngay từ viên gạch đầu tiên, và được AI của chúng tôi tự động phân tích và tích hợp các từ khóa vàng vào cấu trúc website để đảm bảo Google "thấu hiểu" và ưu tiên hiển thị website của bạn lên top đầu tìm kiếm, giúp bạn thống lĩnh các vị trí cao nhất trên Google một cách bền vững.',
      'Tốc độ Ánh sáng, Trải nghiệm Mượt mà: AI tự động tối ưu hóa từng dòng code, từng hình ảnh để đảm bảo website có tốc độ tải trang nhanh nhất, một yếu tố cực kỳ quan trọng để Google xếp hạng và giữ chân khách hàng ngay từ cú nhấp chuột đầu tiên. Hiển thị hoàn hảo trên mọi thiết bị từ điện thoại, máy tính bảng đến laptop, mang lại trải nghiệm chuyên nghiệp và đẳng cấp.',
    ],
  },
  {
    title: 'Giải quyết Nỗi đau "Không chuyển đổi": Thiết kế Thôi miên & Tối ưu Trải nghiệm bằng AI',
    points: [
      'Giao diện Tự động Cá nhân hóa: AI phân tích hành vi người dùng để tự động điều chỉnh và hiển thị những lời kêu gọi hành động (Call-to-Action), những sản phẩm gợi ý phù hợp nhất với từng khách truy cập, tối đa hóa tỷ lệ chuyển đổi từ người xem thành người mua.',
      'Thiết kế Hiện đại & Chuyên nghiệp: Mọi yếu tố, từ bố cục, màu sắc, câu chữ đến nút kêu gọi hành động (CTA) đều được thiết kế dựa trên tâm lý học hành vi, có chủ đích dẫn dắt người truy cập từ tò mò đến khao khát và ra quyết định mua hàng.',
    ],
  },
  {
    title: 'Giải phóng bạn khỏi Ma trận Kỹ thuật (Dịch vụ Quản lý Trọn gói)',
    points: [
      'Chúng tôi xây dựng, chúng tôi tối ưu và chúng tôi đồng hành. Bạn chỉ cần tập trung vào chuyên môn kinh doanh cốt lõi. Mọi vấn đề kỹ thuật, bảo trì, cập nhật nội dung theo chiến dịch... hãy để đội ngũ chuyên gia và hệ thống của chúng tôi lo.',
    ],
  },
];

export default function WebsiteDesignPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzU3MzA0NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
