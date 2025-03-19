import Features from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Information from "@/components/information";
import LogoCloud from "@/components/logo-cloud";
import { ArrowRight } from "lucide-react";

export default function Page() {
    return <>
        <HeroSection />
        <Features />
        <LogoCloud />
        <Information title="Uma contabilidade criada para descomplicar a burocracia para você! " description={
            [
                'Com mais de 10 anos de atuação, nossos profissionais são capacitados para atender as demandas burocráticas da sua empresa, e para falar a língua que você entende! ',
                'Aqui o nosso foco sempre é na AGILIDADE dos serviços e na ECONOMIA de impostos para os nossos clientes! '
            ]
        } callToAction={{
            href: "#",
            jsx: <>Agendar Consultoria <ArrowRight /></>
        }} imageSrc="/feat-1.jpg" />
        <Information title="Uma contabilidade criada para descomplicar a burocracia para você! " description={
            [
                'Com mais de 10 anos de atuação, nossos profissionais são capacitados para atender as demandas burocráticas da sua empresa, e para falar a língua que você entende! ',
                'Aqui o nosso foco sempre é na AGILIDADE dos serviços e na ECONOMIA de impostos para os nossos clientes! '
            ]
        } callToAction={{
            href: "#",
            jsx: <>Agendar Consultoria <ArrowRight /></>
        }} imageSrc="/feat-2.jpg" invert reverse />
        <FooterSection />
    </>
}