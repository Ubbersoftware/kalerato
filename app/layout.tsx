import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from '@/components/providers/ReactQueryProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KaLerato Holdings - Digital Billboard & Streetpole Advertising',
  description: 'Transform your advertising with KaLerato Holdings\' premium digital billboard and streetpole solutions. Dynamic, engaging, results-driven outdoor advertising.',
  authors: [{ name: 'KaLerato Holdings' }],
  keywords: ['digital billboard', 'streetpole advertising', 'outdoor advertising', 'digital signage', 'billboard rental', 'advertising solutions'],
  openGraph: {
    title: 'KaLerato Holdings - Digital Billboard & Streetpole Advertising',
    description: 'Transform your advertising with KaLerato Holdings\' premium digital billboard and streetpole solutions. Dynamic, engaging, results-driven outdoor advertising.',
    type: 'website',
    images: ['/lovable-uploads/55e76238-1068-48fc-8fcc-253e3bcb5566.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KaLerato Holdings - Digital Billboard Advertising',
    description: 'Transform your advertising with premium digital billboard and streetpole solutions.',
    images: ['/lovable-uploads/55e76238-1068-48fc-8fcc-253e3bcb5566.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}