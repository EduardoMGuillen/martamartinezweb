import Image from "next/image";

const faciales = [
  {
    title: "Custom Skin",
    description:
      "Tratamiento facial totalmente personalizado y adaptado a las necesidades específicas de cada piel. Incluye diagnóstico previo y selección de activos.",
    price: "Desde 50 €"
  },
  {
    title: "Citrus Vita Essence",
    description:
      "Tratamiento iluminador y antioxidante a base de Vitamina C. Aporta vitalidad, luminosidad y unifica el tono de la piel.",
    price: "Desde 70 €"
  },
  {
    title: "3D Collagen Revolution",
    description:
      "Tratamiento reafirmante y regenerador que estimula la producción de colágeno. Incluye exfoliación y un cóctel de vitaminas para rellenar, reafirmar y mejorar la textura de la piel.",
    price: "Desde 80 €"
  },
  {
    title: "The Cure",
    description:
      "Cura intensiva para la piel que combina terapia facial, cargas energéticas e hidratación profunda. Ideal para pieles deshidratadas, estresadas o desvitalizadas.",
    price: "Desde 70 €"
  },
  {
    title: "Pure Skin Ritual",
    description:
      "Limpieza facial profunda mediante ultrasonidos. Purifica, oxigena y prepara la piel para recibir tratamientos posteriores.",
    price: "Desde 45 €"
  }
];

const rituales = [
  {
    title: "Susurros de Calma",
    description:
      "Masaje craneal y facial profundamente relajante. Enfocado en liberar tensiones y calmar el sistema nervioso.",
    duration: "30 minutos",
    price: "30 €"
  },
  {
    title: "Despierta Tus Sentidos",
    description:
      "Tratamiento holístico de aromaterapia diseñado para reconectar cuerpo y mente. Incluye limpieza facial, arcillas, infusiones y ritual sensorial.",
    duration: "60 minutos",
    price: "60 €"
  }
];

const boosters = [
  { name: "Vitamina C", price: "+20 €" },
  { name: "Cóctel de vitaminas", price: "+20 €" },
  { name: "Glicólicos (exfoliación química)", price: "+20 €" },
  { name: "Microcorrientes", price: "+20 €" },
  { name: "Gimnasia pasiva para la piel", price: "+20 €" },
  { name: "Ultrasonidos", price: "+15 €" },
  { name: "Presoterapia en abdomen y piernas", price: "+10 €" }
];

const manicura = [
  {
    name: "Cortar y limar",
    detail: "Arreglo básico de uñas para un acabado limpio y cuidado.",
    price: "18 €"
  },
  {
    name: "Manicura semipermanente",
    detail: "Esmaltado de larga duración con acabado brillante y resistente.",
    price: "22 €"
  },
  {
    name: "Retirada de esmalte semipermanente",
    detail: "Servicio adicional.",
    price: "+5 €"
  },
  {
    name: "Diseños nail art",
    detail: "Suplemento por decoración.",
    price: "1 € cada 2 uñas"
  },
  {
    name: "Manicura Spa Deluxe",
    detail:
      "Ritual completo con preparación de uñas, exfoliación, hidratación profunda y masaje relajante.",
    price: "35 €"
  }
];

const pedicura = [
  {
    name: "Cortar y limar",
    detail: "Arreglo básico de uñas para un acabado limpio y cuidado.",
    price: "18 €"
  },
  {
    name: "Pedicura con esmaltado",
    detail: "Incluye cuidado de uñas y esmaltado para un acabado duradero.",
    price: "25 €"
  },
  {
    name: "Retirada de esmalte semipermanente",
    detail: "Servicio adicional.",
    price: "+5 €"
  },
  {
    name: "Pedicura Premium",
    detail:
      "Tratamiento completo con preparación de uñas, eliminación de durezas, exfoliación, hidratación profunda y masaje relajante, finalizando con esmaltado.",
    price: "38 €"
  }
];

const cera = [
  { service: "Piernas completas", price: "20 €" },
  { service: "Medias piernas", price: "10 €" },
  { service: "Ingles normales", price: "12 €" },
  { service: "Ingles completas", price: "18 €" },
  { service: "Brazos completos", price: "18 €" },
  { service: "Pecho y abdomen", price: "20 €" },
  { service: "Espalda completa", price: "20 €" },
  { service: "Labio", price: "5 €" },
  { service: "Facial", price: "15 €" }
];

const cejas = [
  {
    name: "Diseño de cejas personalizado",
    detail: "Depilación y definición según forma del rostro.",
    price: "8 €"
  },
  {
    name: "Tinte de cejas",
    detail: "Aporta intensidad y definición para una mirada más marcada.",
    price: "15 €"
  },
  {
    name: "Diseño + tinte de cejas",
    detail: "El combo perfecto para cejas definidas y con mayor profundidad.",
    price: "25 €"
  },
  {
    name: "Primera visita / Asesoramiento de cejas",
    detail: "Sesión de 20 min con análisis y recomendación personalizada.",
    price: "12 €"
  }
];

const pestanas = [
  {
    name: "Lifting de pestañas + tinte",
    detail: "Eleva, curva y oscurece la pestaña natural. Duración aproximada: 2 meses.",
    price: "45 €"
  },
  {
    name: "Tinte de pestañas",
    detail: "Coloración semipermanente que intensifica el tono natural.",
    price: "15 €"
  }
];

const navLinks = [
  { href: "#faciales", label: "Faciales" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#manos-pies", label: "Manos y pies" },
  { href: "#depilacion", label: "Depilación" },
  { href: "#mirada", label: "Mirada" },
  { href: "#presoterapia", label: "Presoterapia" },
  { href: "#contacto", label: "Contacto" }
];

const visualBlocks = [
  {
    title: "Rituales Faciales",
    subtitle: "Luminosidad y piel renovada",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Manos y Pies",
    subtitle: "Detalles que elevan tu imagen",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Mirada Perfecta",
    subtitle: "Cejas y pestañas con diseño",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
  }
];

const quickPrices = [
  { category: "Faciales", from: "Desde 45 €", note: "Tratamientos personalizados" },
  { category: "Rituales sensoriales", from: "Desde 30 €", note: "Experiencias premium" },
  { category: "Manicura", from: "Desde 18 €", note: "Opciones básicas y deluxe" },
  { category: "Pedicura", from: "Desde 18 €", note: "Con esmaltado y premium" },
  { category: "Depilación láser", from: "Desde 109 €", note: "Cuerpo completo mujer" },
  { category: "Presoterapia", from: "Desde 15 €", note: "Sesión 30 minutos" }
];

export default function HomePage() {
  return (
    <main>
      <a
        className="floating-whatsapp"
        href="https://wa.me/34676239789?text=Hola%2C%20quiero%20información%20sobre%20los%20tratamientos."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp +34 676 23 97 89
      </a>

      <header className="nav-wrap">
        <div className="container nav">
          <div className="brand">
            <div className="brand-logo">
              <Image src="/logo.jpg" alt="Logo del centro" fill sizes="54px" />
            </div>
            <div className="brand-text">
              <span>Centro de Estética</span>
              <small>Tratamientos faciales y corporales</small>
            </div>
          </div>
          <a className="btn btn-secondary nav-btn" href="tel:+34676239789">
            Llamar +34 676 23 97 89
          </a>
        </div>
        <div className="container nav-menu">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section className="hero section section-reveal">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Carta de servicios</p>
            <h1>Belleza, bienestar y cuidado profesional en un solo espacio.</h1>
            <p className="hero-copy">
              Hemos incorporado todos los tratamientos faciales, rituales sensoriales, manos,
              pies, depilación, mirada y presoterapia para que puedas consultar opciones y precios
              de forma clara.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+34676239789">
                Llamar ahora
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
              <Image src="/image5.png" alt="Tratamiento facial en centro de estética" fill priority sizes="560px" />
              <div className="hero-caption">Centro de Estética · Huesca</div>
            </div>
            <div className="hero-chip">+30 tratamientos</div>
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="tarifas">
        <div className="container">
          <div className="section-headline">
            <h2>Tarifas rápidas</h2>
            <p>Una visión rápida para elegir tu tratamiento ideal.</p>
          </div>
          <div className="quick-price-grid">
            {quickPrices.map((item) => (
              <article className="quick-price-card" key={item.category}>
                <h3>{item.category}</h3>
                <p className="quick-price">{item.from}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="visual-grid">
            {visualBlocks.map((item) => (
              <article className="visual-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="visual-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="faciales">
        <div className="container">
          <div className="section-headline">
            <h2>Tratamientos faciales</h2>
            <p>Resultados visibles con protocolos adaptados a tu tipo de piel.</p>
          </div>
          <div className="services-grid">
            {faciales.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p className="compact-text">{service.description}</p>
                <strong>{service.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="section-headline">
            <h2>Rituales sensoriales</h2>
            <p>Bienestar mental y corporal en sesiones envolventes.</p>
          </div>
          <div className="services-grid">
            {rituales.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p className="compact-text">{service.description}</p>
                <p className="meta-line">Duración: {service.duration}</p>
                <strong>Precio recomendado: {service.price}</strong>
              </article>
            ))}
          </div>
          <p className="section-note">Experiencia sensorial premium disponible bajo cita previa.</p>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="section-headline">
            <h2>Boosters faciales</h2>
            <p>Complementos para potenciar cualquier tratamiento.</p>
          </div>
          <div className="list-card">
            {boosters.map((item) => (
              <div className="line-item" key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="manos-pies">
        <div className="container">
          <div className="section-headline">
            <h2>Manicura y pedicura</h2>
            <p>Cuidado de manos y pies con acabado impecable.</p>
          </div>
          <div className="two-columns">
            <article className="list-card">
              <h3>Manicura</h3>
              {manicura.map((item) => (
                <div className="line-block" key={item.name}>
                  <div className="line-item">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </article>
            <article className="list-card">
              <h3>Pedicura</h3>
              {pedicura.map((item) => (
                <div className="line-block" key={item.name}>
                  <div className="line-item">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="depilacion">
        <div className="container">
          <div className="section-headline">
            <h2>Depilación: cera y láser</h2>
            <p>Opciones rápidas y efectivas según tu objetivo.</p>
          </div>
          <div className="two-columns">
            <article className="list-card">
              <h3>Depilación con cera</h3>
              {cera.map((item) => (
                <div className="line-item" key={item.service}>
                  <span>{item.service}</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
              <p className="section-note">Consultar packs combinados.</p>
            </article>
            <article className="list-card">
              <h3>Depilación láser SHR</h3>
              <p>
                Servicio realizado por profesional especializada con tecnología SHR, indoloro,
                seguro y eficaz para todo tipo de pieles.
              </p>
              <div className="line-item">
                <span>Cuerpo completo mujer</span>
                <strong>109 €</strong>
              </div>
              <div className="line-item">
                <span>Cuerpo completo hombre</span>
                <strong>149 €</strong>
              </div>
              <p className="section-note">Para zonas individuales, consultar directamente.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="mirada">
        <div className="container">
          <div className="section-headline">
            <h2>Cejas y pestañas</h2>
            <p>Diseño de mirada con efecto natural y elegante.</p>
          </div>
          <div className="two-columns">
            <article className="list-card">
              <h3>Cejas | Diseño y color</h3>
              <p>
                Realzamos tu mirada con un diseño adaptado a tus facciones y estilo natural.
              </p>
              {cejas.map((item) => (
                <div className="line-block" key={item.name}>
                  <div className="line-item">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </article>
            <article className="list-card">
              <h3>Pestañas</h3>
              {pestanas.map((item) => (
                <div className="line-block" key={item.name}>
                  <div className="line-item">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="section section-reveal" id="presoterapia">
        <div className="container">
          <div className="list-card">
            <h2>Presoterapia</h2>
            <p>
              Tratamiento de drenaje linfático mediante presión de aire para mejorar circulación,
              reducir retención de líquidos y combatir celulitis. Muy recomendada para deportistas
              por su ayuda en recuperación muscular y eliminación de toxinas.
            </p>
            <div className="line-item">
              <span>Sesión 30 min (piernas, abdomen o brazos)</span>
              <strong>15 €</strong>
            </div>
            <div className="line-item">
              <span>Sesiones de 40 min</span>
              <strong>Aprox. 20 €</strong>
            </div>
            <div className="line-item">
              <span>Presoterapia + vendas frías Arosa</span>
              <strong>35 €</strong>
            </div>
            <p className="section-note">
              Opciones adicionales: presoterapia ocular y cuerpo completo (consultar precio).
            </p>
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
            <span>Centro de Estética</span>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contacto">
        <div className="container cta-box section-reveal">
          <h2>Reserva tu cita</h2>
          <p>
            Contacto directo para asesoramiento y reservas: <strong>+34 676 23 97 89</strong>.
          </p>
          <div className="mini-note">
            Si tienes dudas sobre zonas, combinados o tratamientos personalizados, te asesoramos
            por WhatsApp.
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
              WhatsApp +34 676 23 97 89
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
