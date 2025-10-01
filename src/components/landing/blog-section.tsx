'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  },
  {
    slug: 'toi-uu-hoa-chuyen-doi',
    title: '5 Bí quyết Tối ưu hóa Tỷ lệ Chuyển đổi cho Website',
    description: 'Những chiến lược đã được chứng minh giúp bạn biến khách truy cập thành khách hàng thực sự.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    imageHint: 'conversion optimization',
  },
  {
    slug: 'xay-dung-thuong-hieu',
    title: 'Xây dựng Thương hiệu Bền vững trong Kỷ nguyên Số',
    description: 'Làm thế nào để tạo dựng một thương hiệu mạnh mẽ, có uy tín và để lại dấu ấn trong tâm trí khách hàng.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    imageHint: 'brand building',
  },
];


export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
              Bài viết mới nhất
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cập nhật những kiến thức, xu hướng và phân tích chuyên sâu về marketing, công nghệ và kinh doanh.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 mt-12">
          {samplePosts.map((post, index) => (
            <Card key={index} className="flex flex-col bg-card border-border rounded-lg shadow-sm h-full overflow-hidden">
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
                <CardTitle className="font-bold text-xl line-clamp-2">
                    <Link href={`/tin-tuc/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/tin-tuc/${post.slug}`} className="group font-bold">
                        Đọc thêm
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild>
                <Link href="/tin-tuc">
                    Xem tất cả bài viết
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
