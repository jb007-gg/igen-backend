'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, MonitorSmartphone, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <PenTool className="h-8 w-8 text-primary" />,
        title: 'Sáng tạo nội dung và phân phối đa kênh tự động bằng AI',
        description: 'Tự động tạo và phân phối nội dung hấp dẫn trên các nền tảng mạng xã hội, email và website.',
        href: "/sang-tao-noi-dung",
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Chatbot chăm sóc khách hàng ứng dụng công nghệ AI',
        description: 'Tự động hóa việc tương tác, tư vấn và hỗ trợ khách hàng 24/7, nâng cao trải nghiệm người dùng.',
        href: "/chatbot",
    },
    {
        icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
        title: 'Thiết kế Website chuyên nghiệp ứng dụng AI',
        description: 'Xây dựng nền tảng vững chắc để thu hút và chuyển đổi khách hàng tiềm năng từ Google.',
        href: "/dang-bai-tu-dong",
    },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary-foreground">
              Các dịch vụ ứng dụng công nghệ AI
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-card border-border rounded-lg shadow-sm h-full">
              <CardHeader>
                <div className="p-3 bg-primary/20 rounded-md w-fit mx-auto">
                    {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 text-center">
                <CardTitle className="font-bold text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00d3f3] text-primary-foreground group" asChild>
                    <Link href={service.href}>
                        Xem thêm
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
