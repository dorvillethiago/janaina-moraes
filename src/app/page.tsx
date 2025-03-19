import Cta from "@/components/cta";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Information from "@/components/information";
import LogoCloud from "@/components/logo-cloud";
import WallOfLoveSection from "@/components/testimonials";
import { cta, information1, information2 } from "@/static";

export default function Page() {
    return <>
        <HeroSection />
        <Features />
        <Information {...information1} />
        <LogoCloud />
        <Information {...information2} />
        <WallOfLoveSection />
        <Cta {...cta} />
        <FooterSection />
    </>
}