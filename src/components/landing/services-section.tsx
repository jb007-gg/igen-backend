import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Users, Zap, PenTool, Globe } from 'lucide-react';

const services = [
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: 'Phân phối Tự động',
        description: 'Đưa thông điệp của bạn đến đúng khách hàng, đúng thời điểm trên mọi nền tảng.',
    },
    {
        icon: <Bot className="h-6 w-6 text-primary" />,
        title: 'Chatbot Chuyển đổi Thông minh',
        description: 'Chăm sóc và chuyển đổi khách hàng 24/7, không bỏ lỡ bất kỳ cơ hội nào.',
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: 'Tư vấn & Vận hành Trọn gói',
        description: 'Chúng tôi không bán công cụ, chúng tôi là đối tác vận hành hệ thống cho bạn.',
    },
    {
        icon: <PenTool className="h-6 w-6 text-primary" />,
        title: 'Sáng tạo nội dung truyền thông bằng AI',
        description: 'Tự động tạo ra các nội dung marketing hấp dẫn, từ bài viết blog đến các bài đăng trên mạng xã hội.',
    },
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: 'Thiết kế Website chuyên nghiệp ứng dụng AI',
        description: 'Xây dựng các trang web và trang đích được tối ưu hóa cho SEO và tỷ lệ chuyển đổi, được hỗ trợ bởi AI.',
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
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit">
                    {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <CardTitle className="font-bold text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Xem thêm
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
