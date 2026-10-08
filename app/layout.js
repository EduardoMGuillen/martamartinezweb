import "./globals.css";

import Script from "next/script";
import { Cormorant_Garamond, Mulish } from "next/font/google";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { business, buildJsonLd, siteUrl } from "./siteConfig";

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

const businessName = business.name;
const { latitude, longitude } = business.geo;

const seoTitle = "Centro de Estética en La Almunia de Doña Godina | Marta Martínez Sáez";
const seoDescription =
  "Centro de estética en La Almunia de Doña Godina (Zaragoza): tratamientos faciales, presoterapia, depilación láser SHR, cejas, pestañas, manicura y estética oncológica. Pide cita.";

const shareImage = {
  url: business.heroImage,
  width: 2048,
  height: 1364,
  alt: "Centro de estética Marta Martínez Sáez en La Almunia de Doña Godina"
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Marta Martínez Sáez · Estética en La Almunia"
  },
  description: seoDescription,
  applicationName: businessName,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  category: "beauty",
  keywords: [
    "centro de estética La Almunia",
    "estética La Almunia de Doña Godina",
    "esteticista La Almunia",
    "mejor estética La Almunia",
    "centro de belleza La Almunia",
    "estética Valdejalón",
    "estética Zaragoza",
    "estética oncológica Zaragoza",
    "maquillaje profesional La Almunia",
    "tratamientos faciales La Almunia",
    "limpieza facial La Almunia",
    "depilación láser La Almunia",
    "depilación láser SHR",
    "presoterapia La Almunia",
    "lifting de pestañas La Almunia",
    "diseño de cejas La Almunia",
    "manicura La Almunia",
    "pedicura La Almunia",
    "Glow Reset 360",
    "estética Ricla",
    "estética Calatorao",
    "estética Épila"
  ],
  alternates: {
    canonical: "/"
  },
  verification: {
    google: "VcPiVNqXE6861a-B8lT8R62YCoiSMUVDdc4qx7FLS8Q"
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
    title: seoTitle,
    description: seoDescription,
    images: [shareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [shareImage.url]
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg"
  },
  other: {
    "geo.region": business.address.regionCode,
    "geo.placename": business.address.locality,
    "geo.position": `${latitude};${longitude}`,
    ICBM: `${latitude}, ${longitude}`
  }
};

export const viewport = {
  themeColor: "#007a53",
  width: "device-width",
  initialScale: 1
};

const jsonLd = buildJsonLd();

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
