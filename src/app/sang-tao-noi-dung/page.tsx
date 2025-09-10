import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const contentCreationPoints = [
  {
    title: 'Công nghệ “Bản sao Số”: Lợi thế Cạnh tranh Không thể Sao chép',
    points: [
      'Sản phẩm của bạn, siêu mẫu độc quyền: Từ ảnh gốc, chúng tôi tạo ra một “Bản sao số” (Digital Twin) hoàn hảo, cho phép AI tái tạo sản phẩm trong mọi bối cảnh với độ chân thực đáng kinh ngạc.',
      'Đầu tư Thông minh, Hiệu quả Tối đa: Tiết kiệm đến 90% chi phí sản xuất, giải phóng hoàn toàn gánh nặng chi phí thuê người mẫu, studio, ekip. Dồn ngân sách vào nơi tạo ra hiệu quả thực sự.',
      'Biến sản phẩm vật lý thành tài sản số sinh lời vô hạn: Một giải pháp chiến lược cho mọi ngành hàng, từ thời trang, F&B, mỹ phẩm đến trang sức.',
    ],
  },
  {
    title: 'Dịch vụ Sáng tạo Kịch bản & Sản xuất Trọn gói',
    points: [
      'Bạn cung cấp sản phẩm – Chúng tôi kiến tạo câu chuyện: Đội ngũ chuyên gia của chúng tôi sẽ lên ý tưởng chiến lược, sau đó sử dụng trí tuệ AI để kiến tạo các kịch bản quảng cáo được tối ưu hóa sâu sắc theo thuật toán của từng nền tảng, đảm bảo thông điệp của bạn không chỉ sáng tạo mà còn có khả năng lan tỏa mạnh mẽ nhất.',
      'Biến sản phẩm thành nhân vật chính: Chúng tôi không chỉ tạo ra hình ảnh, mà còn thổi hồn vào sản phẩm, biến nó thành nhân vật chính trong những câu chuyện marketing hấp dẫn và hiệu quả.',
    ],
  },
  {
    title: 'Chất lượng Đỉnh cao & Quy trình Vượt trội',
    points: [
      'Độ phân giải 4K chuyên nghiệp: Mọi hình ảnh, video đều đạt chất lượng studio chuyên nghiệp (4K), đảm bảo sự nhất quán và nâng tầm đẳng cấp thương hiệu trên mọi điểm chạm, điều mà việc tự chụp hay thuê ngoài không thể đảm bảo.',
      'Lợi thế tốc độ không thể sao chép & Kho vũ khí Nội dung Vô hạn: Một khi AI đã "học" về sản phẩm của bạn, việc sản xuất hàng loạt ảnh, video quảng cáo chất lượng cao cho các chiến dịch sau này diễn ra với tốc độ đáng kinh ngạc, tạo ra lợi thế cạnh tranh khác biệt và giúp bạn luôn đi trước đối thủ nhiều bước.',
    ],
  },
  {
    title: 'Bộ não Sáng tạo AI: Biến Ý tưởng thành Tầm ảnh hưởng',
    points: [
      'Biến mọi hình ảnh/video thành vũ khí truyền thông: AI tự động phân tích và biên soạn caption cuốn hút, đồng thời tích hợp bộ hashtag chiến lược đã được kiểm chứng để tối ưu hóa với thuật toán của nền tảng nhằm thu hút tương tác tự nhiên một cách mạnh mẽ nhất.',
      'Chấm dứt hoàn toàn áp lực sáng tạo: Chỉ cần cung cấp media, AI sẽ lo phần còn lại. Giải phóng hàng giờ làm việc mỗi ngày để bạn tập trung vào những quyết định chiến lược cấp cao.',
    ],
  },
  {
    title: 'Triển khai Chiến lược Nội dung: Kiến tạo Dòng chảy Thông minh & Linh hoạt',
    points: [
      'Lịch trình đăng bài được cá nhân hóa: Chúng tôi thiết lập một lịch trình được tối ưu hóa và linh hoạt, hoàn toàn phù hợp với mục tiêu và các chiến dịch marketing của bạn, không bị bó buộc vào một khuôn mẫu cố định.',
      'Thống lĩnh không gian số vào "giờ vàng": Mục tiêu của chúng tôi là đảm bảo thương hiệu của bạn luôn xuất hiện vào đúng thời điểm, tiếp cận tối đa khách hàng tiềm năng. Chúng tôi sẽ liên tục cập nhật và tối ưu hóa hệ thống để phù hợp với thuật toán của từng nền tảng, hướng đến hiệu quả tương tác tối ưu.',
    ],
  },
  {
    title: 'Giải pháp Quản lý Trọn gói: Giải phóng Bạn khỏi Thao tác Kỹ thuật',
    points: [
      'Năng lực quản lý đa kênh mạnh mẽ và linh hoạt: Chúng tôi thiết lập và vận hành hệ thống để quản lý đồng bộ các Trang và Nhóm của bạn. Giải pháp được thiết kế để dễ dàng mở rộng quy mô khi doanh nghiệp của bạn phát triển. Bạn không cần thao tác kỹ thuật, chỉ cần tập trung vào chiến lược kinh doanh cốt lõi.',
      'Quy trình làm việc tinh gọn chưa từng có: Chúng tôi chịu trách nhiệm toàn bộ khâu hậu cần kỹ thuật, và AI sẽ tự động biến nội dung của bạn thành những bài đăng chiến lược trên các kênh social. Đối với bạn, quy trình chỉ đơn giản là thấy kết quả.',
    ],
  },
];

export default function ContentCreationPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1497048679117-1a29644559e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JlYXRpdmV8ZW58MHx8fHwxNzU3MzA0MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Content creation background"
              data-ai-hint="content creation"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Sáng tạo Nội dung: Giải pháp "Studio AI"
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Nguồn "Nhiên liệu" Vô hạn cho Cỗ máy Marketing.
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

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng để Tạo ra Nội dung Vượt trội?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
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
