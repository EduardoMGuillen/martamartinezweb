"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "facial",
    label: "Facial",
    tagline: "Resultados visibles con protocolos adaptados a tu tipo de piel.",
    image: "/Fotos/49c07f8d-f016-4e03-8ae4-6b30a9ecc27d.jpg",
    groups: [
      {
        title: "Tratamientos faciales",
        items: [
          {
            name: "Custom Skin",
            detail:
              "Tratamiento facial totalmente personalizado. Incluye diagnóstico previo y selección de activos.",
            price: "Desde 50 €"
          },
          {
            name: "Citrus Vita Essence",
            detail:
              "Iluminador y antioxidante a base de Vitamina C. Aporta vitalidad y unifica el tono.",
            duration: "60 min",
            price: "Desde 70 €"
          },
          {
            name: "3D Collagen Revolution",
            detail:
              "Reafirmante y regenerador que estimula la producción de colágeno. Mejora la textura. Protocolo recomendado: 1 sesión cada 15 días (3 sesiones).",
            duration: "60 min",
            price: "Desde 80 €"
          },
          {
            name: "The Cure",
            detail:
              "Cura intensiva con terapia facial, cargas energéticas e hidratación profunda.",
            duration: "60 min",
            price: "Desde 70 €"
          },
          {
            name: "Pure Skin Ritual",
            detail: "Limpieza facial profunda por ultrasonidos. Purifica, oxigena y prepara la piel.",
            duration: "45 min",
            price: "Desde 45 €"
          }
        ]
      },
      {
        title: "Rituales sensoriales",
        items: [
          {
            name: "Susurros de Calma",
            detail: "Masaje craneal y facial profundamente relajante.",
            duration: "30 min",
            price: "30 €"
          },
          {
            name: "Despierta Tus Sentidos",
            detail: "Tratamiento holístico de aromaterapia que reconecta cuerpo y mente.",
            duration: "60 min",
            price: "60 €"
          }
        ]
      },
      {
        title: "Boosters faciales",
        note: "Complementos para potenciar cualquier tratamiento.",
        items: [
          { name: "Vitamina C", price: "+20 €" },
          { name: "Cóctel de vitaminas", price: "+20 €" },
          { name: "Glicólicos (exfoliación química)", price: "+20 €" },
          { name: "Microcorrientes", price: "+20 €" },
          { name: "Gimnasia pasiva para la piel", price: "+20 €" },
          { name: "Ultrasonidos", price: "+15 €" },
          { name: "Presoterapia en abdomen y piernas", price: "+10 €" }
        ]
      }
    ]
  },
  {
    id: "corporal",
    label: "Corporal",
    tagline: "Drenaje, recuperación y bienestar para todo el cuerpo.",
    image: "/Fotos/8367f603-6886-4d45-b9d6-70b479a97cf4.jpg",
    groups: [
      {
        title: "Presoterapia",
        note: "Tratamiento de drenaje linfático mediante presión de aire, ideal para mejorar la circulación, reducir la retención de líquidos y combatir la celulitis. Favorece una piel más firme y uniforme, con sensación de ligereza desde la primera sesión. Especialmente recomendada para deportistas: ayuda a la recuperación muscular, reduce la fatiga y acelera la eliminación de toxinas tras el ejercicio.",
        items: [
          {
            name: "Sesión de presoterapia",
            detail: "A elegir: piernas, abdomen o brazos.",
            duration: "30 min",
            price: "15 €"
          },
          {
            name: "Sesión de presoterapia",
            detail: "Sesión más larga. Precio aproximado, consultar.",
            duration: "40 min",
            price: "Aprox. 20 €"
          },
          { name: "Presoterapia ocular", detail: "Consultar precio.", price: "Consultar" },
          { name: "Cuerpo completo", detail: "Consultar precio.", price: "Consultar" }
        ]
      },
      {
        title: "Presoterapia + vendas frías Arosa",
        note: "Tratamiento combinado que potencia el drenaje, mejora la textura de la piel y aporta un efecto reafirmante y tonificante. Las vendas frías de Arosa activan la circulación, alivian la pesadez y favorecen la eliminación de líquidos, dejando la piel más lisa y revitalizada.",
        items: [{ name: "Presoterapia + vendas frías Arosa", price: "35 €" }]
      },
      {
        title: "Exfoliación corporal · Aromas del Mundo",
        note: "Exfoliación corporal que renueva y suaviza la piel, dejándola luminosa y perfumada.",
        items: [
          { name: "Exfoliación completa", duration: "30–60 min", price: "75 €" },
          { name: "Por zonas", price: "35 €" }
        ]
      }
    ]
  },
  {
    id: "manos-pies",
    label: "Manos y pies",
    tagline: "Cuidado de manos y pies con acabado impecable.",
    image: "/Fotos/218fdc1a-566e-490a-ad58-910ae9b80b9f.jpg",
    groups: [
      {
        title: "Manicura",
        items: [
          {
            name: "Cortar y limar",
            detail: "Arreglo básico para un acabado limpio.",
            duration: "20–30 min",
            price: "18 €"
          },
          {
            name: "Manicura semipermanente",
            detail: "Esmaltado de larga duración, brillante y resistente.",
            duration: "40 min",
            price: "22 €"
          },
          {
            name: "Retirada de esmalte semipermanente",
            detail: "Servicio adicional.",
            duration: "30 min",
            price: "+5 €"
          },
          {
            name: "Diseños nail art",
            detail: "Suplemento por decoración.",
            duration: "+10 min",
            price: "1 € / 2 uñas"
          },
          {
            name: "Manicura Spa Deluxe",
            detail: "Ritual completo con exfoliación, hidratación profunda y masaje. Esmaltado aparte.",
            duration: "60 min",
            price: "35 €"
          }
        ]
      },
      {
        title: "Pedicura",
        items: [
          {
            name: "Cortar y limar",
            detail: "Arreglo básico para un acabado limpio.",
            duration: "20–30 min",
            price: "18 €"
          },
          {
            name: "Pedicura con esmaltado",
            detail: "Cuidado de uñas y esmaltado de acabado duradero.",
            duration: "40 min",
            price: "25 €"
          },
          {
            name: "Retirada de esmalte semipermanente",
            detail: "Servicio adicional.",
            duration: "30 min",
            price: "+5 €"
          },
          {
            name: "Pedicura Premium",
            detail:
              "Tratamiento completo: eliminación de durezas, exfoliación, hidratación, masaje y esmaltado.",
            duration: "60 min",
            price: "38 €"
          }
        ]
      }
    ]
  },
  {
    id: "depilacion",
    label: "Depilación",
    tagline: "Opciones rápidas y efectivas con cera o láser SHR.",
    image: "/Fotos/53c552fa-c377-4164-8b50-7114d0e2e4f5.jpg",
    groups: [
      {
        title: "Depilación con cera",
        note: "Consultar packs combinados.",
        items: [
          { name: "Piernas completas", price: "20 €" },
          { name: "Medias piernas", price: "10 €" },
          { name: "Ingles normales", price: "12 €" },
          { name: "Ingles completas", price: "18 €" },
          { name: "Brazos completos", price: "18 €" },
          { name: "Pecho y abdomen", price: "20 €" },
          { name: "Espalda completa", price: "20 €" },
          { name: "Labio", price: "5 €" },
          { name: "Facial", price: "15 €" }
        ]
      },
      {
        title: "Depilación láser SHR",
        note: "Tecnología SHR realizada por profesional especializada: indolora, segura y eficaz para todo tipo de pieles. Zonas individuales, consultar.",
        items: [
          { name: "Cuerpo completo mujer", price: "109 €" },
          { name: "Cuerpo completo hombre", price: "149 €" }
        ]
      }
    ]
  },
  {
    id: "mirada",
    label: "Mirada",
    tagline: "Diseño de cejas y pestañas con efecto natural y elegante.",
    image: "/Fotos/a3108321-461f-43b6-8bee-68180c52ef26.jpg",
    groups: [
      {
        title: "Cejas | Diseño y color",
        items: [
          {
            name: "Diseño de cejas personalizado",
            detail: "Depilación y definición según la forma del rostro.",
            duration: "15 min",
            price: "8 €"
          },
          {
            name: "Tinte de cejas",
            detail: "Aporta intensidad y definición para una mirada más marcada.",
            duration: "15 min",
            price: "15 €"
          },
          {
            name: "Diseño + tinte de cejas",
            detail: "El combo perfecto para cejas definidas y con mayor profundidad.",
            duration: "30 min",
            price: "25 €"
          },
          {
            name: "Primera visita / Asesoramiento de cejas",
            detail: "Análisis y recomendación personalizada.",
            duration: "30 min",
            price: "12 €"
          }
        ]
      },
      {
        title: "Pestañas",
        items: [
          {
            name: "Lifting de pestañas + tinte",
            detail: "Eleva, curva y oscurece la pestaña natural. Resultado de hasta 2 meses.",
            duration: "60 min",
            price: "45 €"
          },
          {
            name: "Tinte de pestañas",
            detail: "Coloración semipermanente que intensifica el tono natural.",
            duration: "15 min",
            price: "15 €"
          }
        ]
      }
    ]
  }
];

export default function ServicesCatalog() {
  const [active, setActive] = useState(categories[0].id);
  const [mounted, setMounted] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animación de aparición de cada bloque al entrar en pantalla
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Scrollspy: resalta el chip de la categoría visible
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.cat);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) {
        reveal.observe(el);
        spy.observe(el);
      }
    });

    return () => {
      reveal.disconnect();
      spy.disconnect();
    };
  }, []);

  const handleJump = (id) => {
    setActive(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="section section-reveal" id="servicios">
      <div className="container">
        <div className="section-headline catalog-headline">
          <p className="eyebrow">Carta de servicios</p>
          <h2>Nuestra carta completa</h2>
          <p>Filtra por categoría y salta directamente a lo que buscas.</p>
        </div>

        <div className="catalog-tabs" role="tablist" aria-label="Categorías de servicios">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active === category.id}
              className={`catalog-tab ${active === category.id ? "is-active" : ""}`}
              onClick={() => handleJump(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={`catalog-list ${mounted ? "catalog-animate" : ""}`}>
          {categories.map((category) => (
            <article
              key={category.id}
              id={`cat-${category.id}`}
              data-cat={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              className="catalog-block"
            >
              <div className="catalog-split">
                <figure className="side-image catalog-image">
                  <img src={category.image} alt={category.label} loading="lazy" />
                </figure>

                <div className="catalog-content">
                  <div className="section-headline">
                    <h3 className="catalog-block-title">{category.label}</h3>
                    <p>{category.tagline}</p>
                  </div>

                  <div className="catalog-groups">
                    {category.groups.map((group) => (
                      <article className="list-card" key={group.title}>
                        <h4 className="group-title">{group.title}</h4>
                        {group.note ? <p className="group-note">{group.note}</p> : null}
                        {group.items.map((item) => (
                          <div className="line-block" key={item.name}>
                            <div className="line-item">
                              <span className="line-name">
                                {item.name}
                                {item.duration ? (
                                  <span className="line-duration">⏱ {item.duration}</span>
                                ) : null}
                              </span>
                              <strong>{item.price}</strong>
                            </div>
                            {item.detail ? <p>{item.detail}</p> : null}
                          </div>
                        ))}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
