import { featuresSection } from "@/static"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface Feature13Props {
    heading?: string;
    features?: Feature[];
}

const Features = ({
    features = [
        {
            id: "feature-1",
            title: "Abertura e Legalização ",
            description:
                "Nós te ajudamos a ter a sua empresa funcionando de maneira totalmente regularizada, para não haver complicação nas suas atividades. ",
            image: "/feat-4.jpg",
        },
        {
            id: "feature-2",
            title: "Gestão Fiscal",
            description:
                "A gestão fiscal é um fator fundamental para o sucesso do seu negócio. Por meio dela, os nossos especialistas buscam soluções legais para a diminuição dos seus impostos. ",
            image: "/feat-2.jpg",
        }, {
            id: "feature-3",
            title: "Gestão Pessoal",
            description:
                "Cuidar da saúde da sua empresa é cuidar também da situação dos seus colaboradores. E com as nossas soluções, você garante que tudo será assegurado.",
            image: "/feat-3.jpg",
        }, {
            id: "feature-4",
            title: "Gestão Contábil ",
            description:
                "Economize seu tempo, contrate os nossos serviços de gestão contábil e tenha profissionais qualificados assegurando a proteção da sua contabilidade. ",
            image: "/feat-1.jpg",
        },
    ],
}: Feature13Props) => {
    return (
        <section className="lg:-mt-36">
            <div className="container max-w-7xl mx-auto bg-muted p-10 rounded-xl">
                <p className="mb-4 text-primary">{featuresSection.small}</p>
                <h2 className="text-3xl font-medium lg:text-4xl">{featuresSection.header}</h2>
                <div className="mt-10 grid gap-9 lg:grid-cols-2">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col justify-between rounded-lg bg-background"
                        >
                            <div className="flex justify-between gap-10 border-b">
                                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                                    <Button className="w-fit" variant="secondary">
                                        SAIBA MAIS
                                        <ArrowRight />
                                    </Button>
                                    <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                                </div>
                                <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                                    <Image
                                        width={400}
                                        height={400}
                                        src={feature.image}
                                        alt={feature.title}
                                        className="rounded-tr-xl h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-4 text-muted-foreground md:p-8">
                                {feature.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features
