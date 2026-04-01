import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About',
}

export default function AboutLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <section>
            <p className='text-red'>Start About</p>
            {children}
            <p className='text-red'>End About</p>
        </section>
    )
}
