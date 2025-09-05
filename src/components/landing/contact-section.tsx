import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1A1A] text-white">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Sẵn sàng để Thảnh thơi hơn?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:mx-0">
            Hãy để iGen Technology lo việc vận hành công nghệ. Việc của bạn là tập trung vào kinh doanh. Điền thông tin bên dưới, chúng tôi sẽ liên hệ để tư vấn giải pháp phù hợp nhất.
          </p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
