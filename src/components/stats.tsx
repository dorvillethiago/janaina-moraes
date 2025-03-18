export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Mais que números, resultados.</h2>
                    <p>Transforme seus sonhos em planos e seus planos em realidade com a nossa marca de finanças.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+1000</div>
                        <p>Clientes Satisfeitos</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">300</div>
                        <p>Clientes Ativos</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+2000</div>
                        <p>Serviços Realizados</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
