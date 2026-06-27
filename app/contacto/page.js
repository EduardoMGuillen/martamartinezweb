const locationLink = "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9";
const locationAddress = "C. de Garay, 16, 50100 La Almunia de Doña Godina, Zaragoza, España";

export const metadata = {
  title: "Contacto y ubicación",
  description:
    "Reserva tu cita en el centro de Marta Martínez Sáez en La Almunia de Doña Godina (Zaragoza). Teléfono, WhatsApp y cómo llegar.",
  alternates: { canonical: "/contacto" }
};

export default function ContactoPage() {
  return (
    <main>
      <section className="page-hero section-reveal">
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h1>Reserva tu cita</h1>
          <p className="page-hero-copy">
            Atención con cita previa. Escríbenos o llámanos y te asesoramos sin compromiso.
          </p>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container contact-grid">
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
      </section>
    </main>
  );
}
