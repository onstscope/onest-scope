// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Almarai } from 'next/font/google';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollUpButton from './components/ScrollUpButton';
import Script from 'next/script';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

// بيانات الـ SEO
export const metadata = {
  title: ' Onset Scope',
  description: 'اكتشف أفضل الوحدات السكنية للبيع في حي الرمال بالرياض. ضمن بنية تحتية حديثة، ضمانات كاملة، وخدمات متكاملة لتجربة شراء مريحة وآمنة.',
  keywords: [
    'عقارات الرياض',
    'شقق للبيع حي الرمال',
    'وحدات سكنية للبيع',
    'Onset Scope',
    'بيع عقارات الرياض'
  ].join(','),
  openGraph: {
    title: 'شقق ووحدات سكنية للبيع في حي الرمال – الرياض | Onset Scope',
    description: 'أفضل الوحدات السكنية للبيع في حي الرمال مع ضمانات وبنية تحتية حديثة.',
    url: 'https://onestscope.com/riyadh-hai-alrimal',
    images: [
      {
        url: 'https://onestscope.com/logo.webp',
        width: 600,
        height: 60,
        alt: 'شعار Onset Scope'
      }
    ],
    siteName: 'Onset Scope',
  },
  twitter: {
    card: 'summary',
    title: 'شقق ووحدات سكنية للبيع في حي الرمال – الرياض',
    description: 'اكتشف أفضل الوحدات السكنية للبيع في حي الرمال بالرياض مع ضمانات كاملة.',
    images: ['https://onestscope.com/logo.webp'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`
          ${almarai.className}
          flex flex-col min-h-screen text-white bg-gray-900
        `}
      >
        <Navbar />

        {/* === Snap Pixel === */}
        <Script
          id="snap-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              ;(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){
                a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)
              };a.queue=[];var s="script";r=t.createElement(s);
              r.async=!0;r.src=n;p=t.getElementsByTagName(s)[0];
              p.parentNode.insertBefore(r,p)
              })(window,document,"https://sc-static.net/scevent.min.js");

              snaptr("init", "fea14130-0593-4dc1-a413-c05dc033b078", {});
              snaptr("track", "PAGE_VIEW");
            `,
          }}
        />
        {/* === End Snap Pixel === */}

        <Script id="ld+json" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Onset Scope",
            "url": "https://onestscope.com",
            "logo": "https://onestscope.com/logo.webp",
            "description": "أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات في حي الرمال – الرياض",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "شارع المثال",
              "addressLocality": "حي الرمال",
              "addressRegion": "الرياض",
              "postalCode": "12345",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.7136,
              "longitude": 46.6753
            },
            "telephone": "+966-501402723",
            "areaServed": {
              "@type": "City",
              "name": "الرياض"
            },
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
          }
          `}
        </Script>

        {children}
        <WhatsAppButton />
        <ScrollUpButton />
        <Footer />
      </body>
    </html>
  );
}
