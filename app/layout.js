import "./globals.css";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-SJSGXWE3BE";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marta Martínez Sáez | Maquillaje y Estética en La Almunia",
    template: "%s | Marta Martínez Sáez"
  },
  description:
    "Centro de maquillaje y estética especializado en cuidado oncológico. Belleza profesional, cercana y personalizada en La Almunia de Doña Godina (Zaragoza).",
  applicationName: "Marta Martínez Sáez",
  keywords: [
    "centro de estética",
    "maquillaje profesional",
    "cuidado oncológico",
    "tratamientos faciales",
    "depilación",
    "cejas",
    "lifting de pestañas",
    "manicura",
    "pedicura",
    "La Almunia de Doña Godina",
    "Zaragoza"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Marta Martínez Sáez",
    title: "Marta Martínez Sáez | Maquillaje y Estética",
    description:
      "Centro de maquillaje y estética especializado en cuidado oncológico. Atención personalizada con cita previa en La Almunia de Doña Godina.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Marta Martínez Sáez · Centro de Estética"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marta Martínez Sáez | Maquillaje y Estética",
    description:
      "Centro de maquillaje y estética especializado en cuidado oncológico en La Almunia de Doña Godina.",
    images: ["/logo.jpg"]
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
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
      <body>{children}</body>
    </html>
  );
}
