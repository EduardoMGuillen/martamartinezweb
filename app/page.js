import Image from "next/image";

import GlowResetFeatured from "./GlowResetFeatured";
import GiftCardPicker from "./GiftCardPicker";
import ServicesCatalog from "./ServicesCatalog";

const locationLink = "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9";
const locationAddress = "C. de Garay, 16, 50100 La Almunia de Doña Godina, Zaragoza, España";

const values = [
  {
    title: "Atención personalizada",
    text: "Cada tratamiento parte de un diagnóstico y se adapta a tu piel, tu momento y tus objetivos."
  },
  {
    title: "Cuidado oncológico",
    text: "Formación específica para acompañar la piel durante y después de procesos oncológicos."
  },
  {
    title: "Producto y técnica",
    text: "Protocolos profesionales y activos de calidad para resultados visibles y duraderos."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section section-reveal" id="inicio">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Maquillaje y estética · La Almunia</p>
            <h1>Belleza, bienestar y cuidado profesional en un solo espacio.</h1>
            <p className="hero-copy">
              Maquillaje, tratamientos faciales y corporales, manos, pies, depilación y mirada.
              Una experiencia cuidada y personalizada para cada piel.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#servicios">
                Ver servicios y precios
              </a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/34676239789"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +34 676 23 97 89
              </a>
            </div>
            <p className="hero-location">Atención personalizada con cita previa.</p>
          </div>

          <div className="hero-visual">
            <div className="hero-image-main">
              <Image
                src="/Fotos/ad2a20d3-1384-4ea6-b056-6b6b6396c0ff.jpg"
                alt="Tratamiento facial en centro de estética"
                fill
                priority
                sizes="560px"
              />
              <div className="hero-caption">Marta Martínez Sáez · La Almunia</div>
            </div>
            <div className="hero-chip">+30 servicios</div>
          </div>
        </div>
      </section>

      {/* Catálogo: lo principal, bien visible */}
      <ServicesCatalog />

      {/* Tarjetas de regalo */}
      <GiftCardPicker />

      {/* Glow Reset (tratamiento destacado, como sección más) */}
      <GlowResetFeatured />

      {/* Sobre mí */}
      <section className="section section-reveal" id="sobre-mi">
        <div className="container about-grid">
          <figure className="about-image side-image">
            <Image
              src="/Fotos/ad2a20d3-1384-4ea6-b056-6b6b6396c0ff.jpg"
              alt="Marta Martínez Sáez en su centro de estética"
              fill
              sizes="(max-width: 980px) 100vw, 480px"
            />
          </figure>
          <div className="about-text">
            <p className="eyebrow">Sobre mí</p>
            <h2>Belleza con propósito</h2>
            <p>
              En el centro de La Almunia de Doña Godina trabajo el maquillaje y la estética desde
              el cuidado real de la piel. Me gusta entender qué necesita cada persona antes de
              recomendar nada, porque los mejores resultados nacen de un buen diagnóstico y un
              acompañamiento cercano.
            </p>
            <p>
              Estoy especializada en cuidado oncológico, con protocolos suaves y seguros para
              acompañar la piel en sus momentos más delicados.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y contacto */}
      <section className="section section-reveal" id="contacto">
        <div className="container">
          <div className="section-headline center-headline">
            <p className="eyebrow">Contacto</p>
            <h2>Reserva tu cita</h2>
            <p>
              Atención con cita previa. Escríbenos o llámanos: <strong>+34 676 23 97 89</strong>.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-block">
                <span className="footer-heading">Teléfono</span>
                <a className="contact-big" href="tel:+34676239789">
                  +34 676 23 97 89
                </a>
              </div>
              <div className="contact-block">
                <span className="footer-heading">Dirección</span>
                <p>{locationAddress}</p>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:+34676239789">
                  Llamar
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://wa.me/34676239789"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="location-card">
              <div className="map-frame-wrap">
                <iframe
                  title="Mapa interactivo de ubicación"
                  src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(locationAddress)}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a className="btn btn-primary" href={locationLink} target="_blank" rel="noreferrer">
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
