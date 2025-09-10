'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { smartChatbotAnswers, SmartChatbotAnswersOutput } from '@/ai/flows/smart-chatbot-answers';
import { Send, Bot, User, MessageSquare, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IGenLogo } from '../icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-bot-message',
      text: 'Xin chào! Tôi là trợ lý AI của iGen. Tôi có thể giúp gì cho bạn?',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const scrollableView = scrollAreaRef.current.querySelector('div');
        if (scrollableView) {
            scrollableView.scrollTo({ top: scrollableView.scrollHeight, behavior: 'smooth' });
        }
    }
  };

  useEffect(() => {
    if (isOpen) {
        setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
        const productInformation = "iGen Technology cung cấp các giải pháp marketing toàn diện ứng dụng AI, bao gồm thiết kế website, sáng tạo nội dung, chatbot bán hàng và hệ thống phân phối tự động. Mục tiêu của chúng tôi là kiến tạo một cỗ máy marketing hoàn chỉnh, giải phóng chủ doanh nghiệp khỏi các công việc vận hành phức tạp.";
        
        const result: SmartChatbotAnswersOutput = await smartChatbotAnswers({
            customerInquiry: inputValue,
            productInformation,
        });
        
        const botMessage: Message = {
            id: `bot-${Date.now()}`,
            text: result.chatbotAnswer,
            sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
        console.error('Error fetching chatbot answer:', error);
        const errorMessage: Message = {
            id: `bot-error-${Date.now()}`,
            text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
            sender: 'bot',
        };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Mở cửa sổ chat"
        >
          <MessageSquare className="h-8 w-8 text-primary-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full w-full flex-col p-0 sm:max-w-md"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="flex-shrink-0 border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <IGenLogo className="h-6 w-6 text-primary" />
                <SheetTitle className="text-lg font-semibold">Chat với iGen Technology</SheetTitle>
            </div>
          </div>
        </SheetHeader>
        <div className="flex-grow overflow-hidden">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="flex flex-col gap-4 p-4">
                {messages.map((message) => (
                    <div
                    key={message.id}
                    className={cn(
                        'flex items-end gap-2',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                    >
                    {message.sender === 'bot' && (
                        <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                        </Avatar>
                    )}
                    <div
                        className={cn(
                        'max-w-[80%] rounded-lg p-3 text-sm',
                        message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        )}
                    >
                        {message.text}
                    </div>
                     {message.sender === 'user' && (
                        <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                        </Avatar>
                    )}
                    </div>
                ))}
                {isTyping && (
                    <div className="flex items-end gap-2 justify-start">
                         <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                        </Avatar>
                        <div className="flex items-center space-x-1 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                            <span className="text-xs">Đang soạn</span>
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                    </div>
                )}
                </div>
            </ScrollArea>
        </div>
        <div className="flex-shrink-0 border-t p-4">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập tin nhắn..."
              autoComplete="off"
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isTyping}>
              <Send className="h-5 w-5" />
              <span className="sr-only">Gửi</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
