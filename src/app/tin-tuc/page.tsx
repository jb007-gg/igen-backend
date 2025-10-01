import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const samplePosts = [
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
];

export default function BlogPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Tin Tức & Cập Nhật
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Nơi chia sẻ kiến thức, kinh nghiệm và những cập nhật mới nhất từ iGen Technology.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {samplePosts.map((post) => (
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
                    <CardDescription>{post.date} by {post.author}</CardDescription>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
