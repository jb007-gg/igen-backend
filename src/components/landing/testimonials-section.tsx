'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "iGen Technology đã thay đổi hoàn toàn cách chúng tôi tiếp cận marketing. Hệ thống tự động của họ giúp chúng tôi tiết kiệm hàng chục giờ mỗi tuần.",
    name: 'Nguyễn Văn A',
    company: 'CEO, ABC Corp',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: "Các giải pháp AI rất thông minh và hiệu quả. Đội ngũ hỗ trợ thì chuyên nghiệp và thấu hiểu. Rất khuyến khích!",
    name: 'Trần Thị B',
    company: 'Marketing Manager, XYZ Ltd.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote: "Nhờ có iGen, chúng tôi đã có thể tập trung hoàn toàn vào sản phẩm cốt lõi của mình mà không phải lo lắng về việc tìm kiếm khách hàng mới.",
    name: 'Lê Văn C',
    company: 'Founder, Startup FastGo',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline text-foreground">
          Khách hàng nói gì về iGen Technology?
        </h2>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                        <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 pt-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
