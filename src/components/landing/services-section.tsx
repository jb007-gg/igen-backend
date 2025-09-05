import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Globe } from 'lucide-react';

const services = [
    {
        icon: <PenTool className="h-6 w-6 text-[#69C9B4]" />,
        title: 'Sáng tạo nội dung truyền thông bằng AI',
        description: 'Tự động tạo ra các nội dung marketing hấp dẫn, từ bài viết blog đến các bài đăng trên mạng xã hội.',
    },
    {
        icon: <Globe className="h-6 w-6 text-[#69C9B4]" />,
        title: 'Thiết kế Website chuyên nghiệp ứng dụng AI',
        description: 'Xây dựng các trang web và trang đích được tối ưu hóa cho SEO và tỷ lệ chuyển đổi, được hỗ trợ bởi AI.',
    },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Các dịch vụ ứng dụng công nghệ AI
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-accent border-[#C8E6C9] rounded-lg shadow-none">
              <CardHeader>
                <div className="p-3 bg-[#E0F2F1] rounded-md w-fit">
                    {service.icon}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 text-left">
                <CardTitle className="font-bold text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#69C9B4] text-[#69C9B4] hover:bg-[#69C9B4] hover:text-white bg-transparent">
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
