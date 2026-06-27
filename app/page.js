import Image from "next/image";
import Link from "next/link";

const locationLink = "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9";
const locationAddress = "C. de Garay, 16, 50100 La Almunia de Doña Godina, Zaragoza, España";

const visualBlocks = [
  {
    title: "Rituales Faciales",
    subtitle: "Luminosidad y piel renovada",
    image: "/Fotos/ff443d6d-672c-4db8-9692-50ba212d245c.jpg"
  },
  {
    title: "Manos y Pies",
    subtitle: "Detalles que elevan tu imagen",
    image: "/Fotos/218fdc1a-566e-490a-ad58-910ae9b80b9f.jpg"
  },
  {
    title: "Mirada Perfecta",
    subtitle: "Cejas y pestañas con diseño",
    image: "/Fotos/dd4f25dc-4e91-404a-9450-050fb7def3e6.jpg"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section section-reveal">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Maquillaje y estética · La Almunia</p>
            <h1>Belleza, bienestar y cuidado profesional en un solo espacio.</h1>
            <p className="hero-copy">
              Maquillaje, tratamientos faciales y corporales, manos, pies, depilación y mirada.
              Una experiencia cuidada y personalizada para cada piel.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/glow-reset">
                Glow Reset 360° · 199 €
              </Link>
              <Link className="btn btn-secondary" href="/servicios">
                Ver servicios y precios
              </Link>
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

      {/* Ofertas destacadas pensadas para reservar al momento */}
      <section className="section section-reveal">
        <div className="container">
          <div className="section-headline center-headline">
            <p className="eyebrow">Ofertas destacadas</p>
            <h2>Resérvalo en un minuto</h2>
            <p>Lo más pedido del centro, listo para reservar por WhatsApp ahora mismo.</p>
          </div>

          <div className="offer-duo">
            {/* Glow Reset 360° */}
            <article className="offer-card offer-card-glow">
              <div className="offer-card-media">
                <img src="/Fotos/49c07f8d-f016-4e03-8ae4-6b30a9ecc27d.jpg" alt="Glow Reset 360°" loading="lazy" />
                <span className="offer-urgency">⏳ Oferta por tiempo limitado · plazas limitadas</span>
              </div>
              <div className="offer-card-body">
                <div className="offer-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <small>El tratamiento más reservado</small>
                </div>
                <h3 className="offer-card-title">Glow Reset 360°</h3>
                <p className="offer-card-text">
                  Tres tratamientos en una experiencia facial completa: reinicia, ilumina y
                  reafirma tu piel en una sola sesión.
                </p>
                <div className="offer-price">
                  <span className="offer-price-old">
                    Antes <s>285 €</s>
                  </span>
                  <div className="offer-price-now">
                    <span className="offer-price-amount">199 €</span>
                    <span className="offer-save">Ahorras 86 € · −30%</span>
                  </div>
                </div>
                <Link className="btn btn-primary offer-cta" href="/glow-reset">
                  Reservar ahora
                </Link>
                <span className="offer-reassure">Reserva sin compromiso por WhatsApp</span>
              </div>
            </article>

            {/* Tarjetas de regalo */}
            <article className="offer-card offer-card-gift">
              <div className="offer-card-media">
                <img src="/Fotos/220712c8-68c6-4aa3-b666-c5a09df46562.jpg" alt="Tarjetas de regalo" loading="lazy" />
                <span className="offer-urgency offer-urgency-gold">🎁 El regalo perfecto, en 1 minuto</span>
              </div>
              <div className="offer-card-body">
                <div className="offer-rating">
                  <span aria-hidden="true">★★★★★</span>
                  <small>Listas para sorprender</small>
                </div>
                <h3 className="offer-card-title">Tarjetas de regalo</h3>
                <p className="offer-card-text">
                  Elige un diseño, resérvala online y pásate a recogerla en tienda. Sin pago
                  online: pagas al recogerla.
                </p>
                <div className="offer-price">
                  <div className="offer-price-now">
                    <span className="offer-price-amount">Desde 25 €</span>
                    <span className="offer-save offer-save-gold">Cualquier servicio</span>
                  </div>
                </div>
                <Link className="btn btn-primary offer-cta" href="/tarjetas-regalo">
                  Regalar ahora
                </Link>
                <span className="offer-reassure">Recogida en tienda · diseño a elegir</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="section-headline center-headline">
            <p className="eyebrow">Nuestra carta de servicios</p>
            <h2>Pulsa una categoría para ver tratamientos y precios</h2>
            <p>Toca cualquier imagen para abrir la carta completa con todos los detalles.</p>
          </div>
          <div className="visual-grid">
            {visualBlocks.map((item) => (
              <Link className="visual-card" key={item.title} href="/servicios">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="visual-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <span className="visual-cta">Ver carta de servicios →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="visual-grid-action">
            <Link className="btn btn-primary" href="/servicios">
              Ver toda la carta de servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section section-reveal">
        <div className="container">
          <div className="testimonial">
            <p>
              "Cada tratamiento se adapta a tu piel, tu momento y tus objetivos para que disfrutes
              resultados visibles con una experiencia cuidada."
            </p>
            <span>Marta Martínez Sáez</span>
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="ubicacion">
        <div className="container">
          <div className="section-headline center-headline">
            <p className="eyebrow">Dónde estamos</p>
            <h2>Te esperamos en La Almunia</h2>
            <p>C. de Garay, 16 · 50100 La Almunia de Doña Godina, Zaragoza. Atención con cita previa.</p>
          </div>
          <div className="location-card">
            <div className="map-frame-wrap">
              <iframe
                title="Mapa de ubicación del centro"
                src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(locationAddress)}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a className="btn btn-primary" href={locationLink} target="_blank" rel="noreferrer">
              Cómo llegar · abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="section cta-section section-reveal">
        <div className="container cta-box">
          <h2>Reserva tu cita</h2>
          <p>
            Contacto directo para asesoramiento y reservas: <strong>+34 676 23 97 89</strong>.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contacto">
              Reservar cita
            </Link>
            <a
              className="btn btn-secondary"
              href="https://wa.me/34676239789"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +34 676 23 97 89
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
