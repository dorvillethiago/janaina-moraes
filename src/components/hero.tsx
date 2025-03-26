import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'
import { hero } from '@/static'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { TextAnimate } from './magicui/text-animate'

const boxColor = '#b8d4db'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden" id='inicio'>
                <section className='relative text-background'>
                    <div className="py-24 md:pb-32 lg:pb-72 lg:pt-36">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:text-left lg:max-w-3xl">
                                <h1 className="mt-8 text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                                    <TextAnimate animation="slideUp" by="word">
                                        {hero.h1}
                                    </TextAnimate>
                                </h1>
                                <p className="mt-8 text-balance text-lg">
                                    <TextAnimate animation="slideUp" by="word">
                                        {hero.h2}
                                    </TextAnimate>
                                </p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <BoxReveal boxColor={boxColor}>
                                        <Button
                                            asChild
                                            variant="default"
                                            size="lg"
                                            className="h-12 bg-accent text-foreground hover:bg-background rounded-full px-10 pl-5 pr-3 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">{hero.actions.main}</span>
                                                <ChevronRight className="ml-1" />
                                            </Link>
                                        </Button>
                                    </BoxReveal>
                                    <BoxReveal boxColor={boxColor}>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 rounded-full px-5 text-base hover:bg-white/50 border-white/20 border backdrop-blur-sm">
                                            <Link href="#link">
                                                <span className="text-nowrap">{hero.actions.secondary}</span>
                                            </Link>
                                        </Button>
                                    </BoxReveal>
                                </div>
                            </div>
                        </div>
                        <Image alt='Hero' width={1920} height={1080} className="rounded-b-4xl absolute -z-10 inset-0 object-cover w-full h-full" src="/content.jpg" />
                        <div className="absolute -z-10 inset-0 bg-primary opacity-70 rounded-b-4xl" />
                    </div>
                </section>
            </main>
        </>
    )
}
