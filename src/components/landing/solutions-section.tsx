import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const solutions = [
  {
    title: 'Tư vấn chiến lược marketing ',
    description: 'Vẽ ra con đường đi và mục tiêu cần đến, đảm bảo mọi nguồn lực được đầu tư đúng hướng.',
  },
  {
    title: 'Website & Landing Page chuẩn SEO',
    description: 'Nền tảng vững chắc để thu hút và chuyển đổi khách hàng tiềm năng từ Google.',
  },
  {
    title: 'Sáng tạo nội dung chuyên nghiệp với Studio AI',
    description: 'Cung cấp "nhiên liệu" marketing (hình ảnh, video, bài viết) vô hạn, chất lượng cao.',
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl font-headline text-foreground">
            Giải pháp Marketing Toàn diện <span className="text-[#00d3f3]">iGen</span>: Một Bản thiết kế. Một Đối tác. Một Kết quả Toàn diện
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Chúng tôi mang đến một hệ sinh thái marketing khép kín, nơi mọi chi tiết đều được tính toán để phục vụ một mục tiêu duy nhất: Giải phóng hoàn toàn thời gian và tâm trí của bạn để tập trung vào việc lãnh đạo doanh nghiệp tiến về phía trước.
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
              <Button asChild className="bg-[#00d3f3] text-black hover:bg-[#00d3f3]/90 group">
                <Link href="/giai-phap">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxBcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1NzMxMDI2OXww&ixlib=rb-4.1.0&q=80&w=1080"
              width="600"
              height="500"
              alt="Marketing Solution Diagram"
              data-ai-hint="Artificial intelligence"
              className="overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
