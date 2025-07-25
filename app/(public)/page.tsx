import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
    title: string;
    description: string;
    icon: string;
}

const features: featureProps[] = [
    {
        title: "Interactive Learning",
        description: "Engage with interactive content that makes learning fun and effective.",
        icon: "📚",
    },
    {
        title: "Flexible Access",
        description: "Learn at your own pace with courses available anytime, anywhere.",
        icon: "🌍",
    },
    {
        title: "Expert Instructors",
        description: "Learn from industry experts and gain insights from their experiences.",
        icon: "👨‍🏫",
    },
    {
        title: "Community Support",
        description: "Join a vibrant community of learners and get support when you need it.",
        icon: "🤝",
    },
];

export default function Home() {
  return (
    <>
    <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="outline">The Future of Online Education</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/courses" className={buttonVariants({size: "lg",})}>Explore Courses</Link>
            <Link href="/login" className={buttonVariants({size: "lg", variant: "outline"})}>Sign In</Link>
        </div>
        </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle>
                        {feature.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
            </Card>
        ))}
    </section>
    </>
  );
}
