
'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext, PaginationEllipsis } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const samplePosts = [
  // Page 1
  {
    slug: 'ai-trong-marketing',
    title: 'Ứng dụng AI trong Marketing: Xu hướng và Thách thức',
    description: 'Khám phá cách Trí tuệ Nhân tạo đang thay đổi bộ mặt của ngành marketing và những cơ hội mà nó mang lại cho doanh nghiệp.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    imageHint: 'AI marketing',
    author: 'iGen Team',
    date: '30/09/2025',
  },
  {
    slug: 'toi-uu-hoa-chuyen-doi',
    title: '5 Bí quyết Tối ưu hóa Tỷ lệ Chuyển đổi cho Website',
    description: 'Những chiến lược đã được chứng minh giúp bạn biến khách truy cập thành khách hàng thực sự.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    imageHint: 'conversion optimization',
    author: 'iGen Team',
    date: '28/09/2025',
  },
  {
    slug: 'xay-dung-thuong-hieu',
    title: 'Xây dựng Thương hiệu Bền vững trong Kỷ nguyên Số',
    description: 'Làm thế nào để tạo dựng một thương hiệu mạnh mẽ, có uy tín và để lại dấu ấn trong tâm trí khách hàng.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    imageHint: 'brand building',
    author: 'iGen Team',
    date: '25/09/2025',
  },
   {
    slug: 'content-marketing-hieu-qua',
    title: 'Content Marketing Hiệu quả: Tạo Nội dung Giá trị',
    description: 'Tìm hiểu cách sản xuất và phân phối nội dung có giá trị để thu hút và giữ chân khán giả mục tiêu của bạn.',
    imageUrl: 'https://picsum.photos/seed/blog4/600/400',
    imageHint: 'content marketing',
    author: 'iGen Team',
    date: '22/09/2025',
  },
  {
    slug: 'chatbot-ban-hang-tu-dong',
    title: 'Chatbot Bán hàng Tự động: Tương lai của E-commerce',
    description: 'Cách chatbot có thể giúp bạn tự động hóa quy trình bán hàng, chăm sóc khách hàng và tăng doanh thu 24/7.',
    imageUrl: 'https://picsum.photos/seed/blog5/600/400',
    imageHint: 'chatbot ecommerce',
    author: 'iGen Team',
    date: '20/09/2025',
  },
  {
    slug: 'seo-cho-nguoi-moi-bat-dau',
    title: 'SEO cho Người mới bắt đầu: Hướng dẫn Toàn diện',
    description: 'Một hướng dẫn chi tiết từ A-Z giúp bạn hiểu và triển khai các chiến lược SEO cơ bản cho website của mình.',
    imageUrl: 'https://picsum.photos/seed/blog6/600/400',
    imageHint: 'SEO guide',
    author: 'iGen Team',
    date: '18/09/2025',
  },
  // Page 2
  {
    slug: 'social-media-trends',
    title: 'Xu Hướng Social Media 2026: Đâu là Kênh Chủ Đạo?',
    description: 'Phân tích các nền tảng mạng xã hội tiềm năng và cách doanh nghiệp có thể khai thác để tiếp cận khách hàng hiệu quả.',
    imageUrl: 'https://picsum.photos/seed/blog7/600/400',
    imageHint: 'social media',
    author: 'iGen Team',
    date: '15/09/2025',
  },
  {
    slug: 'email-marketing-automation',
    title: 'Tự động hóa Email Marketing: Nuôi dưỡng khách hàng tiềm năng',
    description: 'Cách thiết lập các chuỗi email tự động để xây dựng mối quan hệ và thúc đẩy doanh số một cách bền bỉ.',
    imageUrl: 'https://picsum.photos/seed/blog8/600/400',
    imageHint: 'email automation',
    author: 'iGen Team',
    date: '12/09/2025',
  },
  {
    slug: 'influencer-marketing-roi',
    title: 'Đo lường Hiệu quả (ROI) trong Influencer Marketing',
    description: 'Làm thế nào để biết chiến dịch hợp tác với người ảnh hưởng có thực sự mang lại lợi nhuận cho doanh nghiệp bạn?',
    imageUrl: 'https://picsum.photos/seed/blog9/600/400',
    imageHint: 'influencer marketing',
    author: 'iGen Team',
    date: '10/09/2025',
  },
  {
    slug: 'digital-twin-technology',
    title: 'Công nghệ "Bản sao số" và Ứng dụng trong Quảng cáo Sản phẩm',
    description: 'Khám phá cách công nghệ Digital Twin giúp tạo ra hình ảnh, video sản phẩm chân thực với chi phí tối ưu.',
    imageUrl: 'https://picsum.photos/seed/blog10/600/400',
    imageHint: 'digital twin',
    author: 'iGen Team',
    date: '08/09/2025',
  },
  {
    slug: 'video-marketing-strategy',
    title: 'Chiến lược Video Marketing: Từ YouTube đến TikTok',
    description: 'Xây dựng một chiến lược video đa kênh để tăng nhận diện thương hiệu và thu hút sự chú ý của khách hàng trẻ.',
    imageUrl: 'https://picsum.photos/seed/blog11/600/400',
    imageHint: 'video strategy',
    author: 'iGen Team',
    date: '05/09/2025',
  },
  {
    slug: 'data-privacy-marketing',
    title: 'Bảo mật Dữ liệu trong Marketing: Thách thức và Cơ hội',
    description: 'Trong bối cảnh người dùng ngày càng quan tâm đến quyền riêng tư, làm thế nào để marketing hiệu quả và có đạo đức?',
    imageUrl: 'https://picsum.photos/seed/blog12/600/400',
    imageHint: 'data privacy',
    author: 'iGen Team',
    date: '02/09/2025',
  },
  // Page 3
  {
    slug: 'google-analytics-4-guide',
    title: 'Làm chủ Google Analytics 4: Phân tích Dữ liệu Người dùng',
    description: 'Hướng dẫn chi tiết về cách sử dụng GA4 để hiểu rõ hơn về hành trình của khách hàng trên website của bạn.',
    imageUrl: 'https://picsum.photos/seed/blog13/600/400',
    imageHint: 'analytics data',
    author: 'iGen Team',
    date: '30/08/2025',
  },
  {
    slug: 'metaverse-marketing',
    title: 'Marketing trong Thế giới Metaverse: Cơ hội cho Thương hiệu',
    description: 'Metaverse không còn là khoa học viễn tưởng. Khám phá cách các thương hiệu có thể đi đầu trong không gian mới này.',
    imageUrl: 'https://picsum.photos/seed/blog14/600/400',
    imageHint: 'metaverse vr',
    author: 'iGen Team',
    date: '28/08/2025',
  },
  {
    slug: 'customer-journey-mapping',
    title: 'Xây dựng Bản đồ Hành trình Khách hàng (Customer Journey Map)',
    description: 'Hiểu rõ các điểm chạm và cảm xúc của khách hàng để tạo ra những trải nghiệm vượt trội và đáng nhớ.',
    imageUrl: 'https://picsum.photos/seed/blog15/600/400',
    imageHint: 'customer journey',
    author: 'iGen Team',
    date: '25/08/2025',
  },
  {
    slug: 'gamification-in-marketing',
    title: 'Gamification: Biến Marketing thành Trò chơi Hấp dẫn',
    description: 'Tích hợp các yếu tố game vào chiến dịch marketing để tăng cường sự tương tác và lòng trung thành của khách hàng.',
    imageUrl: 'https://picsum.photos/seed/blog16/600/400',
    imageHint: 'gamification marketing',
    author: 'iGen Team',
    date: '22/08/2025',
  },
  {
    slug: 'livestream-commerce',
    title: 'Livestream Commerce: Xu hướng Bán hàng Trực tuyến Bùng nổ',
    description: 'Cách tận dụng sức mạnh của livestream để tương tác trực tiếp với khách hàng và chốt đơn ngay lập tức.',
    imageUrl: 'https://picsum.photos/seed/blog17/600/400',
    imageHint: 'livestream shopping',
    author: 'iGen Team',
    date: '20/08/2025',
  },
  {
    slug: 'agile-marketing-SMEs',
    title: 'Áp dụng Agile Marketing cho Doanh nghiệp Vừa và Nhỏ (SME)',
    description: 'Làm thế nào để doanh nghiệp của bạn trở nên linh hoạt và thích ứng nhanh với sự thay đổi của thị trường.',
    imageUrl: 'https://picsum.photos/seed/blog18/600/400',
    imageHint: 'agile process',
    author: 'iGen Team',
    date: '18/08/2025',
  },
];

const POSTS_PER_PAGE = 6;

// Helper function to parse DD/MM/YYYY dates
const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedPosts = useMemo(() => {
    return [...samplePosts].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      if (sortOrder === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
  }, [sortOrder]);


  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };


  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black z-0">
                <Image
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxibG9nZ2luZ3xlbnwwfHx8fDE3NTk1NDc1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tin tức"
                    data-ai-hint="blogging news"
                    fill
                    className="object-cover opacity-20"
                />
            </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Tin Tức & Cập Nhật
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-xl">
              Nơi chia sẻ kiến thức, kinh nghiệm và những cập nhật mới nhất từ iGen Technology.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-end mb-8">
               <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sắp xếp theo..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="oldest">Cũ nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/tin-tuc/${post.slug}`} className="block">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      data-ai-hint={post.imageHint}
                      width={600}
                      height={400}
                      className="w-full object-cover aspect-video"
                    />
                  </Link>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                        <Link href={`/tin-tuc/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                        </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.date} by <span className="text-primary">{post.author}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                   <div className="p-6 pt-0">
                     <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/tin-tuc/${post.slug}`} className="group font-bold">
                            Đọc thêm
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                     </Button>
                  </div>
                </Card>
              ))}
            </div>
             <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      aria-disabled={currentPage === 1}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    >
                        Trang trước
                    </PaginationPrevious>
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      aria-disabled={currentPage === totalPages}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                    >
                        Trang sau
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
