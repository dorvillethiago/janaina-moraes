import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Cta10Props {
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

const Cta = ({
    heading = "Ready to Get Started?",
    description = "Join thousands of satisfied customers using our platform to build amazing websites.",
    buttons = {
        primary: {
            text: "Get Started",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "Learn More",
            url: "https://www.shadcnblocks.com",
        },
    },
}: Cta10Props) => {
    return (
        <section className="pb-32">
            <div className="container mx-auto relative">
                <Image src="/feat-4.jpg" alt="cta" layout="fill" objectFit="cover" className="-z-10 rounded-xl" />
                <div className="absolute -z-10 inset-0 bg-primary opacity-70 rounded-xl" />
                <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
                    <div className="flex-1">
                        <h3 className="mb-3 text-2xl text-background font-semibold md:mb-4 md:text-4xl lg:mb-6">
                            {heading}
                        </h3>
                        <p className="text-background/80 lg:text-lg">{description}</p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {buttons.secondary && (
                            <Button variant="accent" asChild>
                                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                            </Button>
                        )}
                        {buttons.primary && (
                            <Button variant="secondary" asChild>
                                <a href={buttons.primary.url}>{buttons.primary.text}</a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
