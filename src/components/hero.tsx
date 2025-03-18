import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'
import { ArrowRight, Landmark, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BoxReveal } from './magicui/box-reveal'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden pt-12" id='inicio'>
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-24">
                        <div className="relative mx-auto flex max-w-6xl flex-col-reverse px-6 lg:block">
                            <div className="mx-auto max-w-lg lg:ml-0 lg:w-[50%] text-left">
                                <BoxReveal boxColor={"#2a51404e"} duration={0.5}>
                                    <Link href="/" className="rounded-(--radius) flex w-fit items-center gap-2 border p-1 pr-3 mx-auto lg:mx-0">
                                        <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">Contadora</span>
                                        <span className="text-sm">Janaína Moraes</span>
                                        <span className="bg-(--color-border) block h-4 w-px" />

                                        <Landmark className="size-4" />
                                    </Link>
                                </BoxReveal>
                                <BoxReveal boxColor={"#2a51404e"} duration={0.5}>
                                    <h1 className="mt-4 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-8 xl:text-7xl">Aprenda a controlar seu <strong className=''>dinheiro.</strong></h1>
                                </BoxReveal>
                                <BoxReveal boxColor={"#2a51404e"} duration={0.7}>
                                    <p className="mt-8 max-w-2xl text-pretty text-lg">Leciono aulas práticas de educação financeira para transformar sua relação com o dinheiro. Aprenda a planejar, economizar e investir de forma inteligente.</p>
                                </BoxReveal>
                                <BoxReveal boxColor={"#2a51404e"} duration={0.7}>
                                    <div className="mt-12 flex flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-5 text-base">
                                            <Link href="#">
                                                <span>Agendar Consultoria</span>
                                                <Mail className="size-4 translate-y-[1px]" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="secondary"
                                            className="text-base">
                                            <Link href="#">
                                                <span>Conheça mais</span>
                                                <ArrowRight className="size-4 translate-y-[1px]" />
                                            </Link>
                                        </Button>
                                    </div>
                                </BoxReveal>
                            </div>
                            <Image
                                className="z-10 drop-shadow-xl rounded-2xl order-first ml-auto mt-14 w-full object-cover lg:absolute lg:inset-0 lg:-right-20 lg:-top-20 lg:order-last lg:h-max lg:w-[50%] lg:object-contain"
                                src="/chair.png"
                                alt="Janaína Moraes"
                                height="922"
                                width="739"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
