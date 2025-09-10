
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Megaphone, PenTool, Send, Bot, MonitorSmartphone } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const timelineSteps = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'I. Nền tảng Chiến lược',
    description: 'Vẽ ra con đường đi và mục tiêu cần đến, đảm bảo mọi nguồn lực được đầu tư đúng hướng.',
    color: 'bg-red-500',
    textColor: 'text-white',
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'II. Website & Studio AI',
    description: 'Cung cấp "nguyên liệu" cốt lõi: một "đại bản doanh" chuẩn chuyển đổi và nguồn "nhiên liệu" hình ảnh/video vô hạn, chất lượng cao.',
    color: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    icon: <Send className="h-8 w-8" />,
    title: 'III. Hệ thống Phân phối Tự động',
    description: 'Đưa "nhiên liệu" đến với hàng triệu khách hàng tiềm năng một cách thông minh và tối ưu nhất.',
    color: 'bg-cyan-500',
    textColor: 'text-white',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'IV. Chatbot AI Bán hàng',
    description: 'Đội quân chốt sale tinh nhuệ 24/7, sẵn sàng chuyển đổi mọi sự quan tâm thành cơ hội bán hàng.',
    color: 'bg-indigo-500',
    textColor: 'text-white',
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
            <div className="relative flex flex-col items-center">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex w-full max-w-4xl">
                  <div className={cn("relative z-10 flex w-[calc(50%-4rem)] items-center", index % 2 === 0 ? "justify-end pr-8 text-right" : "pl-8 text-left")}>
                    { (index !== 0 || index % 2 === 0) &&
                      <p className="text-muted-foreground md:text-lg">{step.description}</p>
                    }
                  </div>
                  <div className="relative z-20 flex h-48 w-32 flex-shrink-0 flex-col items-center">
                    <div className="h-full w-1 bg-border"></div>
                  </div>
                  <div className={cn("relative z-10 flex w-[calc(50%-4rem)] items-center", index % 2 !== 0 ? "justify-start pl-8 text-left" : "pr-8 text-right")}>
                    { (index % 2 !== 0) &&
                        <p className="text-muted-foreground md:text-lg">{step.description}</p>
                    }
                  </div>
                  
                  <div className={cn(
                    "absolute top-1/2 -translate-y-1/2 z-30 flex items-center justify-center transform p-4",
                    index % 2 === 0 ? 'right-1/2 translate-x-[calc(100%-1rem)]' : 'left-1/2 -translate-x-[calc(100%-1rem)]'
                  )}>
                    <div className={cn("absolute h-0 w-0 border-y-[60px] border-y-transparent",
                      index % 2 === 0 ? "border-r-[40px]" : "border-l-[40px]",
                      step.color, "opacity-20 transform scale-110"
                    )}></div>
                     <div className={cn(
                      "relative flex h-[120px] w-64 items-center justify-between p-4",
                      step.color, step.textColor,
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    )}>
                      <div className={cn("absolute h-0 w-0 border-y-[60px] border-y-transparent", 
                        index % 2 === 0 ? "right-0 border-r-[40px] border-r-background" : "left-0 border-l-[40px] border-l-background"
                      )}></div>
                      <div className="flex-shrink-0">{step.icon}</div>
                      <h2 className={cn("text-lg font-bold w-full text-center")}>{step.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-lg text-foreground max-w-3xl mx-auto">
              Khi cỗ máy này vận hành, nó không chỉ giải quyết từng vấn đề riêng lẻ. Nó kiến tạo một hệ sinh thái tăng trưởng bền vững, giải phóng bạn khỏi những công việc phức tạp để tập trung vào điều quan trọng nhất: lãnh đạo doanh nghiệp.
            </p>
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
