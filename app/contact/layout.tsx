import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact',
}

export default function ContactLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <section>
            <p>Start Contact</p>
            {children}
            <p>End Contact</p>
        </section>
    )
}
