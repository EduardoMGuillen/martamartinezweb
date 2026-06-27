import ServicesCatalog from "../ServicesCatalog";

export const metadata = {
  title: "Servicios y precios",
  description:
    "Carta completa de servicios de estética en La Almunia: tratamientos faciales y corporales, presoterapia, depilación con cera y láser SHR, manicura, pedicura, cejas y pestañas.",
  alternates: { canonical: "/servicios" }
};

export default function ServiciosPage() {
  return (
    <main>
      <section className="page-hero section-reveal">
        <div className="container">
          <p className="eyebrow">Carta de servicios</p>
          <h1>Servicios y precios</h1>
          <p className="page-hero-copy">
            Tratamientos pensados para cada necesidad, con precios claros. Filtra por
            categoría y encuentra justo lo que buscas.
          </p>
        </div>
      </section>

      <ServicesCatalog />
    </main>
  );
}
