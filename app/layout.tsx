import { Fira_Code } from 'next/font/google'
import './globals.css'
import { ReactNode, use } from 'react'
import { Metadata } from 'next'
import Navbar from '@/component/navbar'

const fira_code = Fira_Code({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Next.js 13.4 App Router',
    description: 'Next.js 13.4 App Router bilan yaratilgan dastur',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='uz' className={fira_code.className}>
            <body className='min-h-full flex flex-col'>
                <Navbar />
                {children}
                <p className='footer-text'>Footer</p>
            </body>
        </html>
    )
}
