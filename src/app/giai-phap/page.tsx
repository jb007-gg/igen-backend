import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Megaphone, PenTool, Globe } from 'lucide-react';
import Link from 'next/link';

const strategicSteps = [
  {
    phase: 'Giai đoạn 1: Chẩn đoán Toàn diện & Xác định Lợi thế Cạnh tranh',
    points: [
      '"Khám sức khỏe" Marketing Tổng thể: Chúng tôi tiến hành phân tích sâu rộng toàn bộ hệ thống marketing của bạn, đặc biệt trên các kênh Social Media, để xác định chính xác đâu là điểm mạnh, điểm yếu và những cơ hội bị bỏ lỡ.',
      'Giải mã Thị trường và Đối thủ: Cung cấp một bức tranh toàn cảnh về thị trường, phân tích sâu các đối thủ cạnh tranh để tìm ra "khoảng trống" và lợi thế khác biệt mà chỉ riêng bạn có thể chiếm lĩnh.',
      'Xây dựng Chân dung Khách hàng "Vàng": Chúng tôi giúp bạn xác định và thấu hiểu sâu sắc nhóm khách hàng lý tưởng – những người không chỉ mua hàng mà còn trở thành người hâm mộ trung thành của thương hiệu.',
    ],
  },
  {
    phase: 'Giai đoạn 2: Kiến tạo "Tấm bản đồ" Tăng trưởng',
    points: [
      'Xây dựng Kế hoạch Marketing Tổng thể: Cung cấp một bản kế hoạch chi tiết, không chỉ là định hướng mà là một "kim chỉ nam" cho mọi hoạt động marketing, từ xây dựng thương hiệu, truyền thông đến phát triển sản phẩm.',
      'Lộ trình Hành động Rõ ràng & Khả thi: Biến chiến lược thành các bước đi cụ thể theo từng giai đoạn (3 tháng, 6 tháng, 1 năm), kèm theo đề xuất phân bổ ngân sách thông minh để tối ưu hóa hiệu quả đầu tư.',
      'Thiết kế Chiến lược Định vị Thương hiệu: Giúp thương hiệu của bạn có một tiếng nói riêng, một cá tính khác biệt và một vị thế vững chắc trong tâm trí khách hàng.',
    ],
  },
  {
    phase: 'Giai đoạn 3: Hiện thực hóa Chiến lược bằng Công nghệ',
    points: [
      'Tích hợp Công nghệ AI & Tự động hóa như một Lợi thế Cốt lõi: Chúng tôi không chỉ tư vấn "nên làm gì", mà còn trực tiếp tích hợp và vận hành các công nghệ tiên tiến (AI tạo nội dung, Chatbot tự động, Hệ thống đăng bài thông minh) vào hoạt động của bạn.',
      'Giải phóng Doanh nghiệp khỏi Gánh nặng Vận hành: Với vai trò là đối tác vận hành công nghệ, chúng tôi giúp bạn tự động hóa các quy trình lặp lại, giải phóng nguồn lực để bạn tập trung hoàn toàn vào chuyên môn kinh doanh cốt lõi.',
      'Đồng hành Giám sát & Cố vấn Thực chiến: Chúng tôi không "bàn giao rồi đi". Đội ngũ chuyên gia của iGen Technology sẽ liên tục đồng hành, giám sát quá trình triển khai và đưa ra những cố vấn kịp thời để đảm bảo chiến lược đi đúng hướng.',
    ],
  },
  {
    phase: 'Giai đoạn 4: Đo lường, Tinh chỉnh & Tối ưu Hóa',
    points: [
      'Xây dựng Hệ thống Đo lường Hiệu quả (KPIs): Chúng tôi giúp bạn thiết lập các chỉ số đo lường rõ ràng để theo dõi "sức khỏe" của chiến dịch và đưa ra quyết định dựa trên dữ liệu, không phải cảm tính.',
      'Tối ưu hóa Liên tục: Dựa trên các số liệu thực tế, chúng tôi sẽ cùng bạn liên tục tinh chỉnh và tối ưu hóa chiến lược để đảm bảo hiệu quả luôn được duy trì và gia tăng theo thời gian.',
    ],
  },
];

const contentCreationPoints = [
  {
    title: 'Công nghệ “Bản sao Số”: Lợi thế Cạnh tranh Không thể Sao chép',
    description: 'Từ ảnh gốc, chúng tôi tạo ra một “Bản sao số” (Digital Twin) hoàn hảo, cho phép AI tái tạo sản phẩm trong mọi bối cảnh với độ chân thực đáng kinh ngạc. Tiết kiệm đến 90% chi phí sản xuất, giải phóng hoàn toàn gánh nặng chi phí thuê người mẫu, studio, ekip. Sản xuất hàng loạt ảnh, video quảng cáo chất lượng cao, tạo ra lợi thế cạnh tranh khác biệt và đẩy nhanh tốc độ ra mắt chiến dịch.',
  },
  {
    title: 'Dịch vụ Sáng tạo Kịch bản & Sản xuất Trọn gói',
    description: 'Đội ngũ chuyên gia của chúng tôi sẽ lên ý tưởng chiến lược, sau đó sử dụng trí tuệ AI để kiến tạo các kịch bản quảng cáo được tối ưu hóa sâu sắc theo thuật toán của từng nền tảng, đảm bảo thông điệp của bạn không chỉ sáng tạo mà còn có khả năng lan tỏa mạnh mẽ nhất.',
  },
  {
    title: 'Chất lượng Đỉnh cao & Quy trình Vượt trội',
    description: 'Mọi sản phẩm đều đạt chất lượng 4K chuyên nghiệp, khẳng định sự sắc nét và đẳng cấp thương hiệu. Một khi AI đã "học" về sản phẩm của bạn, việc tạo ra nội dung cho các chiến dịch sau này diễn ra với tốc độ đáng kinh ngạc.',
  },
];

const autoPostingPoints = [
    {
      title: 'Bộ não Sáng tạo AI: Biến Ý tưởng thành Tầm ảnh hưởng',
      description: 'AI tự động phân tích và biên soạn caption cuốn hút, đồng thời tích hợp bộ hashtag chiến lược đã được kiểm chứng để tối ưu hóa nhằm thu hút tương tác tự nhiên một cách mạnh mẽ nhất. Chấm dứt hoàn toàn áp lực sáng tạo.',
    },
    {
      title: 'Triển khai Chiến lược Nội dung: Kiến tạo Dòng chảy Thông minh & Linh hoạt',
      description: 'Chúng tôi thiết lập một lịch trình được tối ưu hóa và linh hoạt, hoàn toàn phù hợp với mục tiêu và các chiến dịch marketing của bạn. Mục tiêu của chúng tôi là đảm bảo thương hiệu của bạn luôn xuất hiện vào đúng thời điểm, tiếp cận tối đa khách hàng tiềm năng.',
    },
    {
      title: 'Giải pháp Quản lý Trọn gói: Giải phóng Bạn khỏi Thao tác Kỹ thuật',
      description: 'Chúng tôi thiết lập và vận hành hệ thống để quản lý đồng bộ các Trang và Nhóm của bạn. Bạn không cần thao tác kỹ thuật, chỉ cần tập trung vào chiến lược kinh doanh cốt lõi.',
    },
];

const chatbotPoints = [
    {
        title: "Khai mở Doanh thu & Làm chủ Mọi Cơ hội",
        description: "Kiến tạo Cỗ máy Bán hàng Tự vận hành 24/7: Một quy trình hoàn hảo từ tư vấn, chốt đơn đến tạo đơn hàng, được vận hành bởi trí tuệ AI. Phản hồi tức thì ngay trong giây lát, chấm dứt vĩnh viễn tình trạng 'bỏ lỡ khách hàng'."
    },
    {
        title: "Trợ lý AI với Trí tuệ của Chuyên gia",
        description: "Tư vấn như một chuyên gia thực thụ, thấu hiểu sâu sắc nhu cầu khách hàng, giải đáp mọi thắc mắc và kiến tạo cơ hội Upsell thông minh."
    },
    {
        title: "Công nghệ AI Đáng tin cậy",
        description: "Cam kết tuyệt đối không bịa thông tin. Chatbot chỉ trả lời dựa trên dữ liệu được cung cấp, bảo vệ 100% uy tín và hình ảnh thương hiệu. Tự động nhận diện tình huống phức tạp và chuyển giao cho chuyên viên."
    },
    {
        title: "Dấu ấn Thương hiệu",
        description: "Tùy chỉnh giọng văn của chatbot – từ thân thiện, chuyên nghiệp đến hài hước – để mỗi cuộc trò chuyện đều là một tuyên ngôn nhất quán về cá tính và đẳng cấp thương hiệu."
    },
    {
        title: "Vận hành Tinh gọn",
        description: "Toàn bộ thông tin đơn hàng được tự động đồng bộ vào Google Sheet, loại bỏ hoàn toàn sai sót, lãng phí và các công việc thủ công nhàm chán."
    },
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-foreground">
              Giải pháp Marketing Toàn diện iGen Technology
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl">
              Kiến tạo Lợi thế Cạnh tranh Bền vững cho Doanh nghiệp SMEs. Chúng tôi không chỉ bán công cụ. Chúng tôi kiến tạo một cỗ máy tăng trưởng được dẫn dắt bởi chiến lược và vận hành bằng công nghệ.
            </p>
          </div>
        </section>
        
        {/* Strategy Section */}
        <section id="strategy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Megaphone className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                I. Nền tảng Chiến lược: Dịch vụ Tư vấn & Định hướng Kinh doanh
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Bước đầu tiên và quan trọng nhất: Vẽ ra con đường đi đến thành công.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8">
              {strategicSteps.map((step, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{step.phase}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {step.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Creation Section */}
        <section id="content-creation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <PenTool className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                II. Sáng tạo Nội dung bằng AI: Giải pháp "Studio Ảo"
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Nguồn "Nhiên liệu" Vô hạn cho Cỗ máy Marketing. Sau khi có chiến lược, chúng ta cần nguồn nguyên liệu để triển khai.
                </p>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-3">
                {contentCreationPoints.map((point, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{point.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Auto-Posting Section */}
        <section id="auto-posting" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <Globe className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    III. Hệ thống Đăng bài Tự động: Cỗ máy Phân phối
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Đưa Thông điệp Chạm đến Hàng triệu Khách hàng. Có nguyên liệu tốt, cần một hệ thống phân phối hiệu quả.
                    </p>
                </div>
                <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 lg:grid-cols-3">
                    {autoPostingPoints.map((point, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-xl font-bold">{point.title}</h3>
                            <p className="text-muted-foreground">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Chatbot Section */}
        <section id="chatbot" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Bot className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                IV. Chatbot AI Bán hàng: Cỗ máy Chuyển đổi
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Biến Mọi Tương tác thành Cơ hội Doanh thu. Khi đã thu hút được sự chú ý, đây là lúc chuyển đổi.
                </p>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {chatbotPoints.map((point, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{point.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Hệ Sinh thái Marketing Khép kín – Sức mạnh của Sự Cộng hưởng
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
            Bạn không chỉ nhận được các dịch vụ riêng lẻ. Bạn nhận được một cỗ máy marketing khép kín, tự vận hành và khuếch đại lẫn nhau. Đã đến lúc ngừng làm marketing rời rạc. Hãy bắt đầu kiến tạo cỗ máy tăng trưởng của riêng bạn ngay hôm nay.
            </p>
             <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/#contact">
                        Liên hệ tư vấn
                    </Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
