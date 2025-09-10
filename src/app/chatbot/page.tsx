import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const chatbotPoints = [
    {
        title: "Khai mở Doanh thu & Làm chủ Mọi Cơ hội",
        points: [
            "Kiến tạo Cỗ máy Bán hàng Tự vận hành 24/7: Một quy trình hoàn hảo từ tư vấn, giải đáp thắc mắc, chốt đơn đến tạo đơn hàng, được vận hành bởi trí tuệ AI, giải phóng hoàn toàn sự can thiệp thủ công.",
            'Chấm dứt "Nỗi đau" Mất khách: Phản hồi tức thì ngay trong giây lát. Chấm dứt vĩnh viễn tình trạng "bỏ lỡ khách hàng" hay “để mất khách hàng vào tay đối thủ cạnh tranh”, biến mọi sự chú ý, dù là nửa đêm hay rạng sáng, thành cơ hội doanh thu mà bạn không thể bỏ qua.'
        ]
    },
    {
        title: "Trợ lý AI với Trí tuệ của Chuyên gia: Xây dựng Lòng trung thành Tuyệt đối",
        points: [
            "Tư vấn như một chuyên gia thực thụ: Công nghệ AI giúp thấu hiểu sâu sắc nhu cầu khách hàng, kiến tạo những cuộc trò chuyện giá trị, tự nhiên và chi tiết, xây dựng một niềm tin không thể lay chuyển.",
            "Phá vỡ Mọi Rào cản Mua hàng: AI được huấn luyện để trở thành chuyên gia về sản phẩm của bạn, giải đáp mọi thắc mắc từ kỹ thuật đến ứng dụng, giúp khách hàng ra quyết định mua hàng một cách tự tin và dứt khoát.",
            'Kiến tạo Cơ hội Upsell thông minh: AI phân tích hành vi để gợi ý các sản phẩm "đo ni đóng giày", khéo léo đề xuất để gia tăng giá trị trên mỗi đơn hàng.'
        ]
    },
    {
        title: "Công nghệ AI Đáng tin cậy: Tấm khiên Vững chắc Bảo vệ Di sản Thương hiệu",
        points: [
            "Cam kết VÀNG - Tuyệt đối không bịa thông tin: Chatbot chỉ trả lời dựa trên dữ liệu được cung cấp, bảo vệ 100% uy tín và hình ảnh thương hiệu mà bạn đã dày công xây dựng.",
            "Chuyển giao liền mạch, không gián đoạn: Tự động nhận diện những tình huống phức tạp và ngay lập tức thông báo cho chuyên viên vào hỗ trợ, đảm bảo trải nghiệm khách hàng luôn hoàn hảo và chuyên nghiệp."
        ]
    },
    {
        title: "Dấu ấn Thương hiệu: Thổi hồn Doanh nghiệp vào từng Tin nhắn",
        points: [
            "Linh hồn của thương hiệu: Tùy chỉnh giọng văn của chatbot – từ thân thiện, chuyên nghiệp đến hài hước – để mỗi cuộc trò chuyện đều là một tuyên ngôn nhất quán về cá tính và đẳng cấp thương hiệu."
        ]
    },
    {
        title: "Vận hành Tinh gọn: Giải phóng Nguồn lực, Tập trung vào Chiến lược",
        points: [
            "Quản lý đơn hàng chỉ bằng một cú nhấp chuột: Toàn bộ thông tin đơn hàng được tự động đồng bộ vào Google Sheet, loại bỏ hoàn toàn sai sót, lãng phí và các công việc thủ công nhàm chán."
        ]
    }
];

export default function ChatbotPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1684369175809-f9642140a1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxDaGF0Ym90fGVufDB8fHx8MTc1NzMwMzczNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chatbot technology background"
              data-ai-hint="chatbot technology"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Chatbot AI Bán hàng: Cỗ máy Bán hàng Tự vận hành 24/7
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
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

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng để Tự động hóa Bán hàng?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
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
