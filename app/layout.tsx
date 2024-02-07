import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
   subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  })

export const metadata: Metadata = {
  title: 'AccessiVerse',
  description: 'AccessiVerse is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
