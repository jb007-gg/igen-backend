
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const content = [
  {
    type: 'paragraph',
    text: '<span class="text-[#00d3f3] font-semibold">iGen Office</span> ra đời như một bến đỗ của sáng tạo và khởi nghiệp, nơi mỗi cá nhân – từ học sinh, sinh viên, freelancer cho đến doanh nghiệp – đều tìm thấy cho mình không gian để tập trung, cộng đồng để đồng hành và cơ hội để bứt phá. Tại đây, công việc không chỉ là làm việc, mà còn là hành trình khai mở tiềm năng và hiện thực hóa giấc mơ.',
  },
  {
    type: 'paragraph',
    image: {
      src: 'https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/5.png?alt=media&token=df14c32a-d008-4c27-8cb0-29de8cbff6e6',
      alt: 'Community creating the future',
      hint: 'community future',
    },
  },
  {
    type: 'paragraph',
    text: '<span class="text-[#00d3f3] font-semibold">iGen Office</span> – nơi ý tưởng hóa thành giá trị, nơi cộng đồng kiến tạo nên tương lai.',
  },
  {
    type: 'heading',
    text: '💡 Ngọn hải đăng ý tưởng',
  },
  {
    type: 'paragraph',
    text: 'Có những nơi chỉ đơn thuần để làm việc, và cũng có những nơi thắp sáng hành trình. <span class="text-[#00d3f3] font-semibold">iGen Office</span> không phải chỉ là văn phòng cho thuê, mà là ngọn hải đăng ý tưởng – nơi dẫn lối, soi sáng và tiếp thêm năng lượng cho những ai đang tìm kiếm điểm tựa để khởi đầu hoặc bứt phá.',
    image: {
      src: 'https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/2.png?alt=media&token=e32c4c68-7b56-4745-ab58-9917534ea113',
      alt: 'Lighthouse of ideas',
      hint: 'idea lighthouse',
    },
  },
  {
    type: 'paragraph',
    text: 'Tại <span class="text-[#00d3f3] font-semibold">iGen Office</span>, cá nhân, sinh viên, học sinh, freelancer và doanh nghiệp không chỉ tìm thấy bàn làm việc, mà còn tìm thấy một cộng đồng biết lắng nghe, chia sẻ và nâng đỡ. Ở đây, mỗi ngày làm việc là một lần khởi động niềm tin; mỗi cuộc gặp gỡ là một cánh cửa mở ra cơ hội; và mỗi ước mơ đều có cơ hội trở thành hiện thực.',
  },
  {
    type: 'paragraph',
    text: '<span class="text-[#00d3f3] font-semibold">iGen Office</span> – nơi hội tụ con người, kết nối giá trị, và khởi tạo những chuyến hải trình thành công.',
  },
   {
    type: 'heading',
    text: '🌟 Cộng đồng thành viên iGen Office',
  },
  {
    type: 'paragraph',
    text: 'Ở <span class="text-[#00d3f3] font-semibold">iGen Office</span>, bạn không chỉ tìm thấy một chỗ ngồi, mà còn bước vào một cộng đồng rộng mở – nơi tri thức, cảm hứng và cơ hội giao thoa. Tại đây, mỗi cuộc trò chuyện có thể trở thành nguồn động lực mới, mỗi kết nối có thể mở ra một chặng đường khác biệt. Bạn sẽ có cơ hội gặp gỡ những doanh nghiệp từ nhiều lĩnh vực, lắng nghe những câu chuyện khởi nghiệp đầy cảm hứng, và quan trọng hơn cả – tìm thấy cho mình người bạn đồng hành, người thầy định hướng, hay chính đối tác và khách hàng tri kỷ.',
    image: {
      src: 'https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/1%20(1).png?alt=media&token=c1a69edf-ee78-4b4b-862c-eff7b5860857',
      alt: 'Open community with knowledge and inspiration',
      hint: 'knowledge inspiration',
    },
  },
  {
    type: 'heading',
    text: '💼 Mạng lưới nhân tài iGen Office',
  },
  {
    type: 'paragraph',
    text: 'Chúng tôi tin rằng, thành công của doanh nghiệp bắt đầu từ con người. <span class="text-[#00d3f3] font-semibold">iGen Office</span> tự hào kết nối bạn với một mạng lưới nhân tài trẻ trung, sáng tạo và nhiệt huyết, sẵn sàng đồng hành cùng doanh nghiệp từ những bước đầu tiên đến khi vươn xa. Không chỉ là những ứng viên, đó là những đồng đội biết chia sẻ ước mơ, cùng bạn viết tiếp câu chuyện thành công.',
    image: {
      src: 'https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/4.png?alt=media&token=952d0087-20c9-4a9b-9646-1b42f32a290c',
      alt: 'Network of young and creative talent',
      hint: 'creative talent',
    },
  },
  {
    type: 'paragraph',
    text: '<span class="text-[#00d3f3] font-semibold">iGen Office</span> – nơi không gian làm việc gắn kết với cộng đồng, nơi nhân tài và doanh nghiệp tìm thấy nhau, nơi tương lai được cùng nhau kiến tạo.',
    image: {
      src: 'https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/IMG_0989.DNG?alt=media&token=523b739e-c56d-4c65-b0dd-d8ef460b762f',
      alt: 'Future being built together',
      hint: 'future together',
    },
  },
];

export default function IgenOfficePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="igen-office" className="relative w-full min-h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black z-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/igenius-marketing.firebasestorage.app/o/Thie%CC%82%CC%81t%20ke%CC%82%CC%81%20chu%CC%9Ba%20co%CC%81%20te%CC%82n.png?alt=media&token=aaaddef5-c3c4-4fab-915b-6589958a7b0f"
              alt="iGen Office co-working space"
              data-ai-hint="coworking space"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
              Khám Phá Không Gian <span className="text-[#00d3f3]">iGen Office</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-300 md:text-xl">
              Một ý tưởng dù nhỏ bé, nếu được nuôi dưỡng trong môi trường phù hợp, có thể trở thành ngọn lửa thắp sáng cả hành trình sự nghiệp. Thành công không chỉ đến từ tri thức, công cụ hay vốn liếng, mà còn từ sự kết nối – nơi những con người cùng chung khát vọng gặp nhau, cộng hưởng và tạo nên giá trị vượt ngoài con số lợi nhuận.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              {content.map((item, index) => (
                <div key={index}>
                  {item.type === 'heading' ? (
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline text-center mb-8 mt-12 flex items-center justify-center gap-4">
                      {item.text}
                    </h3>
                  ) : (
                    <>
                      {item.text && (
                        <p
                          className="text-lg text-muted-foreground leading-relaxed text-justify"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                      )}
                      {item.image && (
                        <div className="mt-8 mb-12">
                            <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            data-ai-hint={item.image.hint}
                            width={800}
                            height={500}
                            className="w-full rounded-lg object-cover shadow-lg"
                            />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sẵn sàng để tham gia Cộng đồng <span className="text-[#00d3f3]">iGen</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300 md:text-xl">
              Ghé thăm không gian của chúng tôi hoặc liên hệ để biết thêm chi tiết về các gói thành viên.
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
