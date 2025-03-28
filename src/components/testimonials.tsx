import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/static'

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16">
                <div className="mx-auto max-w-6xl px-3 xl:px-0">
                    <div className="text-center ">
                        <h2 className="text-title text-3xl font-semibold">A confiança dos nossos clientes!</h2>
                        <p className="text-body mt-4">O que os nossos clientes tem dito sobre nós</p>
                    </div>
                    <div className="mt-16 gap-18 lg:gap-4 md:mt-22 flex justify-center flex-wrap">
                        {testimonials.map(({ name, role, quote, image, mainDescription }, index) => (
                            <div key={index} className="space-y-3 drop-shadow-xl">
                                <Card key={name}>
                                    <CardContent className="flex flex-col gap-2 relative items-center justify-center text-center max-w-[370px] min-h-[100px] max-h-[250px]">
                                        <Avatar className="size-20 absolute border -top-16">
                                            <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                            <AvatarFallback>ST</AvatarFallback>
                                        </Avatar>
                                        <div className='mt-10'>
                                            <h2 className='font-medium'>{mainDescription}</h2>

                                            <blockquote className="mt-3">
                                                <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                            </blockquote>
                                            <br />

                                            <h3 className="font-medium">{name}</h3>

                                            <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
