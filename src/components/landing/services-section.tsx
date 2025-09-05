import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, Bot, Share2, Users } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Sáng tạo Nội dung bằng AI',
    description: 'Tạo ra nguồn nội dung vô hạn, chuẩn thương hiệu.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: 'Phân phối Đa kênh Tự động',
    description: 'Đưa thông điệp của bạn đến đúng khách hàng, đúng thời điểm.',
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
              Giải pháp Marketing Toàn diện với AI
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 xl:grid-cols-4 mt-12">
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
