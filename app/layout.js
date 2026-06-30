import "./globals.css";

import Script from "next/script";
import { Cormorant_Garamond, Mulish } from "next/font/google";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const bodyFont = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

const GA_MEASUREMENT_ID = "G-SJSGXWE3BE";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.martamartinezestetica.com";

const businessName = "Marta Martínez Sáez";
const phone = "+34676239789";
const address = {
  street: "C. de Garay, 16",
  locality: "La Almunia de Doña Godina",
  region: "Zaragoza",
  postalCode: "50100",
  country: "ES"
};
const mapUrl = "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marta Martínez Sáez | Maquillaje y Estética en La Almunia (Zaragoza)",
    template: "%s | Marta Martínez Sáez"
  },
  description:
    "Centro de maquillaje y estética en La Almunia de Doña Godina (Zaragoza), especializado en cuidado oncológico. Tratamientos faciales y corporales, depilación, cejas, pestañas, manicura y pedicura. Atención personalizada con cita previa.",
  applicationName: businessName,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  category: "beauty",
  keywords: [
    "maquillaje profesional",
    "centro de estética La Almunia",
    "estética Zaragoza",
    "cuidado oncológico",
    "maquillaje oncológico",
    "tratamientos faciales",
    "Glow Reset 360",
    "presoterapia",
    "depilación láser SHR",
    "diseño de cejas",
    "lifting de pestañas",
    "manicura",
    "pedicura",
    "La Almunia de Doña Godina"
  ],
  alternates: {
    canonical: "/"
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: businessName,
    title: "Marta Martínez Sáez | Maquillaje y Estética",
    description:
      "Maquillaje y estética con atención personalizada en La Almunia de Doña Godina. Especialistas en cuidado oncológico, tratamientos faciales y corporales.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Marta Martínez Sáez · Maquillaje y Estética"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marta Martínez Sáez | Maquillaje y Estética",
    description:
      "Centro de maquillaje y estética especializado en cuidado oncológico en La Almunia de Doña Godina (Zaragoza).",
    images: ["/logo.jpg"]
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg"
  }
};

export const viewport = {
  themeColor: "#007a53",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#business`,
  name: businessName,
  alternateName: "Marta Martínez Sáez | Maquillaje y Estética",
  description:
    "Centro de maquillaje y estética especializado en cuidado oncológico en La Almunia de Doña Godina (Zaragoza).",
  url: siteUrl,
  image: `${siteUrl}/logo.jpg`,
  logo: `${siteUrl}/logo.jpg`,
  telephone: phone,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Efectivo, Tarjeta",
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country
  },
  hasMap: mapUrl,
  areaServed: {
    "@type": "City",
    name: "La Almunia de Doña Godina"
  },
  makesOffer: [
    "Tratamientos faciales",
    "Glow Reset 360°",
    "Presoterapia",
    "Depilación con cera y láser SHR",
    "Diseño de cejas y lifting de pestañas",
    "Manicura y pedicura",
    "Tarjetas de regalo"
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service }
  }))
};

const glowResetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${siteUrl}/#glow-reset`,
  name: "Glow Reset 360°",
  description:
    "Pack facial completo de tres tratamientos (The Reset Cure, Citrus Vita Essence y 3D Collagen) para reiniciar, iluminar y reafirmar la piel.",
  image: `${siteUrl}/logo.jpg`,
  brand: { "@type": "Brand", name: businessName },
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/#glow-reset`,
    price: "199",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${siteUrl}/#business` }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(glowResetJsonLd) }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <FloatingWhatsApp />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
