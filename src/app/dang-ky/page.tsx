import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthLayout } from '@/components/auth/auth-layout';
import { GoogleIcon } from '@/components/icons';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Đăng ký</CardTitle>
          <CardDescription>Tạo tài khoản của bạn bằng cách liên kết với Google</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
