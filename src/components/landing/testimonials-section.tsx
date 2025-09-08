'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "iGen Technology đã thay đổi hoàn toàn cách chúng tôi tiếp cận marketing. Hệ thống tự động của họ giúp chúng tôi tiết kiệm hàng chục giờ mỗi tuần.",
    name: 'Nguyễn Minh Tuấn',
    company: 'CEO, ABC Corp',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU3MzE0MzA1fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    quote: "Các giải pháp AI rất thông minh và hiệu quả. Đội ngũ hỗ trợ thì chuyên nghiệp và thấu hiểu. Rất khuyến khích!",
    name: 'Trần Ngọc Lan',
    company: 'Marketing Manager, XYZ Ltd.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMGZlbWFsZXxlbnwwfHx8fDE3NTczMTQzMzR8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    quote: "Nhờ có iGen, chúng tôi đã có thể tập trung hoàn toàn vào sản phẩm cốt lõi của mình mà không phải lo lắng về việc tìm kiếm khách hàng mới.",
    name: 'Lê Quốc Hùng',
    company: 'Founder, Startup FastGo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU3MzE0MzA1fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline text-foreground">
          Khách hàng nói gì về iGen Technology?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col items-center justify-between p-6 text-center space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground flex-grow">"{testimonial.quote}"</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
