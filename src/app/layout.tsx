import type { Metadata } from 'next'
import { Inter, Titillium_Web, Poppins } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Logos Empresarial',
  description: 'O futuro da sua empresa esta na Logos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <div className=" relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1"> {children}</div>
          <Footer />
        </div>

      </body>

    </html>
  )
}
