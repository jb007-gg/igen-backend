import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type AboutSectionProps = {
  id?: string;
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
};

export function AboutSection({
  id,
  className,
  title,
  description,
  buttonText,
  buttonLink = '/cau-chuyen-thuong-hieu-igen',
  imageUrl = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8dGVjaG5vbG9neXxlbnwwfHx8fDE3NTczMDM1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  imageAlt = 'Abstract graphic',
  imageHint = 'order chaos',
}: AboutSectionProps) {
  const isPrimaryBg = className?.includes('bg-primary');

  const defaultTitle =
    'Ra đời từ Thực chiến, Dành cho Chủ Doanh nghiệp.';
  const defaultDescription =
    'Chúng tôi nhận thấy các chủ doanh nghiệp tâm huyết đang phải làm marketing một cách rời rạc và lãng phí nguồn lực. <span class="text-[#00d3f3] font-semibold">iGen Technology</span> được sinh ra để thay đổi điều đó, với triết lý công nghệ phải đơn giản, tin cậy và hiệu quả.';
  const defaultButtonText = 'Tìm hiểu thêm';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;

  return (
    <section
      id={id || 'about'}
      className={cn(
        'w-full py-12 md:py-24 lg:py-32',
        isPrimaryBg ? 'bg-primary text-primary-foreground' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              'space-y-6',
              isPrimaryBg && 'bg-white rounded-lg shadow-lg p-8'
            )}
          >
            <div className="space-y-4">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline text-black"
                dangerouslySetInnerHTML={{ __html: finalTitle }}
              />

              <p
                className={cn(
                  'max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed',
                  isPrimaryBg ? 'text-muted-foreground' : 'text-muted-foreground'
                )}
                 dangerouslySetInnerHTML={{ __html: finalDescription }}
              />
            </div>
            <div
              className={cn('flex', isPrimaryBg ? 'justify-center' : 'justify-start')}
            >
              <Button
                asChild
                className="bg-[#00d3f3] text-black hover:bg-[#00d3f3]/90 group"
              >
                <Link href={buttonLink}>
                  {buttonText || defaultButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={imageUrl}
              width="600"
              height="400"
              alt={imageAlt}
              data-ai-hint={imageHint}
              className="overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
