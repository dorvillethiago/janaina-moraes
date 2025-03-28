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
            title: "Abertura e Legalização",
            description:
                "Nós te ajudamos a ter a sua empresa funcionando de maneira totalmente regularizada, para não haver complicação nas suas atividades. ",
            image: "/feat-4.jpg",
        },
        {
            id: "feature-2",
            title: "Gestão Fiscal",
            description:
                "A gestão fiscal é um fator fundamental para o sucesso do seu negócio. Por meio dela, os nossos especialistas buscam soluções legais para a diminuição dos seus impostos.",
            image: "/feat-2.jpg",
        }, {
            id: "feature-3",
            title: "Gestão Pessoal",
            description:
                "Cuidar da saúde da sua empresa é cuidar também da situação dos seus colaboradores. E com as nossas soluções, você garante que tudo será assegurado.",
            image: "/feat-3.jpg",
        }, {
            id: "feature-4",
            title: "Gestão Contábil",
            description:
                "Economize seu tempo, contrate os nossos serviços de gestão contábil e tenha profissionais qualificados assegurando a proteção da sua contabilidade.",
            image: "/feat-1.jpg",
        },
    ],
}: Feature13Props) => {
    return (
        <section className="lg:-mt-36" id="servicos">
            <div className="container max-w-7xl text-center mx-auto bg-muted drop-shadow-2xl p-4 lg:p-10 rounded-xl">
                <p className="mb-4 text-primary">{featuresSection.small}</p>
                <h2 className="text-3xl font-medium lg:text-4xl">{featuresSection.header}</h2>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex max-w-[260px] flex-col items-center gap-3 justify-between rounded-lg bg-background p-2"
                        >
                            <Image
                                width={400}
                                height={400}
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-full size-36 object-cover"
                            />
                            <h3 className="text-xl">{feature.title}</h3>
                            <p className="text-sm opacity-70 text-balance">
                                {feature.description}
                            </p>
                            <Button className="px-10 mt-4" variant="accent">
                                SAIBA MAIS
                                <ArrowRight />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features
