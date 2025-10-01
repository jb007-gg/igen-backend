import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Workflow, Zap, Target, Rocket, Handshake } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const brandStoryContent = [
  {
    icon: <Zap className="h-8 w-8 text-destructive" />,
    title: "Phần 1: Nỗi Đau Chung",
    content: [
      "Có phải anh/chị đang cảm thấy quen thuộc với vòng luẩn quẩn này không? Mỗi sáng thức dậy, anh/chị nhìn vào cỗ máy marketing của mình và thấy một mớ chắp vá hỗn độn. Một bên làm website, một đơn vị chạy quảng cáo, một nhân sự viết nội dung. Chúng không 'nói chuyện' với nhau, vận hành rời rạc như những bánh răng cọc cạch.",
      "Tiền thì vẫn 'đốt' đều đặn, nhưng kết quả thu về chỉ là sự im lặng. Thời gian và tâm huyết thì đổ vào không kể xiết... để rồi chỉ nhận lại sự mệt mỏi và cảm giác bất lực.",
      "Anh/chị biết rằng mình có một sản phẩm tuyệt vời, một tầm nhìn lớn lao. Nhưng con đường đưa chúng đến với khách hàng lại lạc lối trong sương mù, rối như tơ vò."
    ]
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Phần 2: Nguồn Gốc Từ Thất Bại & Lời Hứa Sắt Đá",
    content: [
      "Chúng tôi thấu hiểu cảm giác đó đến từng tế bào. Bởi câu chuyện của iGen Technology không bắt đầu từ một ý tưởng kinh doanh hoàn hảo. Nó được sinh ra từ tro tàn của một thất bại.",
      "Người sáng lập của chúng tôi, cũng từng là một founder startup, đã nếm trải tất cả những 'nỗi đau' đó. Anh ấy đã từng 'đốt tiền' vào những agency đắt đỏ mà không hiểu sản phẩm. Đã từng cố gắng kết nối 5-7 phần mềm khác nhau để rồi chúng 'xung đột' và gây ra thảm họa.",
      "Từ chính khoảnh khắc tận cùng của sự thất vọng đó, một lời hứa sắt đá đã được sinh ra: 'Sẽ không bao giờ để điều này xảy ra một lần nữa. Phải có một cách làm tốt hơn.'"
    ]
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Phần 3: Tia Sáng Khai Mở & Tầm Nhìn Mới",
    content: [
        "Với lăng kính của một nhà đầu tư, người sáng lập của chúng tôi nhận ra một sự thật cốt lõi: Vấn đề không phải là làm TỪNG THỨ tốt hơn. Vấn đề là TẤT CẢ đang hoạt động riêng lẻ.",
        "Các doanh nghiệp không cần thêm một công cụ. Họ cần một dàn nhạc trưởng. Và AI chính là vị nhạc trưởng thiên tài đó – bộ não trung tâm có thể chỉ huy mọi 'nhạc công' (Chiến lược, Sáng tạo, Phân phối, Bán hàng) cùng nhau tấu lên một bản giao hưởng tăng trưởng hài hòa và mạnh mẽ.",
        "Một tầm nhìn mới đã ra đời: Thay vì xây dựng những cỗ máy chắp vá, chúng tôi sẽ kiến tạo nên một Hệ Sinh Thái Marketing Tự Vận Hành Hoàn Chỉnh."
    ]
  },
  {
    icon: <Workflow className="h-8 w-8 text-green-500" />,
    title: "Phần 4: Giải Pháp Toàn Diện – Một Dòng Chảy Sức Mạnh",
    content: [
        "Hệ sinh thái của chúng tôi không phải là một tập hợp các dịch vụ. Đó là một dòng chảy duy nhất, thông suốt, biến ý tưởng của anh/chị thành doanh thu một cách tự động:",
        "1. Khởi nguồn từ TRÍ TUỆ: Dùng AI để phân tích và xác định con đường chiến lược rõ ràng.",
        "2. Chuyển hóa thành NĂNG LƯỢNG: 'Studio AI' kiến tạo ra nguồn 'nhiên liệu' marketing vô tận.",
        "3. Khuếch đại thành TẦM ẢNH HƯỞNG: 'Cỗ máy phân phối' tự động đưa thông điệp chạm đến hàng triệu khách hàng.",
        "4. Kết tinh thành DOANH THU: 'Đội quân AI Sales' tinh nhuệ 24/7 tự động tư vấn, chốt đơn và xử lý đơn hàng."
    ]
  },
  {
    icon: <Target className="h-8 w-8 text-indigo-500" />,
    title: "Phần 5: Lời Hứa Về Tương Lai – Trao Trả Lại Sự Tự Do",
    content: [
        "Giá trị cốt lõi mà chúng tôi thực sự muốn trao trả lại cho anh/chị lớn lao hơn kết quả kinh doanh: THỜI GIAN VÀ SỰ TỰ DO.",
        "Tự do khỏi những thao tác vụn vặt, để anh/chị quay về đúng với vai trò của một người chủ. An tâm rời khỏi văn phòng, có một bữa tối trọn vẹn bên gia đình, mà không cần phải canh điện thoại.",
        "iGen Technology không chỉ bán một giải pháp marketing. Chúng tôi trao trả lại cho anh/chị quyền làm chủ thực sự: làm chủ doanh nghiệp, làm chủ thời gian, và làm chủ cuộc sống của chính mình."
    ]
  },
  {
    icon: <Handshake className="h-8 w-8 text-cyan-500" />,
    title: "Phần 6: Tầm Nhìn & Di Sản Của Chúng Tôi",
    content: [
        "Tầm nhìn của chúng tôi là một tương lai nơi mọi doanh nghiệp SME tại Việt Nam đều có thể chuyển đổi số thành công, và sức mạnh của AI không còn là đặc quyền của các tập đoàn khổng lồ.",
        "Di sản mà chúng tôi theo đuổi là trở thành người tiên phong 'dân chủ hóa sức mạnh marketing', phá vỡ những rào cản về chi phí, công nghệ và nhân sự phức tạp.",
        "Khi anh/chị chọn iGen Technology, anh/chị đang cùng chúng tôi đặt một viên gạch vào nền móng của một nền kinh tế số Việt Nam vững mạnh và công bằng hơn cho tất cả mọi người."
    ]
  }
];

export default function BrandStoryPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxqb3VybmV5fGVufDB8fHx8MTc1NzY2MzMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brand story background"
              data-ai-hint="journey vision"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Câu Chuyện Thương Hiệu <span className="text-[#00d3f3]">iGen</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Sinh Ra Từ Thất Bại, Lớn Lên Bằng Sứ Mệnh.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8">
              {brandStoryContent.map((section, index) => (
                <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="mb-4">{section.icon}</div>
                    <CardTitle className="text-2xl font-bold text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-center">
                     {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground md:text-lg">
                        {paragraph.replace('iGen Technology', '<span class="text-[#00d3f3] font-semibold">iGen Technology</span>')}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng Đồng hành cùng chúng tôi?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
              Chào mừng anh/chị đến với cuộc cách mạng. Hãy để <span className="text-[#00d3f3] font-semibold">iGen Technology</span> trở thành đối tác chiến lược, giúp bạn kiến tạo cỗ máy tăng trưởng bền vững.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
