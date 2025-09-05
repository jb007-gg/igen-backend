import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const strategicSteps = [
  {
    phase: 'Giai đoạn 1: Chẩn đoán Toàn diện & Xác định Lợi thế Cạnh tranh',
    points: [
      '"Khám sức khỏe" Marketing Tổng thể: Chúng tôi tiến hành phân tích sâu rộng toàn bộ hệ thống marketing của bạn, đặc biệt trên các kênh Social Media, để xác định chính xác đâu là điểm mạnh, điểm yếu và những cơ hội bị bỏ lỡ.',
      'Giải mã Thị trường và Đối thủ: Cung cấp một bức tranh toàn cảnh về thị trường, phân tích sâu các đối thủ cạnh tranh để tìm ra "khoảng trống" và lợi thế khác biệt mà chỉ riêng bạn có thể chiếm lĩnh.',
      'Xây dựng Chân dung Khách hàng "Vàng": Chúng tôi giúp bạn xác định và thấu hiểu sâu sắc nhóm khách hàng lý tưởng – những người không chỉ mua hàng mà còn trở thành người hâm mộ trung thành của thương hiệu.',
    ],
  },
  {
    phase: 'Giai đoạn 2: Kiến tạo "Tấm bản đồ" Tăng trưởng',
    points: [
      'Xây dựng Kế hoạch Marketing Tổng thể: Cung cấp một bản kế hoạch chi tiết, không chỉ là định hướng mà là một "kim chỉ nam" cho mọi hoạt động marketing, từ xây dựng thương hiệu, truyền thông đến phát triển sản phẩm.',
      'Lộ trình Hành động Rõ ràng & Khả thi: Biến chiến lược thành các bước đi cụ thể theo từng giai đoạn (3 tháng, 6 tháng, 1 năm), kèm theo đề xuất phân bổ ngân sách thông minh để tối ưu hóa hiệu quả đầu tư.',
      'Thiết kế Chiến lược Định vị Thương hiệu: Giúp thương hiệu của bạn có một tiếng nói riêng, một cá tính khác biệt và một vị thế vững chắc trong tâm trí khách hàng.',
    ],
  },
  {
    phase: 'Giai đoạn 3: Hiện thực hóa Chiến lược bằng Công nghệ',
    points: [
      'Tích hợp Công nghệ AI & Tự động hóa như một Lợi thế Cốt lõi: Chúng tôi không chỉ tư vấn "nên làm gì", mà còn trực tiếp tích hợp và vận hành các công nghệ tiên tiến (AI tạo nội dung, Chatbot tự động, Hệ thống đăng bài thông minh) vào hoạt động của bạn.',
      'Giải phóng Doanh nghiệp khỏi Gánh nặng Vận hành: Với vai trò là đối tác vận hành công nghệ, chúng tôi giúp bạn tự động hóa các quy trình lặp lại, giải phóng nguồn lực để bạn tập trung hoàn toàn vào chuyên môn kinh doanh cốt lõi.',
      'Đồng hành Giám sát & Cố vấn Thực chiến: Chúng tôi không "bàn giao rồi đi". Đội ngũ chuyên gia của iGen Technology sẽ liên tục đồng hành, giám sát quá trình triển khai và đưa ra những cố vấn kịp thời để đảm bảo chiến lược đi đúng hướng.',
    ],
  },
  {
    phase: 'Giai đoạn 4: Đo lường, Tinh chỉnh & Tối ưu Hóa',
    points: [
      'Xây dựng Hệ thống Đo lường Hiệu quả (KPIs): Chúng tôi giúp bạn thiết lập các chỉ số đo lường rõ ràng để theo dõi "sức khỏe" của chiến dịch và đưa ra quyết định dựa trên dữ liệu, không phải cảm tính.',
      'Tối ưu hóa Liên tục: Dựa trên các số liệu thực tế, chúng tôi sẽ cùng bạn liên tục tinh chỉnh và tối ưu hóa chiến lược để đảm bảo hiệu quả luôn được duy trì và gia tăng theo thời gian.',
    ],
  },
];

export default function StrategyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
              Nền tảng Chiến lược: Dịch vụ Tư vấn & Định hướng Kinh doanh
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Bước đầu tiên và quan trọng nhất: Vẽ ra con đường đi đến thành công.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {strategicSteps.map((step, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{step.phase}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {step.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-muted-foreground">{point}</p>
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
              Sẵn sàng để Xây dựng Nền tảng Vững chắc?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
              Một chiến lược vững chắc là bước đầu tiên để xây dựng một cỗ máy marketing hiệu quả.
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
