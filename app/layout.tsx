import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Saab Electric | Professional Electrical Contracting in Toronto',
    template: '%s | Saab Electric',
  },
  description:
    'Experienced electrical professionals serving the GTA since 2000. Residential, commercial, and industrial electrical services. WSIB certified.',
  keywords: [
    'electrical contractor',
    'Toronto electrician',
    'GTA electrical services',
    'residential electrical',
    'commercial electrical',
    'industrial electrical',
    'WSIB certified electrician',
    'Saab Electric',
  ],
  authors: [{ name: 'Saab Electric Inc.' }],
  creator: 'Saab Electric Inc.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://saabelectric.ca',
    siteName: 'Saab Electric',
    title: 'Saab Electric | Professional Electrical Contracting in Toronto',
    description:
      'Experienced electrical professionals serving the GTA since 2000. Residential, commercial, and industrial electrical services.',
    images: [
      {
        url: '/images/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Saab Electric',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saab Electric | Professional Electrical Contracting in Toronto',
    description:
      'Experienced electrical professionals serving the GTA since 2000. Residential, commercial, and industrial electrical services.',
    images: ['/images/logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
