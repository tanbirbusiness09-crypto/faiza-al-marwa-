import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/layout/WhatsAppFab';
import InteractiveLuxuryBackground from '@/components/common/InteractiveLuxuryBackground';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'FAIZA AL MARWA COMPANY LTD — Travel, Business, Visa, Manpower & Digital Services',
  description: 'Integrated travel & Umrah packages, Saudi business setup, corporate visa handling, certified manpower recruitment, and full-service digital agency solutions.',
  keywords: [
    'Saudi Business Setup',
    'MISA License',
    'Iqama Renewal Saudi Arabia',
    'Umrah Packages Riyadh',
    'Manpower Recruitment Saudi Arabia',
    'Digital Marketing Agency Riyadh',
    'Faiza Al Marwa',
  ],
  authors: [{ name: 'FAIZA AL MARWA COMPANY LTD' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" data-lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-paper text-text antialiased selection:bg-gold selection:text-ink min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <InteractiveLuxuryBackground />
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <WhatsAppFab />
        </LanguageProvider>
      </body>
    </html>
  );
}
