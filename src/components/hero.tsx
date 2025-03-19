import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'
import { hero } from '@/static'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className='relative text-background'>
                    <div className="py-24 md:pb-32 lg:pb-72 lg:pt-36">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">{hero.h1}</h1>
                                <p className="mt-8 text-balance text-lg">{hero.h2}</p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
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
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full hover:text-background hover:bg-background/35 px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">{hero.actions.secondary}</span>
                                        </Link>
                                    </Button>
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
