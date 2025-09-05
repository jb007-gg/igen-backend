import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Users, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: 'Thiết kế Website chuyên nghiệp',
    description: 'Thiết kế website chuyên nghiệp, tối ưu hóa cho trải nghiệm người dùng và công cụ tìm kiếm.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Chatbot Chuyển đổi Thông minh',
    description: 'Chăm sóc và chuyển đổi khách hàng 24/7, không bỏ lỡ cơ hội.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Tư vấn &amp; Vận hành Trọn gói',
    description: 'Chúng tôi không bán công cụ, chúng tôi là đối tác vận hành hệ thống cho bạn.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Các dịch vụ ứng dụng công nghệ AI
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
