
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MonitorSmartphone } from 'lucide-react';
import Link from 'next/link';

const websitePoints = [
  {
    title: 'Thiết kế Giao diện Hiện đại & Chuẩn Thương hiệu',
    points: [
      "Tạo ra một giao diện độc đáo, chuyên nghiệp, phản ánh đúng giá trị và cá tính thương hiệu của bạn.",
      "Đảm bảo trải nghiệm người dùng (UX/UI) mượt mà, trực quan trên mọi thiết bị từ máy tính đến điện thoại di động.",
    ],
  },
  {
    title: 'Nền tảng Công nghệ Vững chắc & Tối ưu SEO',
    points: [
      "Xây dựng website trên nền tảng công nghệ hiện đại, đảm bảo tốc độ tải trang nhanh và bảo mật cao.",
      "Tối ưu hóa cấu trúc và nội dung theo chuẩn SEO ngay từ đầu, giúp website dễ dàng đạt thứ hạng cao trên Google.",
    ],
  },
  {
    title: 'Tích hợp AI & Tự động hóa Thông minh',
    points: [
      "Tích hợp chatbot AI để tư vấn và hỗ trợ khách hàng 24/7, tăng tỷ lệ chuyển đổi.",
      "Kết nối với hệ thống Email Marketing và Mạng xã hội để tạo thành một cỗ máy marketing tự động, khép kín."
    ],
  },
];

export default function WebsiteDesignPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
                Thiết kế Website chuyên nghiệp ứng dụng AI
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Nền tảng vững chắc để thu hút và chuyển đổi khách hàng tiềm năng từ Google.
            </p>
          </div>
        </section>
        
        <section id="website-details" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <MonitorSmartphone className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Ngôi nhà số của Thương hiệu
                    </h2>
                </div>
                <div className="mx-auto mt-12 grid gap-8">
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

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Sẵn sàng Xây dựng Nền tảng Digital Vững chắc?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                Hãy để chúng tôi kiến tạo một website không chỉ đẹp mà còn mang lại hiệu quả kinh doanh thực sự.
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
