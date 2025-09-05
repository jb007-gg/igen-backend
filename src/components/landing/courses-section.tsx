import { EmailCaptureForm } from "./email-capture-form";

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Các khoá học về ứng dụng công nghệ AI
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
            <span className="inline-block rounded-md bg-primary-foreground/20 px-3 py-1 text-sm font-medium">Coming Soon</span>
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
