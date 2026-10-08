import { categories } from "../servicesData";
import { business, faqs, fullAddress, nearbyTowns, siteUrl } from "../siteConfig";

export const dynamic = "force-static";

function buildContent() {
  const services = categories
    .map((category) => {
      const groups = category.groups
        .map((group) => {
          const items = group.items
            .map((item) => {
              const duration = item.duration ? ` (${item.duration})` : "";
              return `  - ${item.name}${duration}: ${item.price}`;
            })
            .join("\n");
          return `- ${group.title}\n${items}`;
        })
        .join("\n");
      return `### ${category.seoLabel}\n\n${groups}`;
    })
    .join("\n\n");

  const faqText = faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n");

  return `# ${business.name} · Centro de estética en La Almunia de Doña Godina

> Centro de estética y maquillaje en La Almunia de Doña Godina (Zaragoza, España), especializado en estética oncológica. Tratamientos faciales y corporales, presoterapia, depilación con cera y láser SHR, cejas, pestañas, manicura y pedicura, con atención personalizada y cita previa.

## Datos del negocio

- Nombre: ${business.name}
- Tipo: Centro de estética y maquillaje
- Dirección: ${fullAddress}
- Comarca: ${business.address.county}
- Coordenadas: ${business.geo.latitude}, ${business.geo.longitude}
- Teléfono y WhatsApp: ${business.phoneDisplay}
- Cita: siempre con cita previa (teléfono o WhatsApp)
- Mapa: ${business.mapUrl}
- Web: ${siteUrl}
- Zona de influencia: La Almunia de Doña Godina, ${nearbyTowns.join(", ")}

## Servicios y precios

${services}

### Glow Reset 360°

Pack facial de tres tratamientos (The Reset Cure, Citrus Vita Essence y 3D Collagen): 199 € (antes 285 €).

### Tarjetas regalo

Importes de 25 €, 50 € y 100 €. Se reservan por WhatsApp y se pagan al recogerlas en el centro.

## Preguntas frecuentes

${faqText}
`;
}

export function GET() {
  return new Response(buildContent(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
