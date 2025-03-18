import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import MoovingText from "@/components/mooving-text";
import StatsSection from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Page() {
    return <>
        <Hero />
        <LogoCloud />
        <StatsSection />
        <ContentSection />
        <MoovingText />
        <Features />
        <Testimonials />
        <CallToAction />
        <FooterSection />
    </>
}