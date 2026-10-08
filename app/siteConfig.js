import { categories } from "./servicesData";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.martamartinezestetica.com";

export const business = {
  name: "Marta Martínez Sáez",
  tagline: "Centro de estética y maquillaje en La Almunia de Doña Godina",
  phone: "+34676239789",
  phoneDisplay: "+34 676 23 97 89",
  whatsapp: "https://wa.me/34676239789",
  mapUrl: "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9",
  address: {
    street: "C. de Garay, 16",
    locality: "La Almunia de Doña Godina",
    county: "Valdejalón",
    region: "Zaragoza",
    regionCode: "ES-Z",
    postalCode: "50100",
    country: "ES"
  },
  geo: { latitude: 41.477302, longitude: -1.374932 },
  heroImage: "/Fotos/ad2a20d3-1384-4ea6-b056-6b6b6396c0ff.jpg"
};

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.locality}, ${business.address.region}, España`;

export const nearbyTowns = [
  "Ricla",
  "Calatorao",
  "Alpartir",
  "Almonacid de la Sierra",
  "Épila",
  "Morata de Jalón",
  "Lumpiaque",
  "Lucena de Jalón",
  "Cariñena"
];

export const faqs = [
  {
    question: "¿Dónde está el centro de estética Marta Martínez Sáez?",
    answer: `Estamos en ${fullAddress}, en la comarca de Valdejalón. Atendemos con cita previa por teléfono o WhatsApp en el ${business.phoneDisplay}.`
  },
  {
    question: "¿Qué tratamientos de estética ofrecéis en La Almunia?",
    answer:
      "Tratamientos faciales (Custom Skin, Citrus Vita Essence con vitamina C, 3D Collagen Revolution, The Cure y limpieza facial por ultrasonidos), rituales sensoriales, presoterapia, exfoliación corporal, manicura y pedicura, depilación con cera y láser SHR, diseño y tinte de cejas, lifting de pestañas y maquillaje profesional."
  },
  {
    question: "¿Cuánto cuesta un tratamiento facial en La Almunia de Doña Godina?",
    answer:
      "La limpieza facial profunda Pure Skin Ritual cuesta desde 45 €, el facial personalizado Custom Skin desde 50 € y los tratamientos Citrus Vita Essence y The Cure desde 70 €. El pack facial Glow Reset 360° (tres tratamientos) está en oferta por 199 €."
  },
  {
    question: "¿Hacéis depilación láser en La Almunia?",
    answer:
      "Sí. Realizamos depilación láser con tecnología SHR, indolora, segura y eficaz para todo tipo de pieles. El cuerpo completo cuesta 109 € para mujer y 149 € para hombre; las zonas individuales se consultan. También hacemos depilación con cera desde 5 €."
  },
  {
    question: "¿Ofrecéis estética oncológica?",
    answer:
      "Sí. Marta Martínez Sáez está especializada en cuidado oncológico, con formación específica y protocolos suaves y seguros para acompañar la piel durante y después de procesos oncológicos."
  },
  {
    question: "¿Qué hace diferente a este centro de estética en La Almunia?",
    answer:
      "Cada tratamiento empieza con un diagnóstico de la piel y se adapta a tus objetivos. Trabajamos con protocolos profesionales y activos de calidad, atención totalmente personalizada y especialización en cuidado oncológico."
  },
  {
    question: "¿Atendéis a clientes de pueblos cercanos a La Almunia?",
    answer: `Sí. Recibimos clientas y clientes de toda la comarca de Valdejalón y alrededores, como ${nearbyTowns.slice(0, -1).join(", ")} y ${nearbyTowns.at(-1)}.`
  },
  {
    question: "¿Cómo pido cita?",
    answer: `Llámanos o escríbenos por WhatsApp al ${business.phoneDisplay}. Trabajamos siempre con cita previa para dedicarte el tiempo que necesitas.`
  },
  {
    question: "¿Tenéis tarjetas regalo de estética?",
    answer:
      "Sí. Ofrecemos tarjetas regalo de 25 €, 50 € y 100 € canjeables por cualquier tratamiento. Se reservan por WhatsApp y se pagan al recogerlas en el centro."
  }
];

function parsePrice(price) {
  if (!price || price.startsWith("+") || price.includes("/")) return null;
  const match = price.match(/(\d+(?:[.,]\d+)?)/);
  if (!match) return null;
  return { value: match[1].replace(",", "."), isMinimum: /desde/i.test(price) };
}

function buildOfferCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Carta de servicios de estética",
    itemListElement: categories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.seoLabel,
      itemListElement: category.groups.flatMap((group) =>
        group.items.map((item) => {
          const parsed = parsePrice(item.price);
          const offer = {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.name === group.title ? item.name : `${item.name} (${group.title})`,
              ...(item.detail ? { description: item.detail } : {})
            }
          };
          if (parsed) {
            offer.priceSpecification = {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              ...(parsed.isMinimum ? { minPrice: parsed.value } : { price: parsed.value })
            };
          }
          return offer;
        })
      )
    }))
  };
}

export function buildJsonLd() {
  const businessId = `${siteUrl}/#business`;
  const personId = `${siteUrl}/#marta`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: business.name,
        inLanguage: "es-ES",
        publisher: { "@id": businessId }
      },
      {
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": businessId,
        name: business.name,
        alternateName: [
          "Marta Martínez Estética",
          "Centro de Estética Marta Martínez",
          "Estética Marta Martínez La Almunia"
        ],
        description:
          "Centro de estética y maquillaje en La Almunia de Doña Godina (Zaragoza), especializado en cuidado oncológico. Tratamientos faciales y corporales, presoterapia, depilación con cera y láser SHR, cejas, pestañas, manicura y pedicura.",
        url: siteUrl,
        image: [`${siteUrl}${business.heroImage}`, `${siteUrl}/logo.jpg`],
        logo: `${siteUrl}/logo.jpg`,
        telephone: business.phone,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Efectivo, Tarjeta",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.locality,
          addressRegion: business.address.region,
          postalCode: business.address.postalCode,
          addressCountry: business.address.country
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude
        },
        hasMap: business.mapUrl,
        areaServed: [
          { "@type": "City", name: business.address.locality },
          ...nearbyTowns.map((name) => ({ "@type": "City", name })),
          { "@type": "AdministrativeArea", name: "Comarca de Valdejalón" },
          { "@type": "AdministrativeArea", name: "Provincia de Zaragoza" }
        ],
        knowsAbout: [
          "Estética oncológica",
          "Tratamientos faciales",
          "Maquillaje profesional",
          "Presoterapia",
          "Depilación láser SHR",
          "Depilación con cera",
          "Diseño de cejas",
          "Lifting de pestañas",
          "Manicura",
          "Pedicura"
        ],
        founder: { "@id": personId },
        hasOfferCatalog: buildOfferCatalog(),
        makesOffer: {
          "@type": "Offer",
          name: "Glow Reset 360°",
          description:
            "Pack facial completo de tres tratamientos (The Reset Cure, Citrus Vita Essence y 3D Collagen) para reiniciar, iluminar y reafirmar la piel.",
          url: `${siteUrl}/#glow-reset`,
          price: "199",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "Person",
        "@id": personId,
        name: business.name,
        jobTitle: "Esteticista y maquilladora profesional",
        description: "Especialista en estética oncológica y tratamientos faciales personalizados.",
        worksFor: { "@id": businessId },
        workLocation: { "@id": businessId }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };
}
