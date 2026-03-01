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

const galleryImages = [
  { src: "/image1.png", alt: "Mascarilla facial profesional" },
  { src: "/image2.png", alt: "Ingredientes naturales en tratamiento estetico" },
  { src: "/image3.png", alt: "Masaje corporal relajante" },
  { src: "/image4.png", alt: "Look de maquillaje para evento" },
  { src: "/image5.png", alt: "Cuidado facial con enfoque spa" }
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
            <div className="brand-logo">
              <Image src="/logo.jpg" alt="Logo Marta Martinez Saez" fill sizes="54px" />
            </div>
            <div className="brand-text">
              <span>Marta Martinez Saez</span>
              <small>Maquillaje y Estetica</small>
            </div>
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
            <h1>Estetica premium para verte increible y sentirte mejor.</h1>
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

          <div className="hero-visual">
            <div className="hero-image-main">
              <Image src="/image5.png" alt="Ritual premium de cuidado facial" fill priority sizes="560px" />
            </div>
            <div className="hero-image-floating">
              <Image src="/image2.png" alt="Texturas y activos de tratamiento" fill sizes="260px" />
            </div>
            <div className="hero-note">
              <p className="card-title">Beauty Studio Boutique</p>
              <p className="card-subtitle">Experiencia sensorial, tecnica y resultados naturales.</p>
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

          <div className="premium-stack">
            <div className="premium-main">
              <Image src="/image1.png" alt="Tratamiento facial estetico premium" fill sizes="520px" />
            </div>
            <div className="premium-sub">
              <Image src="/image3.png" alt="Momento de bienestar corporal" fill sizes="320px" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="gallery-heading">
            <p className="eyebrow">Galeria</p>
            <h2>Una identidad visual cuidada, elegante y actual</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <figure className={`gallery-item item-${index + 1}`} key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </figure>
            ))}
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
