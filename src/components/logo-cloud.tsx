import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="relative py-6">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={200}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://yt3.googleusercontent.com/U-ggX2hexlWmMxES7z2zgN7UApUY29YuoXvVT0DcSYQpdOx-UuD-IU_fuRfgPnI5WmJWXksR_w=s900-c-k-c0x00ffffff-no-rj"
                                    alt="Receita Federal"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://tm.ibxk.com.br/2023/02/14/14222832154001.jpg?ims=1200x675"
                                    alt="Simples Nacional"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkx1cx-YKS7xIG2mE7w3BvH_ne1fbswaIuA&s"
                                    alt="Febraban"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mkAJVObJdyamGeUymPBCmMD__yieL5D7cA&s"
                                    alt="B3"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://pa.lojavirtualsebrae.com.br/static/images/card_box.jpg"
                                    alt="SEBRAE"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert rounded-lg"
                                    src="https://cfc.org.br/wp-content/uploads/2024/01/af_logo_horizontal_crc-al_jun_14_curvas-1024x725.png"
                                    alt="CRC/AL"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
