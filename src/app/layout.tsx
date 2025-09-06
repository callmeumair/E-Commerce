import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ecom-web3.vercel.app'),
  title: {
    default: 'Ecom - Modern E-Commerce Platform',
    template: '%s | Ecom'
  },
  description: 'A modern, decentralized e-commerce platform built with Next.js, TypeScript, and Web3 integration.',
  keywords: ['ecommerce', 'web3', 'blockchain', 'ethereum', 'decentralized'],
  authors: [{ name: 'Ecom Team' }],
  creator: 'Ecom Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecom-web3.vercel.app',
    title: 'Ecom - Modern E-Commerce Platform',
    description: 'A modern, decentralized e-commerce platform built with Next.js, TypeScript, and Web3 integration.',
    siteName: 'Ecom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecom - Modern E-Commerce Platform',
    description: 'A modern, decentralized e-commerce platform built with Next.js, TypeScript, and Web3 integration.',
    creator: '@ecom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
