
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Send } from 'lucide-react';
import Link from 'next/link';

const autoPostingPoints = [
  {
    title: 'Bộ não Sáng tạo AI: Biến Ý tưởng thành Tầm ảnh hưởng',
    points: [
      "Biến mọi hình ảnh/video thành vũ khí truyền thông: AI tự động phân tích và biên soạn caption cuốn hút, đồng thời tích hợp bộ hashtag chiến lược đã được kiểm chứng để tối ưu hóa nhằm thu hút tương tác tự nhiên một cách mạnh mẽ nhất.",
      "Chấm dứt hoàn toàn áp lực sáng tạo: Chỉ cần cung cấp media, AI sẽ lo phần còn lại. Giải phóng hàng giờ làm việc mỗi ngày để bạn tập trung vào những quyết định chiến lược cấp cao.",
    ],
  },
  {
    title: 'Triển khai Chiến lược Nội dung: Kiến tạo Dòng chảy Thông minh & Linh hoạt',
    points: [
      "Lịch trình đăng bài được cá nhân hóa: Chúng tôi thiết lập một lịch trình được tối ưu hóa và linh hoạt, hoàn toàn phù hợp với mục tiêu và các chiến dịch marketing của bạn, không bị bó buộc vào một khuôn mẫu cố định.",
      "Thống lĩnh không gian số vào 'giờ vàng': Mục tiêu của chúng tôi là đảm bảo thương hiệu của bạn luôn xuất hiện vào đúng thời điểm, tiếp cận tối đa khách hàng tiềm năng. Chúng tôi sẽ liên tục cập nhật và tối ưu hóa hệ thống để phù hợp với thuật toán của từng nền tảng, hướng đến hiệu quả tương tác tối ưu.",
    ],
  },
  {
    title: 'Giải pháp Quản lý Trọn gói: Giải phóng Bạn khỏi Thao tác Kỹ thuật',
    points: [
        "Năng lực quản lý đa kênh mạnh mẽ và linh hoạt: Chúng tôi thiết lập và vận hành hệ thống để quản lý đồng bộ các Trang và Nhóm của bạn. Giải pháp được thiết kế để dễ dàng mở rộng quy mô khi doanh nghiệp của bạn phát triển. Bạn không cần thao tác kỹ thuật, chỉ cần tập trung vào chiến lược kinh doanh cốt lõi.",
        "Quy trình làm việc tinh gọn chưa từng có: Chúng tôi chịu trách nhiệm toàn bộ khâu hậu cần kỹ thuật, tự động biến nội dung của bạn thành những bài đăng chiến lược trên các kênh social. Đối với bạn, quy trình chỉ đơn giản là thấy kết quả."
    ],
  },
];

export default function AutoPostingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
                Hệ thống Đăng bài Tự động: Cỗ máy Phân phối
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Có nguyên liệu tốt, cần một hệ thống phân phối hiệu quả để đưa thông điệp chạm đến hàng triệu khách hàng.
            </p>
          </div>
        </section>
        
        <section id="auto-posting-details" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <Send className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Đưa Thông điệp Chạm đến Hàng triệu Khách hàng
                    </h2>
                </div>
                <div className="mx-auto mt-12 grid gap-8">
                  {autoPostingPoints.map((point, index) => (
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
                Sẵn sàng Tự động hóa Phân phối Nội dung?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                Hãy để chúng tôi giúp bạn tiếp cận khách hàng một cách hiệu quả và nhất quán.
            </p>
             <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/#contact">
                        Liên hệ tư vấn
                    </Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
