
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Megaphone, PenTool, Send, Bot } from 'lucide-react';
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
    points: [
      'Từ ảnh gốc, chúng tôi tạo ra một “Bản sao số” (Digital Twin) hoàn hảo, cho phép AI tái tạo sản phẩm trong mọi bối cảnh với độ chân thực đáng kinh ngạc.',
      'Tiết kiệm đến 90% chi phí sản xuất, giải phóng hoàn toàn gánh nặng chi phí thuê người mẫu, studio, ekip.',
      'Sản xuất hàng loạt ảnh, video quảng cáo chất lượng cao, tạo ra lợi thế cạnh tranh khác biệt và đẩy nhanh tốc độ ra mắt chiến dịch.',
    ],
  },
  {
    title: 'Dịch vụ Sáng tạo Kịch bản & Sản xuất Trọn gói',
    points: [
        'Đội ngũ chuyên gia của chúng tôi sẽ lên ý tưởng chiến lược, sau đó sử dụng trí tuệ AI để kiến tạo các kịch bản quảng cáo được tối ưu hóa sâu sắc theo thuật toán của từng nền tảng, đảm bảo thông điệp của bạn không chỉ sáng tạo mà còn có khả năng lan tỏa mạnh mẽ nhất.'
    ],
  },
  {
    title: 'Chất lượng Đỉnh cao & Quy trình Vượt trội',
    points: [
        'Mọi sản phẩm đều đạt chất lượng 4K chuyên nghiệp, khẳng định sự sắc nét và đẳng cấp thương hiệu.',
        'Một khi AI đã "học" về sản phẩm của bạn, việc tạo ra nội dung cho các chiến dịch sau này diễn ra với tốc độ đáng kinh ngạc.'
    ],
  },
];

const autoPostingPoints = [
  {
    title: 'Bộ não Sáng tạo AI: Biến Ý tưởng thành Tầm ảnh hưởng',
    points: [
      "Biến mọi hình ảnh/video thành vũ khí truyền thông: AI tự động phân tích và biên soạn caption cuốn hút, đồng thời tích hợp bộ hashtag chiến lược đã được kiểm chứng để tối ưu hóa nhằm thu hút tương tác tự nhiên một cách mạnh mẽ nhất.",
      "Chấm dứt hoàn toàn áp lực sáng tạo: Chỉ cần cung cấp media, AI sẽ lo phần còn lại. Giải phóng hàng giờ làm việc mỗi ngày để bạn tập trung vào những quyết định chiến lược cấp cao.",
    ],
  },
  {
    title: 'Triển khai Chiến lược Nội dung: Kiến tạo Dòng chảy Thông minh & Linh hoạt',
    points: [
      "Lịch trình đăng bài được cá nhân hóa: Chúng tôi thiết lập một lịch trình được tối ưu hóa và linh hoạt, hoàn toàn phù hợp với mục tiêu và các chiến dịch marketing của bạn, không bị bó buộc vào một khuôn mẫu cố định.",
      "Thống lĩnh không gian số vào 'giờ vàng': Mục tiêu của chúng tôi là đảm bảo thương hiệu của bạn luôn xuất hiện vào đúng thời điểm, tiếp cận tối đa khách hàng tiềm năng. Chúng tôi sẽ liên tục cập nhật và tối ưu hóa hệ thống để phù hợp với thuật toán của từng nền tảng, hướng đến hiệu quả tương tác tối ưu.",
    ],
  },
  {
    title: 'Giải pháp Quản lý Trọn gói: Giải phóng Bạn khỏi Thao tác Kỹ thuật',
    points: [
        "Năng lực quản lý đa kênh mạnh mẽ và linh hoạt: Chúng tôi thiết lập và vận hành hệ thống để quản lý đồng bộ các Trang và Nhóm của bạn. Giải pháp được thiết kế để dễ dàng mở rộng quy mô khi doanh nghiệp của bạn phát triển. Bạn không cần thao tác kỹ thuật, chỉ cần tập trung vào chiến lược kinh doanh cốt lõi.",
        "Quy trình làm việc tinh gọn chưa từng có: Chúng tôi chịu trách nhiệm toàn bộ khâu hậu cần kỹ thuật, tự động biến nội dung của bạn thành những bài đăng chiến lược trên các kênh social. Đối với bạn, quy trình chỉ đơn giản là thấy kết quả."
    ],
  },
];

const chatbotPoints = [
    {
        title: "Khai mở Doanh thu & Làm chủ Mọi Cơ hội",
        points: [
            "Kiến tạo Cỗ máy Bán hàng Tự vận hành 24/7: Một quy trình hoàn hảo từ tư vấn, chốt đơn đến tạo đơn hàng, được vận hành bởi trí tuệ AI.",
            "Làm chủ Mọi Điểm chạm Khách hàng: Phản hồi tức thì ngay trong giây lát, chấm dứt vĩnh viễn tình trạng 'bỏ lỡ khách hàng'."
        ]
    },
    {
        title: "Trợ lý AI với Trí tuệ của Chuyên gia",
        points: [
            "Tư vấn như một chuyên gia thực thụ: Công nghệ AI thấu hiểu sâu sắc nhu cầu khách hàng, kiến tạo những cuộc trò chuyện giá trị.",
            "Phá vỡ Mọi Rào cản Mua hàng: AI được huấn luyện để trở thành chuyên gia về sản phẩm của bạn, giải đáp mọi thắc mắc.",
            "Kiến tạo Cơ hội Upsell thông minh: AI phân tích hành vi để gợi ý các sản phẩm 'đo ni đóng giày', khéo léo đề xuất để gia tăng giá trị đơn hàng."
        ]
    },
    {
        title: "Công nghệ AI Đáng tin cậy",
        points: [
            "Cam kết tuyệt đối không bịa thông tin: Chatbot chỉ trả lời dựa trên dữ liệu được cung cấp, bảo vệ 100% uy tín thương hiệu.",
            "Chuyển giao liền mạch: Tự động nhận diện tình huống phức tạp và chuyển giao cho chuyên viên."
        ]
    },
    {
        title: "Dấu ấn Thương hiệu & Vận hành Tinh gọn",
        points: [
            "Tùy chỉnh giọng văn của chatbot – từ thân thiện, chuyên nghiệp đến hài hước – để mỗi cuộc trò chuyện đều là một tuyên ngôn nhất quán về cá tính thương hiệu.",
            "Toàn bộ thông tin đơn hàng được tự động đồng bộ vào Google Sheet, loại bỏ hoàn toàn sai sót và công việc thủ công."
        ]
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
              Chúng tôi không chỉ bán công cụ. Chúng tôi kiến tạo một cỗ máy tăng trưởng được dẫn dắt bởi chiến lược và vận hành bằng công nghệ.
            </p>
          </div>
        </section>
        
        <section id="strategy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Megaphone className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                I. Nền tảng Chiến lược: Dịch vụ Tư vấn & Định hướng Kinh doanh
              </h2>
               <p className="max-w-2xl text-muted-foreground">
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

        <section id="content-creation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <PenTool className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    II. Sáng tạo Nội dung bằng AI: Giải pháp "Studio Ảo"
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    Nguồn "Nhiên liệu" Vô hạn cho Cỗ máy Marketing. Sau khi có chiến lược, chúng ta cần nguồn nguyên liệu để triển khai.
                </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8">
                {contentCreationPoints.map((point, index) => (
                    <Card key={index} className="bg-card">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {point.points.map((p, pIndex) => (
                             <div key={pIndex} className="flex items-start gap-4">
                               <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                               <p className="text-muted-foreground">{p}</p>
                             </div>
                           ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section id="auto-posting" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <Send className="h-12 w-12 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        III. Hệ thống Đăng bài Tự động: Cỗ máy Phân phối
                    </h2>
                     <p className="max-w-2xl text-muted-foreground">
                        Có nguyên liệu tốt, cần một hệ thống phân phối hiệu quả để đưa thông điệp chạm đến hàng triệu khách hàng.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid gap-8">
                  {autoPostingPoints.map((point, index) => (
                    <Card key={index} className="bg-card">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {point.points.map((p, pIndex) => (
                          <div key={pIndex} className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <p className="text-muted-foreground">{p}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
        </section>

         <section id="chatbot" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <Bot className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    IV. Chatbot AI Bán hàng: Cỗ máy Chuyển đổi
                </h2>
                 <p className="max-w-2xl text-muted-foreground">
                    Biến Mọi Tương tác thành Cơ hội Doanh thu. Khi đã thu hút được sự chú ý, đây là lúc chuyển đổi.
                </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8">
                {chatbotPoints.map((point, index) => (
                    <Card key={index} className="bg-card">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {point.points.map((p, pIndex) => (
                             <div key={pIndex} className="flex items-start gap-4">
                               <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                               <p className="text-muted-foreground">{p}</p>
                             </div>
                           ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section id="summary" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Tổng kết: Hệ Sinh thái Marketing Khép kín – Sức mạnh của Sự Cộng hưởng
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                    Bạn không chỉ nhận được các dịch vụ riêng lẻ. Bạn nhận được một cỗ máy marketing khép kín, tự vận hành và khuếch đại lẫn nhau.
                </p>
                <div className="mx-auto mt-8 max-w-4xl text-left space-y-4 text-muted-foreground">
                    <p>✅ Nền tảng Chiến lược vẽ ra con đường đi và mục tiêu cần đến.</p>
                    <p>✅ Sáng tạo Nội dung AI cung cấp nguồn "nhiên liệu" hình ảnh, video vô hạn và chất lượng cao.</p>
                    <p>✅ Hệ thống Đăng bài Tự động đưa "nhiên liệu" đó đến với hàng triệu khách hàng tiềm năng.</p>
                    <p>✅ Chatbot AI Bán hàng đứng ở cuối phễu, sẵn sàng chuyển đổi mọi sự quan tâm thành cơ hội bán hàng.</p>
                </div>
            </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Sẵn sàng Kiến tạo Cỗ máy Tăng trưởng?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
              Đã đến lúc ngừng làm marketing rời rạc. Hãy bắt đầu kiến tạo cỗ máy tăng trưởng của riêng bạn ngay hôm nay.
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

    