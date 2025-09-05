'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Địa chỉ email không hợp lệ.' }),
});

export function EmailCaptureForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
        title: 'Đăng ký thành công!',
        description: 'Cảm ơn bạn đã đăng ký. Chúng tôi sẽ gửi thông tin sớm nhất.',
        });
        form.reset();
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem className="flex-1">
                <FormControl>
                    <Input
                        placeholder="Nhập email của bạn"
                        {...field}
                        className="bg-white text-black placeholder:text-gray-500"
                    />
                </FormControl>
                <FormMessage className="text-red-200" />
            </FormItem>
            )}
        />
        <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Đăng ký nhận tin
        </Button>
        </form>
    </Form>
  );
}
