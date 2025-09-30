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
        <AboutSection className="bg-primary text-primary-foreground" innerContainerClassName="border-2 border-primary-foreground" />
        <VisionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
