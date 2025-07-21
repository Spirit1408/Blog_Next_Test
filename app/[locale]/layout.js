import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getTranslations } from "../../lib/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const translations = await getTranslations(locale);
  
  return {
    title: `${translations.header.logo} - Multilingual Next.js Blog`,
    description: "A multilingual blog built with Next.js featuring SSR, SSG, and i18n support",
  };
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'uk' }
  ];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const translations = await getTranslations(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Header locale={locale} translations={translations} />
        
        <main style={{ flex: 1 }}>
          {children}
        </main>
        
        <Footer translations={translations} />
      </body>
    </html>
  );
}
