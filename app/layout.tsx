'use client'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { ReactNode, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const firaCode = Fira_Code({
    variable: '--font-fira-code',
    subsets: ['latin'],
    weight: '400',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    const router = useRouter()
    return (
        <html lang='uz' className={`${firaCode.variable} ${firaCode.variable} h-full antialiased`}>
            <body className='min-h-full flex flex-col'>
                <div className='navbar-1'>
                    <button onClick={() => router.push('/')}>Bosh sahifa</button>
                    <button onClick={() => router.push('/about')}>Men haqimda</button>
                    <button onClick={() => router.push('/contact')}>Bog'lanish</button>
                </div>
                {/* <div className='navbar'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>Men haqimda</Link>
                    <Link href='/contact'>Bog'lanish</Link>
                </div> */}
                {children}
                <p>Footer</p>
            </body>
        </html>
    )
}
