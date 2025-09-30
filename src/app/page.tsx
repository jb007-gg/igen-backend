import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { ServicesSection } from '@/components/landing/services-section';
import { SolutionsSection } from '@/components/landing/solutions-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { VisionSection } from '@/components/landing/vision-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <CoursesSection />
        <AboutSection 
          className="bg-primary text-primary-foreground" 
          title="Hệ sinh thái Làm việc – Học tập – Khởi nghiệp iGen Office"
          description="iGen Office - không gian khởi nguồn ý tưởng và nuôi dưỡng thành công. Dành cho cá nhân, sinh viên, học sinh, freelancer và start-up, iGen mang đến môi trường hiện đại – linh hoạt – đầy cảm hứng để bạn học tập, làm việc và phát triển."
          buttonText="Tìm hiểu thêm"
          buttonLink="/igen-office"
        />
        <VisionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
