import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Settings2, Sparkles, Zap } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from './ui/button';

export default function Features2() {
    const features = [
        {
            icon: <Zap className="size-6" aria-hidden />,
            title: "Customizable",
            description: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.",
        },
        {
            icon: <Settings2 className="size-6" aria-hidden />,
            title: "You have full control",
            description: "From design elements to functionality, you have complete control to create a unique and personalized experience.",
        },
        {
            icon: <Sparkles className="size-6" aria-hidden />,
            title: "Powered By AI",
            description: "Elements to functionality, you have complete control to create a unique experience.",
        },
        {
            icon: <Sparkles className="size-6" aria-hidden />,
            title: "Powered By AI2",
            description: "Elements to functionality, you have complete control to create a unique experience.",
        },
    ];

    return (
        <section className="bg-primary relative text-background py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 xl:px-0">
                <div className="text-left">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Somos especialistas em diversos setores</h2>
                    <p className="mt-4">Nossas especialidades</p>
                </div>
                <div className="gap-6 mt-16 flex">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
    <Card className="group shadow-zinc-950/5 max-w-[300px]">
        <CardHeader>
            <CardDecorator>{icon}</CardDecorator>
            <h3 className="mt-6 font-medium">{title}</h3>
        </CardHeader>
        <CardContent>
            <p className="text-sm">{description}</p>
            <Button variant="secondary" className="mt-10">
                Saiba mais
                <ArrowRight />
            </Button>
        </CardContent>
    </Card>
);

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
);
