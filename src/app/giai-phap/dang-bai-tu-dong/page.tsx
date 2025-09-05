
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Link from 'next/link';

const autoPostingPoints = [
    {
      title: 'Bộ não Sáng tạo AI: Biến Ý tưởng thành Tầm ảnh hưởng',
      description: 'AI tự động phân tích và biên soạn caption cuốn hút, đồng thời tích hợp bộ hashtag chiến lược đã được kiểm chứng để tối ưu hóa nhằm thu hút tương tác tự nhiên một cách mạnh mẽ nhất. Chấm dứt hoàn toàn áp lực sáng tạo.',
    },
    {
      title: 'Triển khai Chiến lược Nội dung: Kiến tạo Dòng chảy Thông minh & Linh hoạt',
      description: 'Chúng tôi thiết lập một lịch trình được tối ưu hóa và linh hoạt, hoàn toàn phù hợp với mục tiêu và các chiến dịch marketing của bạn. Mục tiêu của chúng tôi là đảm bảo thương hiệu của bạn luôn xuất hiện vào đúng thời điểm, tiếp cận tối đa khách hàng tiềm năng.',
    },
    {
      title: 'Giải pháp Quản lý Trọn gói: Giải phóng Bạn khỏi Thao tác Kỹ thuật',
      description: 'Chúng tôi thiết lập và vận hành hệ thống để quản lý đồng bộ các Trang và Nhóm của bạn. Bạn không cần thao tác kỹ thuật, chỉ cần tập trung vào chiến lược kinh doanh cốt lõi.',
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
              Đưa Thông điệp Chạm đến Hàng triệu Khách hàng. Có nguyên liệu tốt, cần một hệ thống phân phối hiệu quả.
            </p>
          </div>
        </section>
        
        <section id="auto-posting-details" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <Globe className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Thống lĩnh không gian số vào "giờ vàng"
                    </h2>
                </div>
                <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 lg:grid-cols-3">
                    {autoPostingPoints.map((point, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-xl font-bold">{point.title}</h3>
                            <p className="text-muted-foreground">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Bắt đầu Phân phối Nội dung một cách Thông minh?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                Hãy để hệ thống của chúng tôi giúp bạn tiếp cận khách hàng một cách hiệu quả và nhất quán.
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
