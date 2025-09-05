import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const contentCreationPoints = [
  {
    title: 'Công nghệ “Bản sao Số”: Lợi thế Cạnh tranh Không thể Sao chép',
    points: [
      'Từ ảnh gốc, chúng tôi tạo ra một “Bản sao số” (Digital Twin) hoàn hảo, cho phép AI tái tạo sản phẩm trong mọi bối cảnh với độ chân thực đáng kinh ngạc.',
      'Tiết kiệm đến 90% chi phí sản xuất, giải phóng hoàn toàn gánh nặng chi phí thuê người mẫu, studio, ekip.',
      'Sản xuất hàng loạt ảnh, video quảng cáo chất lượng cao, tạo ra lợi thế cạnh tranh khác biệt và đẩy nhanh tốc độ ra mắt chiến dịch.',
    ],
  },
  {
    title: 'Dịch vụ Sáng tạo Kịch bản & Sản xuất Trọn gói',
    points: [
        'Đội ngũ chuyên gia của chúng tôi sẽ lên ý tưởng chiến lược, sau đó sử dụng trí tuệ AI để kiến tạo các kịch bản quảng cáo được tối ưu hóa sâu sắc theo thuật toán của từng nền tảng, đảm bảo thông điệp của bạn không chỉ sáng tạo mà còn có khả năng lan tỏa mạnh mẽ nhất.'
    ],
  },
  {
    title: 'Chất lượng Đỉnh cao & Quy trình Vượt trội',
    points: [
        'Mọi sản phẩm đều đạt chất lượng 4K chuyên nghiệp, khẳng định sự sắc nét và đẳng cấp thương hiệu.',
        'Một khi AI đã "học" về sản phẩm của bạn, việc tạo ra nội dung cho các chiến dịch sau này diễn ra với tốc độ đáng kinh ngạc.'
    ],
  },
];

export default function ContentCreationPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
              Sáng tạo Nội dung bằng AI: Giải pháp "Studio Ảo"
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Nguồn "Nhiên liệu" Vô hạn cho Cỗ máy Marketing. Sau khi có chiến lược, chúng ta cần nguồn nguyên liệu để triển khai.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {contentCreationPoints.map((point, index) => (
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

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng để Tạo ra Nội dung Vượt trội?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
              Hãy để AI giúp bạn sản xuất nội dung chất lượng cao với chi phí và thời gian tối ưu.
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
