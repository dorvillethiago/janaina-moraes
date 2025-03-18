import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image alt='Logo' width={922} height={922} className={cn('size-10', className)} src="/logo.png" />
    )
}