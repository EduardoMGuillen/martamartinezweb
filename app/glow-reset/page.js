import GlowResetFeatured from "../GlowResetFeatured";

export const metadata = {
  title: "Glow Reset 360° · Tratamiento facial estrella",
  description:
    "Glow Reset 360°: pack facial de tres tratamientos (The Reset Cure, Citrus Vita Essence y 3D Collagen) para reiniciar, iluminar y reafirmar la piel. Oferta 199 €.",
  alternates: { canonical: "/glow-reset" }
};

export default function GlowResetPage() {
  return (
    <main>
      <section className="page-hero section-reveal">
        <div className="container">
          <p className="eyebrow">Tratamiento estrella</p>
          <h1>Glow Reset 360°</h1>
          <p className="page-hero-copy">
            La experiencia facial más completa del centro: tres protocolos que se
            combinan para reiniciar, iluminar y reafirmar tu piel en una sola sesión.
          </p>
        </div>
      </section>

      <GlowResetFeatured />
    </main>
  );
}
