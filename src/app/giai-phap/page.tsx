
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Megaphone, PenTool, Send, Bot } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const timelineSteps = [
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: 'I. Nền tảng Chiến lược',
    description: 'Vẽ ra con đường đi và mục tiêu cần đến, đảm bảo mọi nguồn lực được đầu tư đúng hướng.',
    color: 'bg-red-500',
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: 'II. Website & Studio AI',
    description: 'Cung cấp "nguyên liệu" cốt lõi: một "đại bản doanh" chuẩn chuyển đổi và nguồn "nhiên liệu" hình ảnh/video vô hạn, chất lượng cao.',
    color: 'bg-orange-500',
  },
  {
    icon: <Send className="h-6 w-6" />,
    title: 'III. Hệ thống Phân phối Tự động',
    description: 'Đưa "nhiên liệu" đến với hàng triệu khách hàng tiềm năng một cách thông minh và tối ưu nhất.',
    color: 'bg-green-500',
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'IV. Chatbot AI Bán hàng',
    description: 'Đội quân chốt sale tinh nhuệ 24/7, sẵn sàng chuyển đổi mọi sự quan tâm thành cơ hội bán hàng.',
    color: 'bg-cyan-500',
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
            <div className="relative w-full max-w-4xl mx-auto">
              {timelineSteps.map((step, index) => {
                const isOdd = index % 2 !== 0;
                return (
                  <div key={index} className="relative flex items-center w-full my-6 md:my-8">
                    {/* Description Content */}
                    <div className={cn(
                      'w-1/2 flex',
                      isOdd ? 'justify-end pr-8' : 'justify-start pl-8'
                    )}>
                      {!isOdd && (
                        <div className="text-left">
                          <p className="text-muted-foreground md:text-lg">{step.description}</p>
                        </div>
                      )}
                      {isOdd && (
                         <div className="text-right">
                           <p className="text-muted-foreground md:text-lg">{step.description}</p>
                         </div>
                      )}
                    </div>

                    {/* Timeline Step Element */}
                    <div className={cn(
                      'absolute top-1/2 -translate-y-1/2 z-10 w-1/2 flex items-center text-white',
                       isOdd ? 'left-0 flex-row-reverse' : 'right-0'
                    )}>
                      <div className={cn('relative h-14 w-full flex items-center px-4', step.color)}>
                          <div className={cn(
                            "absolute top-0 h-full w-4",
                            isOdd ? "right-full" : "left-full"
                          )}>
                             <div className={cn("h-1/2 w-full", step.color)}></div>
                             <div className={cn("h-1/2 w-full", step.color, "opacity-70")}></div>
                          </div>
                          <div className={cn(
                            "absolute top-0 h-0 w-0 border-t-[28px] border-b-[28px] border-t-transparent border-b-transparent",
                             isOdd ? "right-0 border-l-[20px]" : "left-0 border-r-[20px]",
                             isOdd ? "border-l-background" : "border-r-background"
                          )}></div>
                         <div className={cn("flex items-center gap-3 w-full", isOdd ? 'flex-row-reverse' : '')}>
                           {step.icon}
                           <h3 className="font-bold text-base md:text-lg whitespace-nowrap">{step.title}</h3>
                         </div>
                      </div>
                    </div>
                  </div>
                );
              })}
               {/* Final connecting piece */}
                <div className="absolute top-1/2 -translate-y-[28px] left-1/2 -translate-x-1/2 h-0 w-0 z-20
                  border-l-[20px] border-r-[20px] border-l-transparent border-r-transparent
                  border-t-[20px] border-t-cyan-700
                "></div>
            </div>
             <p className="mt-12 text-center text-lg text-foreground max-w-3xl mx-auto">
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
