import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Globe, Megaphone } from 'lucide-react';

const services = [
    {
        icon: <Megaphone className="h-8 w-8 text-[#69C9B4]" />,
        title: 'Phân phối Đa kênh Tự động',
        description: 'Tự động hoá việc phân phối nội dung trên các nền tảng mạng xã hội, email và các kênh khác.',
    },
    {
        icon: <PenTool className="h-8 w-8 text-[#69C9B4]" />,
        title: 'Sáng tạo Nội dung bằng AI',
        description: 'Tự động tạo ra các nội dung marketing hấp dẫn, từ bài viết blog đến các bài đăng trên mạng xã hội.',
    },
    {
        icon: <Globe className="h-8 w-8 text-[#69C9B4]" />,
        title: 'Thiết kế Website chuyên nghiệp',
        description: 'Xây dựng các trang web và trang đích được tối ưu hóa cho SEO và tỷ lệ chuyển đổi, được hỗ trợ bởi AI.',
    },
    {
        icon: <PenTool className="h-8 w-8 text-[#69C9B4]" />,
        title: 'Sáng tạo nội dung truyền thông bằng AI',
        description: 'Tự động tạo ra các nội dung marketing hấp dẫn, từ bài viết blog đến các bài đăng trên mạng xã hội.',
    },
    {
        icon: <Globe className="h-8 w-8 text-[#69C9B4]" />,
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
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-card border-border rounded-lg shadow-sm">
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
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-[#00FFFF] hover:text-white bg-transparent">
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
