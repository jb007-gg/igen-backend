import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Globe, Megaphone, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Megaphone className="h-8 w-8 text-primary" />,
        title: 'Tư vấn, lên chiến lược Marketing ứng dụng công nghệ AI',
        description: 'Xây dựng chiến lược marketing toàn diện, tận dụng sức mạnh của AI để tối ưu hóa hiệu quả.',
        href: "/giai-phap#strategy",
    },
    {
        icon: <PenTool className="h-8 w-8 text-primary" />,
        title: 'Sáng tạo nội dung và phân phối đa kênh tự động bằng AI',
        description: 'Tự động tạo và phân phối nội dung hấp dẫn trên các nền tảng mạng xã hội, email và website.',
        href: "/giai-phap#content-creation",
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Chatbot chăm sóc khách hàng ứng dụng công nghệ AI',
        description: 'Tự động hóa việc tương tác, tư vấn và hỗ trợ khách hàng 24/7, nâng cao trải nghiệm người dùng.',
        href: "/giai-phap#chatbot",
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: 'Thiết kế Website chuyên nghiệp ứng dụng AI',
        description: 'Xây dựng các trang web và trang đích được tối ưu hóa cho SEO và tỷ lệ chuyển đổi, được hỗ trợ bởi AI.',
        href: "/giai-phap",
    },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Các dịch vụ ứng dụng công nghệ AI
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-card border-border rounded-lg shadow-sm h-full">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit mx-auto">
                    {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 text-center">
                <CardTitle className="font-bold text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-[#00FFFF] hover:text-white bg-transparent" asChild>
                    <Link href={service.href}>Xem thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
