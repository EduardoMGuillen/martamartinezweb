import Image from "next/image";

const services = [
  {
    title: "Maquillaje Profesional",
    description:
      "Novias, eventos y sesiones especiales con un acabado elegante, duradero y personalizado para cada piel."
  },
  {
    title: "Estetica Facial",
    description:
      "Rituales de limpieza, hidratacion y luminosidad para recuperar frescura y realzar la belleza natural."
  },
  {
    title: "Bienestar Corporal",
    description:
      "Tratamientos enfocados en relajacion, cuidado profundo y sensacion de bienestar integral."
  }
];

const highlights = [
  "Centro especializado en estetica oncologica",
  "Atencion cercana, profesional y personalizada",
  "Experiencia real en pieles sensibles",
  "Ubicacion en La Almunia de Dona Godina"
];

const transformations = [
  {
    phase: "Antes",
    title: "Piel apagada y deshidratada",
    text: "Analisis personalizado de piel para definir rutina y tratamiento ideal."
  },
  {
    phase: "Despues",
    title: "Piel luminosa y uniforme",
    text: "Resultados progresivos y naturales, sin perder expresion ni autenticidad."
  }
];

const socialProof = [
  { label: "Clientes satisfechas", value: "500+" },
  { label: "Anos de experiencia", value: "10+" },
  { label: "Valoracion media", value: "5.0/5" }
];

export default function HomePage() {
  return (
    <main>
      <a
        className="floating-whatsapp"
        href="https://wa.me/34676239789?text=Hola%20Marta%2C%20quiero%20informacion%20sobre%20tus%20servicios."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>

      <header className="nav-wrap">
        <div className="container nav">
          <div className="brand">
            <span className="brand-dot" />
            Marta Martinez Saez
          </div>
          <a className="btn btn-secondary nav-btn" href="tel:+34676239789">
            Reserva: 676 23 97 89
          </a>
        </div>
      </header>

      <section className="hero section section-reveal">
        <div className="ambient-glow ambient-left" />
        <div className="ambient-glow ambient-right" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Marta Martinez Saez</p>
            <h1>Belleza que cuida, acompana y transforma.</h1>
            <p className="hero-copy">
              Maquillaje y estetica profesional con un enfoque humano y delicado. Especialistas
              en bienestar de la piel, incluyendo cuidado estetico oncologico junto a{" "}
              <strong>@fundacionricardofisas</strong>.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+34676239789">
                Llamar ahora
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.instagram.com/martinezsaezmarta/"
                target="_blank"
                rel="noreferrer"
              >
                Ver Instagram
              </a>
            </div>
            <p className="hero-location">Calle Garay, La Almunia de Dona Godina</p>
            <div className="social-proof">
              {socialProof.map((item) => (
                <div className="proof-card" key={item.label}>
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="logo-wrap">
              <Image src="/logo.jpg" alt="Logo Marta Martinez Saez" fill priority sizes="320px" />
            </div>
            <div className="hero-card-text">
              <p className="card-title">Centro de Maquillaje y Estetica</p>
              <p className="card-subtitle">Resultados naturales, elegantes y con alma.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <h2>Servicios pensados para hacerte sentir increible</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="glass-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section section-reveal">
        <div className="container split-grid">
          <div className="split-content">
            <p className="eyebrow">Especialidad diferencial</p>
            <h2>Estetica oncologica con sensibilidad y excelencia.</h2>
            <p>
              Un enfoque respetuoso para acompanar procesos complejos, cuidando la piel, la imagen
              y la autoestima con tecnicas adaptadas a cada persona.
            </p>
            <ul className="highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="moodboard">
            <Image
              src="/instagram-moodboard.png"
              alt="Inspiracion visual del estilo de Marta Martinez Saez"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <h2>Transformaciones que se notan sin perder naturalidad</h2>
          <div className="transform-grid">
            {transformations.map((item) => (
              <article className="transform-card" key={item.phase}>
                <p className="phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="testimonial">
            <p>
              "No vendemos solo un tratamiento, ofrecemos una experiencia de confianza, cuidado y
              belleza real."
            </p>
            <span>Marta Martinez Saez</span>
          </div>
        </div>
      </section>

      <section className="section cta-section section-reveal">
        <div className="container cta-box">
          <h2>Reserva tu cita y vive la experiencia Marta Martinez Saez</h2>
          <p>
            Contacto directo para asesoramiento y reservas: <strong>676 23 97 89</strong>
          </p>
          <div className="mini-note">
            Horario flexible con cita previa. Recomendamos reservar con antelacion para fechas de
            eventos y novias.
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
      </section>
    </main>
  );
}
