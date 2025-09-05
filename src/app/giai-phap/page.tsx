
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Megaphone, PenTool, Send, Bot } from 'lucide-react';
import Link from 'next/link';

const workflowSteps = [
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Tư vấn chiến lược',
    description: 'Vẽ ra con đường đi và mục tiêu cần đến.',
    href: '/giai-phap/chien-luoc',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'Sáng tạo nội dung',
    description: 'Cung cấp "nhiên liệu" hình ảnh, video vô hạn và chất lượng cao.',
     href: '/giai-phap/sang-tao-noi-dung',
  },
  {
    icon: <Send className="h-10 w-10 text-primary" />,
    title: 'Tự động đăng bài',
    description: 'Đưa "nhiên liệu" đó đến với hàng triệu khách hàng tiềm năng.',
     href: '/giai-phap/dang-bai-tu-dong',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Chatbot AI Bán hàng',
    description: 'Chuyển đổi mọi sự quan tâm thành cơ hội bán hàng.',
    href: '/giai-phap/chatbot',
  },
];

export default function SolutionsWorkflowPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
              Hệ Sinh thái Marketing Khép kín
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Chúng tôi kiến tạo một cỗ máy tăng trưởng được dẫn dắt bởi chiến lược và vận hành bằng công nghệ.
            </p>
          </div>
        </section>
        
        <section id="workflow" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Dòng chảy Sức mạnh Cộng hưởng
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Bạn không chỉ nhận được các dịch vụ riêng lẻ. Bạn nhận được một cỗ máy marketing khép kín, tự vận hành và khuếch đại lẫn nhau.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true" />
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                {workflowSteps.map((step, index) => (
                  <Card key={index} className="flex flex-col text-center items-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="items-center">
                       <div className="p-4 bg-primary/10 rounded-full">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl font-bold pt-4">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{step.description}</CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0">
                       <Button asChild variant="link" className="text-primary">
                        <Link href={step.href}>
                            Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng Kiến tạo Cỗ máy Tăng trưởng?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                Đã đến lúc ngừng làm marketing rời rạc. Hãy bắt đầu xây dựng hệ thống của riêng bạn ngay hôm nay.
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
