
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Megaphone, PenTool, Send, Bot } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const timelineSteps = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'I. Nền tảng Chiến lược',
    subtitle: 'Dịch vụ Tư vấn & Định hướng Kinh doanh',
    description: 'Bước đầu tiên và quan trọng nhất: Vẽ ra con đường đi đến thành công.',
    color: 'bg-red-500',
    textColor: 'text-white',
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'II. Sáng tạo Nội dung bằng AI',
    subtitle: 'Giải pháp "Studio Ảo"',
    description: 'Nguồn "Nhiên liệu" Vô hạn cho Cỗ máy Marketing. Sau khi có chiến lược, chúng ta cần nguồn nguyên liệu để triển khai.',
    color: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    icon: <Send className="h-8 w-8" />,
    title: 'III. Hệ thống Đăng bài Tự động',
    subtitle: 'Cỗ máy Phân phối',
    description: 'Có nguyên liệu tốt, cần một hệ thống phân phối hiệu quả để đưa thông điệp chạm đến hàng triệu khách hàng.',
    color: 'bg-cyan-500',
    textColor: 'text-white',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'IV. Chatbot AI Bán hàng',
    subtitle: 'Cỗ máy Chuyển đổi',
    description: 'Biến Mọi Tương tác thành Cơ hội Doanh thu. Khi đã thu hút được sự chú ý, đây là lúc chuyển đổi.',
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
              Chúng tôi không chỉ bán công cụ. Chúng tôi kiến tạo một cỗ máy tăng trưởng được dẫn dắt bởi chiến lược và vận hành bằng công nghệ.
            </p>
          </div>
        </section>
        
        <section id="workflow" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative flex flex-col items-center gap-0">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex w-full max-w-4xl items-center justify-center">
                  <div className={cn("relative z-10 flex w-[calc(50%-2rem)] flex-col items-end justify-center pr-8 text-right", index % 2 !== 0 && "opacity-0")}>
                    {index % 2 === 0 && (
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold">{step.subtitle}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-20 flex h-32 w-16 flex-shrink-0 flex-col items-center">
                    <div className="h-full w-1 bg-border"></div>
                  </div>

                  <div className={cn("relative z-10 flex w-[calc(50%-2rem)] flex-col items-start justify-center pl-8 text-left", index % 2 === 0 && "opacity-0")}>
                     {index % 2 !== 0 && (
                      <div className="space-y-2">
                         <h3 className="text-lg font-bold">{step.subtitle}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className={cn(
                    "absolute z-30 flex items-center justify-center transform p-4",
                    index % 2 === 0 ? 'right-1/2 translate-x-[calc(100%)]' : 'left-1/2 -translate-x-[calc(100%)]'
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
