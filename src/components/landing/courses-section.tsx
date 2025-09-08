import { EmailCaptureForm } from "./email-capture-form";

export function CoursesSection() {
  return (
    <section 
      id="courses" 
      className="relative w-full py-12 md:py-24 lg:py-32 text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib29rc3xlbnwwfHx8fDE3NTc2NTg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080')" }}
      data-ai-hint="books"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container relative z-10 mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Các khoá học về ứng dụng công nghệ AI
          </h2>
          <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed">
            <span className="inline-block rounded-md bg-white/20 px-3 py-1 text-sm font-medium text-white">Coming Soon</span>
          </p>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
            Đăng ký để nhận thông tin sớm nhất về các khoá học thực chiến giúp bạn tự tay làm chủ công nghệ marketing.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <EmailCaptureForm />
        </div>
      </div>
    </section>
  );
}
