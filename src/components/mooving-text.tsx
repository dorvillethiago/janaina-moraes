import { VelocityScroll } from "./magicui/scroll-based-velocity";

export default function MoovingText() {
    return <div className="relative my-8 flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll numRows={2} className="font-lora md:text-5xl text-lg text-primary">CONTABILIDADE • AMOR • </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
}