import Contact from "@/components/contact";
import Cta from "@/components/cta";
import Features from "@/components/features";
import Features2 from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Information from "@/components/information";
import LogoCloud from "@/components/logo-cloud";
import WallOfLoveSection from "@/components/testimonials";
import { WhatsappCallToAction } from "@/components/whatsapp";
import { cta, information1, information2 } from "@/static";

export default function Page() {
    return <>
        <HeroSection />
        <Features />
        <Information {...information1} />
        <LogoCloud />
        <Features2 />
        <Information {...information2} />
        <WallOfLoveSection />
        <Contact />
        <Cta {...cta} />
        <FooterSection />
        <WhatsappCallToAction />
    </>
}