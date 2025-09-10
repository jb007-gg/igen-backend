
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Megaphone, PenTool, Send, Bot, Lightbulb, DollarSign, BarChart, Coffee } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const timelineSteps = [
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: 'I. Nền tảng Chiến lược',
    description: 'Vẽ ra con đường đi và mục tiêu cần đến, đảm bảo mọi nguồn lực được đầu tư đúng hướng.',
    color: 'bg-red-500',
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: 'II. Website & Studio AI',
    description: 'Cung cấp "nguyên liệu" cốt lõi: một "đại bản doanh" chuẩn chuyển đổi và nguồn "nhiên liệu" hình ảnh/video vô hạn, chất lượng cao.',
    color: 'bg-orange-500',
  },
  {
    icon: <Send className="h-8 w-8 text-white" />,
    title: 'III. Hệ thống Phân phối Tự động',
    description: 'Đưa "nhiên liệu" đến với hàng triệu khách hàng tiềm năng một cách thông minh và tối ưu nhất.',
    color: 'bg-green-500',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'IV. Chatbot AI Bán hàng',
    description: 'Đội quân chốt sale tinh nhuệ 24/7, sẵn sàng chuyển đổi mọi sự quan tâm thành cơ hội bán hàng.',
    color: 'bg-cyan-500',
  },
];

const painPoints = [
  {
    icon: <DollarSign className="h-8 w-8 text-destructive" />,
    title: 'Giải phóng Chi phí',
    description: 'Workflow toàn diện, thông minh này thay thế hoàn toàn gánh nặng vận hành và chi phí cho 2-3 vị trí nhân sự marketing, giúp bạn đầu tư ngân sách vào nơi tạo ra lợi nhuận.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-yellow-500" />,
    title: 'Khuếch đại Hiệu quả',
    description: 'Tự động hóa và Trí tuệ AI đảm bảo mọi khâu được vận hành với tốc độ, sự chính xác và hiệu suất cao nhất, mang lại kết quả vượt trội so với cách làm thủ công truyền thống.',
  },
  {
    icon: <Coffee className="h-8 w-8 text-blue-500" />,
    title: 'Trao trả Lại Thời gian',
    description: 'Giải phóng bạn khỏi ma trận quản lý và các thao tác vụn vặt. Trả lại cho bạn thời gian và sự tập trung để làm những việc của một người chủ: xây dựng tầm nhìn, phát triển đối tác, và tận hưởng thành quả của mình.',
  },
];


export default function SolutionsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black z-0">
                <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxUZWNobm9sb2d5fGVufDB8fHx8MTc1NzMxMDY4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marketing ecosystem background"
                data-ai-hint="marketing system"
                fill
                className="object-cover opacity-20"
                />
            </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Hệ Sinh thái Marketing Khép kín – Sức mạnh của Sự Cộng hưởng
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Bạn không chỉ nhận được các dịch vụ riêng lẻ. Bạn nhận được một cỗ máy
              marketing hoàn chỉnh, tự vận hành và khuếch đại lẫn nhau. Đây là cách dòng
              chảy sức mạnh này vận hành
            </p>
          </div>
        </section>
        
        <section id="workflow" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2"></div>

              {timelineSteps.map((step, index) => {
                const isOdd = index % 2 !== 0;
                return (
                  <div key={index} className={cn("relative mb-12 flex w-full items-center", isOdd ? "justify-start flex-row-reverse" : "justify-start")}>
                    <div className={cn("w-1/2", isOdd ? "pl-8 text-left" : "pr-8 text-right")}>
                        <div className={cn(
                            "p-6 rounded-lg shadow-md bg-card border",
                             isOdd ? "text-left" : "text-right"
                        )}>
                            <h3 className={cn("font-bold text-xl mb-2", step.color.replace('bg-', 'text-'))}>{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                    
                    {/* Central Node */}
                    <div className={cn("absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full", step.color)}>
                      {step.icon}
                    </div>

                  </div>
                );
              })}
            </div>
            <div className="mx-auto max-w-3xl text-center">
                <Lightbulb className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-headline">
                    Khi cỗ máy này vận hành, nó không chỉ giải quyết từng vấn đề riêng lẻ. Nó giải quyết triệt để 3 "nỗi đau" lớn nhất của mọi chủ doanh nghiệp SME:
                </h2>
            </div>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {painPoints.map((point, index) => (
                    <Card key={index} className="text-center">
                    <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            {point.icon}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
                        <p className="text-muted-foreground">{point.description}</p>
                    </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>


        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Sẵn sàng Kiến tạo Cỗ máy Tăng trưởng?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
              Đã đến lúc ngừng làm marketing rời rạc. Hãy bắt đầu kiến tạo cỗ máy tăng trưởng của riêng bạn ngay hôm nay.
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
