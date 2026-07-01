const mapUrl = "https://maps.app.goo.gl/ZmvSNEpq1qnQr2RX9";

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tarjetas-regalo", label: "Tarjetas regalo" },
  { href: "#glow-reset", label: "Glow Reset 360°" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-name">Marta Martínez Sáez</span>
          <p>
            Maquillaje y estética con atención personalizada en La Almunia de Doña Godina.
            Especialistas en cuidado oncológico.
          </p>
          <p className="footer-note">Atención con cita previa.</p>
        </div>

        <nav className="footer-nav" aria-label="Pie de página">
          <span className="footer-heading">Explora</span>
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <span className="footer-heading">Contacto</span>
          <a href="tel:+34676239789">+34 676 23 97 89</a>
          <a href={mapUrl} target="_blank" rel="noreferrer">
            C. de Garay, 16
            <br />
            50100 La Almunia de Doña Godina, Zaragoza
          </a>
          <a
            href="https://wa.me/34676239789"
            target="_blank"
            rel="noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} Marta Martínez Sáez · Maquillaje y estética
        </small>
        <small>
          Powered by{" "}
          <a href="https://www.nexusglobalsuministros.com/" target="_blank" rel="noreferrer">
            Nexus Global
          </a>
        </small>
      </div>
    </footer>
  );
}
