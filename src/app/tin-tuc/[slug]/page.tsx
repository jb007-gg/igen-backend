
import { notFound } from 'next/navigation';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import Link from 'next/link';

// NOTE: In a real application, this data would be fetched from a CMS or database.
const samplePosts = [
  // Page 1
  {
    slug: 'ai-trong-marketing',
    title: 'Ứng dụng AI trong Marketing: Xu hướng và Thách thức',
    description: 'Khám phá cách Trí tuệ Nhân tạo đang thay đổi bộ mặt của ngành marketing và những cơ hội mà nó mang lại cho doanh nghiệp.',
    imageUrl: 'https://picsum.photos/seed/blog1/1200/600',
    imageHint: 'AI marketing',
    author: 'iGen Team',
    date: '30/09/2025',
    content: `
      <p>Trí tuệ nhân tạo (AI) không còn là một khái niệm khoa học viễn tưởng. Nó đã và đang trở thành một công cụ mạnh mẽ, thay đổi sâu sắc cách các doanh nghiệp tiếp cận marketing. Từ việc tự động hóa các tác vụ lặp đi lặp lại đến việc phân tích dữ liệu khách hàng ở quy mô lớn, AI đang mở ra những cơ hội chưa từng có.</p>
      <h3 class="font-bold text-xl my-4">Cá nhân hóa trải nghiệm khách hàng</h3>
      <p>Một trong những ứng dụng đáng chú ý nhất của AI trong marketing là khả năng cá nhân hóa. Bằng cách phân tích hành vi, sở thích và lịch sử mua sắm, AI có thể giúp doanh nghiệp tạo ra những thông điệp, sản phẩm và ưu đãi được "đo ni đóng giày" cho từng khách hàng. Điều này không chỉ làm tăng tỷ lệ chuyển đổi mà còn xây dựng lòng trung thành của khách hàng.</p>
      <h3 class="font-bold text-xl my-4">Tối ưu hóa chiến dịch quảng cáo</h3>
      <p>AI có thể tự động phân tích hiệu suất của các chiến dịch quảng cáo trên nhiều kênh khác nhau. Nó có thể xác định kênh nào mang lại hiệu quả cao nhất, đối tượng nào phản hồi tốt nhất và tự động điều chỉnh ngân sách để tối ưu hóa ROI. Điều này giúp các nhà marketing tiết kiệm thời gian và đưa ra quyết định dựa trên dữ liệu chính xác.</p>
      <h3 class="font-bold text-xl my-4">Thách thức và Cơ hội</h3>
      <p>Tuy nhiên, việc ứng dụng AI cũng đi kèm với những thách thức. Vấn đề về bảo mật dữ liệu, chi phí triển khai ban đầu và sự cần thiết phải có nguồn nhân lực chất lượng cao là những rào cản không nhỏ. Dù vậy, với những lợi ích to lớn mà nó mang lại, các doanh nghiệp không thể đứng ngoài cuộc đua này. Việc đầu tư vào AI marketing hôm nay chính là đầu tư cho tương lai bền vững của doanh nghiệp.</p>
    `,
  },
  {
    slug: 'toi-uu-hoa-chuyen-doi',
    title: '5 Bí quyết Tối ưu hóa Tỷ lệ Chuyển đổi cho Website',
    description: 'Những chiến lược đã được chứng minh giúp bạn biến khách truy cập thành khách hàng thực sự.',
    imageUrl: 'https://picsum.photos/seed/blog2/1200/600',
    imageHint: 'conversion optimization',
    author: 'iGen Team',
    date: '28/09/2025',
    content: `
      <p>Tỷ lệ chuyển đổi (Conversion Rate) là một trong những chỉ số quan trọng nhất đối với bất kỳ website nào. Dưới đây là 5 bí quyết đã được chứng minh giúp bạn cải thiện chỉ số này.</p>
      <h3 class="font-bold text-xl my-4">1. Lời kêu gọi hành động (CTA) rõ ràng</h3>
      <p>Nút CTA của bạn phải nổi bật, dễ nhìn và sử dụng ngôn ngữ mạnh mẽ, thúc đẩy hành động. Thay vì "Gửi đi", hãy thử "Nhận tư vấn miễn phí ngay!".</p>
      <h3 class="font-bold text-xl my-4">2. Tối ưu hóa tốc độ tải trang</h3>
      <p>Không ai thích chờ đợi. Một trang web tải chậm là một trong những nguyên nhân hàng đầu khiến khách hàng rời đi. Sử dụng các công cụ như Google PageSpeed Insights để kiểm tra và cải thiện tốc độ trang.</p>
      <h3 class="font-bold text-xl my-4">3. Sử dụng bằng chứng xã hội (Social Proof)</h3>
      <p>Hiển thị đánh giá của khách hàng, logo của các đối tác uy tín, hoặc các con số thống kê ấn tượng. Điều này giúp xây dựng lòng tin và thuyết phục khách hàng tiềm năng.</p>
      <h3 class="font-bold text-xl my-4">4. Đơn giản hóa biểu mẫu</h3>
      <p>Chỉ yêu cầu những thông tin thực sự cần thiết. Mỗi một trường thông tin thêm vào đều có thể làm giảm tỷ lệ hoàn thành biểu mẫu của người dùng.</p>
      <h3 class="font-bold text-xl my-4">5. Thử nghiệm A/B</h3>
      <p>Đừng bao giờ cho rằng bạn đã biết điều gì là tốt nhất. Hãy liên tục thử nghiệm các phiên bản khác nhau của tiêu đề, hình ảnh, CTA, và bố cục để tìm ra công thức hiệu quả nhất cho đối tượng của bạn.</p>
    `,
  },
   {
    slug: 'xay-dung-thuong-hieu',
    title: 'Xây dựng Thương hiệu Bền vững trong Kỷ nguyên Số',
    description: 'Làm thế nào để tạo dựng một thương hiệu mạnh mẽ, có uy tín và để lại dấu ấn trong tâm trí khách hàng.',
    imageUrl: 'https://picsum.photos/seed/blog3/1200/600',
    imageHint: 'brand building',
    author: 'iGen Team',
    date: '25/09/2025',
    content: `
      <p>Trong một thế giới kỹ thuật số ồn ào, việc xây dựng một thương hiệu bền vững không chỉ là có một logo đẹp. Đó là việc tạo ra một câu chuyện, một bộ giá trị và một trải nghiệm nhất quán mà khách hàng có thể tin tưởng và kết nối.</p>
      <h3 class="font-bold text-xl my-4">Xác định Sứ mệnh và Tầm nhìn</h3>
      <p>Thương hiệu của bạn đại diện cho điều gì? Bạn muốn tạo ra tác động gì cho thế giới? Trả lời những câu hỏi này là nền tảng để xây dựng một thương hiệu có mục đích và có chiều sâu.</p>
      <h3 class="font-bold text-xl my-4">Kể câu chuyện của bạn</h3>
      <p>Mỗi thương hiệu đều có một câu chuyện độc đáo. Đó có thể là câu chuyện về người sáng lập, về nguồn gốc sản phẩm, hay về sứ mệnh phục vụ cộng đồng. Hãy kể câu chuyện đó một cách chân thực và đầy cảm xúc trên mọi kênh truyền thông.</p>
      <h3 class="font-bold text-xl my-4">Tạo ra trải nghiệm nhất quán</h3>
      <p>Từ website, mạng xã hội, đến cách nhân viên của bạn trả lời email - tất cả đều phải phản ánh cá tính và giá trị của thương hiệu. Sự nhất quán tạo ra sự tin cậy và chuyên nghiệp.</p>
    `,
  },
   {
    slug: 'content-marketing-hieu-qua',
    title: 'Content Marketing Hiệu quả: Tạo Nội dung Giá trị',
    description: 'Tìm hiểu cách sản xuất và phân phối nội dung có giá trị để thu hút và giữ chân khán giả mục tiêu của bạn.',
    imageUrl: 'https://picsum.photos/seed/blog4/1200/600',
    imageHint: 'content marketing',
    author: 'iGen Team',
    date: '22/09/2025',
     content: `
      <p>Content is King - câu nói này vẫn còn nguyên giá trị. Nhưng không phải mọi nội dung đều được tạo ra như nhau. Để content marketing hiệu quả, bạn cần tập trung vào việc tạo ra giá trị thực sự cho khán giả của mình.</p>
      <h3 class="font-bold text-xl my-4">Thấu hiểu khán giả</h3>
      <p>Bạn đang viết cho ai? Họ quan tâm đến điều gì? Vấn đề của họ là gì? Chỉ khi bạn hiểu rõ khán giả, bạn mới có thể tạo ra nội dung mà họ thực sự muốn đọc, xem và chia sẻ.</p>
      <h3 class="font-bold text-xl my-4">Đa dạng hóa định dạng</h3>
      <p>Đừng chỉ giới hạn ở các bài viết blog. Hãy thử nghiệm với video, infographic, podcast, webinar, và các định dạng khác để tiếp cận khán giả trên nhiều nền tảng và theo nhiều cách khác nhau.</p>
      <h3 class="font-bold text-xl my-4">Tập trung vào chất lượng hơn số lượng</h3>
      <p>Một bài viết sâu sắc, được nghiên cứu kỹ lưỡng có giá trị hơn nhiều so với mười bài viết hời hợt. Hãy đầu tư thời gian và công sức để tạo ra những nội dung thực sự chất lượng, giải quyết vấn đề cho người đọc.</p>
    `,
  },
  {
    slug: 'chatbot-ban-hang-tu-dong',
    title: 'Chatbot Bán hàng Tự động: Tương lai của E-commerce',
    description: 'Cách chatbot có thể giúp bạn tự động hóa quy trình bán hàng, chăm sóc khách hàng và tăng doanh thu 24/7.',
    imageUrl: 'https://picsum.photos/seed/blog5/1200/600',
    imageHint: 'chatbot ecommerce',
    author: 'iGen Team',
    date: '20/09/2025',
     content: `
      <p>Chatbot đang nhanh chóng trở thành một trợ thủ đắc lực không thể thiếu trong lĩnh vực thương mại điện tử (e-commerce). Khả năng hoạt động 24/7 và xử lý hàng ngàn yêu cầu cùng lúc giúp chatbot giải quyết bài toán quá tải và bỏ lỡ khách hàng.</p>
      <h3 class="font-bold text-xl my-4">Tư vấn và bán hàng tự động</h3>
      <p>Chatbot AI thông minh có thể được huấn luyện để hiểu rõ về sản phẩm, từ đó tư vấn, giới thiệu và thậm chí là chốt đơn hàng một cách tự nhiên như một nhân viên bán hàng thực thụ. Chúng có thể gợi ý các sản phẩm liên quan, thực hiện upsell và cross-sell, gia tăng giá trị trung bình của mỗi đơn hàng.</p>
      <h3 class="font-bold text-xl my-4">Chăm sóc khách hàng tức thì</h3>
      <p>Khách hàng không còn phải chờ đợi để được giải đáp thắc mắc. Chatbot có thể trả lời ngay lập tức các câu hỏi thường gặp về chính sách vận chuyển, đổi trả, tình trạng đơn hàng, giúp giải phóng đội ngũ hỗ trợ để tập trung vào các vấn đề phức tạp hơn.</p>
    `,
  },
  {
    slug: 'seo-cho-nguoi-moi-bat-dau',
    title: 'SEO cho Người mới bắt đầu: Hướng dẫn Toàn diện',
    description: 'Một hướng dẫn chi tiết từ A-Z giúp bạn hiểu và triển khai các chiến lược SEO cơ bản cho website của mình.',
    imageUrl: 'https://picsum.photos/seed/blog6/1200/600',
    imageHint: 'SEO guide',
    author: 'iGen Team',
    date: '18/09/2025',
     content: `
      <p>Tối ưu hóa công cụ tìm kiếm (SEO) là quá trình cải thiện thứ hạng của website trên các công cụ tìm kiếm như Google. Đây là một trong những cách hiệu quả nhất để thu hút lưu lượng truy cập chất lượng cao một cách bền vững.</p>
      <h3 class="font-bold text-xl my-4">Nghiên cứu từ khóa</h3>
      <p>Bước đầu tiên và quan trọng nhất. Bạn cần xác định những từ khóa mà khách hàng tiềm năng của bạn đang sử dụng để tìm kiếm sản phẩm hoặc dịch vụ của bạn. Sử dụng các công cụ như Ahrefs, SEMrush hoặc Google Keyword Planner.</p>
      <h3 class="font-bold text-xl my-4">SEO On-page</h3>
      <p>Bao gồm việc tối ưu hóa các yếu tố ngay trên trang web của bạn: thẻ tiêu đề, mô tả meta, URL, thẻ heading, và chất lượng nội dung. Đảm bảo nội dung của bạn hữu ích, độc đáo và chứa các từ khóa một cách tự nhiên.</p>
      <h3 class="font-bold text-xl my-4">SEO Off-page</h3>
      <p>Chủ yếu là về việc xây dựng các liên kết chất lượng (backlinks) từ các trang web khác trỏ về trang của bạn. Đây là một tín hiệu quan trọng cho Google thấy rằng website của bạn có uy tín và đáng tin cậy.</p>
    `,
  },
  // Page 2
  {
    slug: 'social-media-trends',
    title: 'Xu Hướng Social Media 2026: Đâu là Kênh Chủ Đạo?',
    description: 'Phân tích các nền tảng mạng xã hội tiềm năng và cách doanh nghiệp có thể khai thác để tiếp cận khách hàng hiệu quả.',
    imageUrl: 'https://picsum.photos/seed/blog7/1200/600',
    imageHint: 'social media',
    author: 'iGen Team',
    date: '15/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'email-marketing-automation',
    title: 'Tự động hóa Email Marketing: Nuôi dưỡng khách hàng tiềm năng',
    description: 'Cách thiết lập các chuỗi email tự động để xây dựng mối quan hệ và thúc đẩy doanh số một cách bền bỉ.',
    imageUrl: 'https://picsum.photos/seed/blog8/1200/600',
    imageHint: 'email automation',
    author: 'iGen Team',
    date: '12/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'influencer-marketing-roi',
    title: 'Đo lường Hiệu quả (ROI) trong Influencer Marketing',
    description: 'Làm thế nào để biết chiến dịch hợp tác với người ảnh hưởng có thực sự mang lại lợi nhuận cho doanh nghiệp bạn?',
    imageUrl: 'https://picsum.photos/seed/blog9/1200/600',
    imageHint: 'influencer marketing',
    author: 'iGen Team',
    date: '10/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'digital-twin-technology',
    title: 'Công nghệ "Bản sao số" và Ứng dụng trong Quảng cáo Sản phẩm',
    description: 'Khám phá cách công nghệ Digital Twin giúp tạo ra hình ảnh, video sản phẩm chân thực với chi phí tối ưu.',
    imageUrl: 'https://picsum.photos/seed/blog10/1200/600',
    imageHint: 'digital twin',
    author: 'iGen Team',
    date: '08/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'video-marketing-strategy',
    title: 'Chiến lược Video Marketing: Từ YouTube đến TikTok',
    description: 'Xây dựng một chiến lược video đa kênh để tăng nhận diện thương hiệu và thu hút sự chú ý của khách hàng trẻ.',
    imageUrl: 'https://picsum.photos/seed/blog11/1200/600',
    imageHint: 'video strategy',
    author: 'iGen Team',
    date: '05/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'data-privacy-marketing',
    title: 'Bảo mật Dữ liệu trong Marketing: Thách thức và Cơ hội',
    description: 'Trong bối cảnh người dùng ngày càng quan tâm đến quyền riêng tư, làm thế nào để marketing hiệu quả và có đạo đức?',
    imageUrl: 'https://picsum.photos/seed/blog12/1200/600',
    imageHint: 'data privacy',
    author: 'iGen Team',
    date: '02/09/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  // Page 3
  {
    slug: 'google-analytics-4-guide',
    title: 'Làm chủ Google Analytics 4: Phân tích Dữ liệu Người dùng',
    description: 'Hướng dẫn chi tiết về cách sử dụng GA4 để hiểu rõ hơn về hành trình của khách hàng trên website của bạn.',
    imageUrl: 'https://picsum.photos/seed/blog13/1200/600',
    imageHint: 'analytics data',
    author: 'iGen Team',
    date: '30/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'metaverse-marketing',
    title: 'Marketing trong Thế giới Metaverse: Cơ hội cho Thương hiệu',
    description: 'Metaverse không còn là khoa học viễn tưởng. Khám phá cách các thương hiệu có thể đi đầu trong không gian mới này.',
    imageUrl: 'https://picsum.photos/seed/blog14/1200/600',
    imageHint: 'metaverse vr',
    author: 'iGen Team',
    date: '28/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'customer-journey-mapping',
    title: 'Xây dựng Bản đồ Hành trình Khách hàng (Customer Journey Map)',
    description: 'Hiểu rõ các điểm chạm và cảm xúc của khách hàng để tạo ra những trải nghiệm vượt trội và đáng nhớ.',
    imageUrl: 'https://picsum.photos/seed/blog15/1200/600',
    imageHint: 'customer journey',
    author: 'iGen Team',
    date: '25/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'gamification-in-marketing',
    title: 'Gamification: Biến Marketing thành Trò chơi Hấp dẫn',
    description: 'Tích hợp các yếu tố game vào chiến dịch marketing để tăng cường sự tương tác và lòng trung thành của khách hàng.',
    imageUrl: 'https://picsum.photos/seed/blog16/1200/600',
    imageHint: 'gamification marketing',
    author: 'iGen Team',
    date: '22/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'livestream-commerce',
    title: 'Livestream Commerce: Xu hướng Bán hàng Trực tuyến Bùng nổ',
    description: 'Cách tận dụng sức mạnh của livestream để tương tác trực tiếp với khách hàng và chốt đơn ngay lập tức.',
    imageUrl: 'https://picsum.photos/seed/blog17/1200/600',
    imageHint: 'livestream shopping',
    author: 'iGen Team',
    date: '20/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
  {
    slug: 'agile-marketing-SMEs',
    title: 'Áp dụng Agile Marketing cho Doanh nghiệp Vừa và Nhỏ (SME)',
    description: 'Làm thế nào để doanh nghiệp của bạn trở nên linh hoạt và thích ứng nhanh với sự thay đổi của thị trường.',
    imageUrl: 'https://picsum.photos/seed/blog18/1200/600',
    imageHint: 'agile process',
    author: 'iGen Team',
    date: '18/08/2025',
    content: '<p>Nội dung đang được cập nhật...</p>',
  },
];


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = samplePosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 pt-24 md:py-24 lg:py-32 xl:pt-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-4 text-center">
                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full -mt-16 md:-mt-24">
             <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl">
                     <Image
                        src={post.imageUrl}
                        alt={post.title}
                        data-ai-hint={post.imageHint}
                        width={1200}
                        height={600}
                        className="aspect-video w-full overflow-hidden rounded-lg object-cover shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 border-t">
           <div className="container mx-auto px-4 md:px-6 text-center">
                <Button asChild variant="outline">
                    <Link href="/tin-tuc" className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Quay lại trang tin tức
                    </Link>
                </Button>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    