import { Quote } from 'lucide-react';

export function VisionSection() {
  return (
    <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-headline">
            Không chỉ là Dịch vụ, Chúng tôi là Đối tác Thực chiến
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            "Mục tiêu của <span className="text-[#00d3f3] font-semibold">iGen Technology</span> là phá vỡ rào cản công nghệ, trang bị cho doanh nghiệp Việt những lợi thế cạnh tranh sắc bén. Khi làm việc với chúng tôi, bạn đang tìm thấy một đối tác chiến lược, thấu hiểu và cam kết đồng hành trên con đường phát triển bền vững."
          </p>
        </div>
      </div>
    </section>
  );
}
