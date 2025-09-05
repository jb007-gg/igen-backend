import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const solutions = [
  {
    title: 'Website & Landing Page chuẩn SEO',
    description: 'Nền tảng vững chắc để thu hút và chuyển đổi khách hàng tiềm năng từ Google.',
  },
  {
    title: 'Hệ thống Email Marketing Tự động',
    description: 'Nuôi dưỡng và chăm sóc khách hàng một cách cá nhân hóa, tối ưu hoá vòng đời khách hàng.',
  },
  {
    title: 'Kênh Mạng xã hội Tự động',
    description: 'Xây dựng sự hiện diện thương hiệu mạnh mẽ và tương tác với cộng đồng một cách nhất quán.',
  },
  {
    title: 'Chatbot AI & Automation',
    description: 'Tự động hoá việc trả lời, tư vấn và bán hàng 24/7, không bỏ lỡ bất kỳ khách hàng nào.',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              Giải pháp Marketing toàn diện ứng dụng công nghệ AI
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Chúng tôi tích hợp các công cụ mạnh mẽ nhất thành một hệ thống marketing hoàn chỉnh, vận hành tự động và thông minh, giúp bạn đạt được kết quả vượt trội.
            </p>
            <div className="grid gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-[#00FFFF] hover:text-white bg-transparent">
                <Link href="/giai-phap">Tìm hiểu thêm</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/600/500"
              width="600"
              height="500"
              alt="Marketing Solution Diagram"
              data-ai-hint="marketing system"
              className="overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
