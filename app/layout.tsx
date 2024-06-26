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
  title: 'Accessiverse',
  description: 'Accessiverse is the home of Accessibility Community events..',
  icons: {
    icon: '/assets/images/logo.svg'
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
