import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sudo LOL - DevOps & AI Education',
  description: 'Learn DevOps, AI, and modern technology with comprehensive tutorials, roadmaps, and premium courses. Master the tools that power the future.',
  keywords: 'DevOps, AI, Machine Learning, Docker, Kubernetes, AWS, Azure, GCP, CI/CD, Infrastructure as Code',
  authors: [{ name: 'sudo LOL' }],
  creator: 'sudo LOL',
  publisher: 'sudo LOL',
  openGraph: {
    title: 'sudo LOL - DevOps & AI Education',
    description: 'Learn DevOps, AI, and modern technology with comprehensive tutorials, roadmaps, and premium courses.',
    url: 'https://sudolol.com',
    siteName: 'sudo LOL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'sudo LOL - DevOps & AI Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sudo LOL - DevOps & AI Education',
    description: 'Learn DevOps, AI, and modern technology with comprehensive tutorials, roadmaps, and premium courses.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#f8fafc',
            },
          }}
        />
      </body>
    </html>
  )
}

