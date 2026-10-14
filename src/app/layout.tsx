import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/layout/WhatsAppFab';
import MobileTabBar from '@/components/layout/MobileTabBar';
import InteractiveLuxuryBackground from '@/components/common/InteractiveLuxuryBackground';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#F5F1E6',
};

export const metadata: Metadata = {
  title: 'FAIZA AL MARWA COMPANY LTD — Investor License, Manpower, Travel & Digital Services',
  description: 'MISA investor license & Saudi business setup, certified manpower recruitment, international tour packages, corporate visa handling, and digital agency solutions.',
  keywords: [
    'Investor License Saudi Arabia',
    'MISA License',
    'Iqama Renewal Saudi Arabia',
    'International Tour Packages',
    'Manpower Recruitment Saudi Arabia',
    'Digital Marketing Agency Riyadh',
    'Faiza Al Marwa',
  ],
  authors: [{ name: 'FAIZA AL MARWA COMPANY LTD' }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
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
          <MobileTabBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
