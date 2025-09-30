
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Welcome to Your Dashboard</CardTitle>
                <CardDescription>
                    This is your central hub for managing your blog content. You can create new posts, edit existing ones, and manage your content all from here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href="/dashboard/blog/create">Create New Post</Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  );
}
