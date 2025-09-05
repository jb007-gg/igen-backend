import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const chatbotPoints = [
    {
        title: "Khai mở Doanh thu & Làm chủ Mọi Cơ hội",
        points: [
            "Kiến tạo Cỗ máy Bán hàng Tự vận hành 24/7: Một quy trình hoàn hảo từ tư vấn, chốt đơn đến tạo đơn hàng, được vận hành bởi trí tuệ AI.",
            "Làm chủ Mọi Điểm chạm Khách hàng: Phản hồi tức thì ngay trong giây lát, chấm dứt vĩnh viễn tình trạng 'bỏ lỡ khách hàng'."
        ]
    },
    {
        title: "Trợ lý AI với Trí tuệ của Chuyên gia",
        points: [
            "Tư vấn như một chuyên gia thực thụ: Công nghệ AI thấu hiểu sâu sắc nhu cầu khách hàng, kiến tạo những cuộc trò chuyện giá trị.",
            "Phá vỡ Mọi Rào cản Mua hàng: AI được huấn luyện để trở thành chuyên gia về sản phẩm của bạn, giải đáp mọi thắc mắc.",
            "Kiến tạo Cơ hội Upsell thông minh: AI phân tích hành vi để gợi ý các sản phẩm 'đo ni đóng giày', khéo léo đề xuất để gia tăng giá trị đơn hàng."
        ]
    },
    {
        title: "Công nghệ AI Đáng tin cậy",
        points: [
            "Cam kết tuyệt đối không bịa thông tin: Chatbot chỉ trả lời dựa trên dữ liệu được cung cấp, bảo vệ 100% uy tín thương hiệu.",
            "Chuyển giao liền mạch: Tự động nhận diện tình huống phức tạp và chuyển giao cho chuyên viên."
        ]
    },
    {
        title: "Dấu ấn Thương hiệu & Vận hành Tinh gọn",
        points: [
            "Tùy chỉnh giọng văn của chatbot – từ thân thiện, chuyên nghiệp đến hài hước – để mỗi cuộc trò chuyện đều là một tuyên ngôn nhất quán về cá tính thương hiệu.",
            "Toàn bộ thông tin đơn hàng được tự động đồng bộ vào Google Sheet, loại bỏ hoàn toàn sai sót và công việc thủ công."
        ]
    },
];

export default function ChatbotPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
              Chatbot AI Bán hàng: Cỗ máy Chuyển đổi
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Biến Mọi Tương tác thành Cơ hội Doanh thu. Khi đã thu hút được sự chú ý, đây là lúc chuyển đổi.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {chatbotPoints.map((point, index) => (
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
              Sẵn sàng để Tự động hóa Bán hàng?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
              Hãy để Chatbot AI làm việc 24/7 để bạn không bao giờ bỏ lỡ một khách hàng tiềm năng nào nữa.
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

    