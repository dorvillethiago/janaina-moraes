import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl text-primary">O que dizem nossos clientes</h2>
                    <p>Confira os depoimentos de clientes que conquistaram liberdade financeira e sucesso com nossa assessoria contábil.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid bg-gradient-to-br from-primary/25 to-background grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img className="h-6 w-fit dark:invert" src="/logos/cliente1.svg" alt="Logo Cliente 1" height="24" width="auto" />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">A consultoria contábil nos ajudou a organizar nossas finanças e pagar menos impostos legalmente. Serviço excelente!</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clientes/maria.webp" alt="Maria Souza" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>MS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Maria Souza</cite>
                                        <span className="text-muted-foreground block text-sm">Empreendedora</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2 bg-gradient-to-br from-primary/25">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Com a assessoria financeira, aprendi a investir e planejar meu futuro com segurança.</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clientes/carlos.webp" alt="Carlos Oliveira" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>CO</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Carlos Oliveira</cite>
                                        <span className="text-muted-foreground block text-sm">Profissional Autônomo</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className='bg-gradient-to-br from-primary/25'>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Ótimo serviço! Minha empresa agora está totalmente regularizada e com a contabilidade em dia.</p>
                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clientes/ana.webp" alt="Ana Pereira" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>AP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Ana Pereira</cite>
                                        <span className="text-muted-foreground block text-sm">Empresária</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed bg-gradient-to-br from-primary/25">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Profissionais altamente qualificados e atenciosos. Recomendo a todos que precisam de uma contabilidade eficiente.</p>
                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clientes/roberto.webp" alt="Roberto Lima" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>RL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Roberto Lima</p>
                                        <span className="text-muted-foreground block text-sm">CEO, Startup X</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
