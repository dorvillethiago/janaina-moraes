import { Cpu, DollarSign, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32" id='sobre'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 text-primary max-w-xl text-4xl font-medium lg:text-5xl">Mais sobre Janaína Moraes.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">
                            Janaína é Administradora, Contadora e Educadora financeira, nativa de Cuibá-MT. Atua no mercado financeiro há mais de 10 anos, com experiência em grandes empresas.
                        </p>
                        <p>Tem MBA em Contabilidade, Auditoria, Gestão Tributária e Gestão Executiva de Negócios, seu maior propósito é ajudar as pessoas.</p>

                        <div className="grid grid-cols-1 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-primary">
                                    <DollarSign className="size-4" />
                                    <h3 className="text-sm font-medium">Liberdade Financeira</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Janaína te ajuda a conquistar a liberdade financeira através de investimentos de baixo risco que não te deixam no vermelho e garantem prosperidade.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-75% md:block" />
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/content.jpg" className="hidden -scale-x-100 object-cover rounded-[12px] dark:block h-[200px]" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/content.jpg" className="rounded-[12px] -scale-x-100 object-cover object-left shadow dark:hidden h-[400px]" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
