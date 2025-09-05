import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function SignInPage() {
  return (
    <AuthLayout>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Đăng nhập</CardTitle>
          <CardDescription>Nhập email của bạn để đăng nhập vào tài khoản</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mật khẩu</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Quên mật khẩu?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Đăng nhập
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Chưa có tài khoản?{' '}
            <Link href="/dang-ky" className="underline">
              Đăng ký
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
