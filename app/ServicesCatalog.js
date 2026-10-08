"use client";

import { useEffect, useRef, useState } from "react";

import { categories } from "./servicesData";

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
          <p className="eyebrow">Carta de servicios y precios</p>
          <h2>Tratamientos de estética en La Almunia</h2>
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
                  <img src={category.image} alt={category.seoLabel} loading="lazy" />
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
