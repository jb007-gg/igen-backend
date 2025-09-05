import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/components/auth/auth-layout';
import { GoogleIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Tạo tài khoản</CardTitle>
          <CardDescription>
            Nhập thông tin của bạn để tạo tài khoản
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Nhập lại mật khẩu</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Tạo tài khoản
            </Button>
             <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Hoặc tiếp tục với</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
               <GoogleIcon className="mr-2 h-4 w-4" />
              Đăng ký với Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Đã có tài khoản?{' '}
            <Link href="/dang-nhap" className="underline">
              Đăng nhập
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
