"use client";

import { useState } from "react";

// Número de WhatsApp del centro (formato internacional, sin "+" ni espacios)
const WHATSAPP_NUMBER = "34676239789";

const highlights = [
  { name: "The Reset Cure", note: "Revitaliza e hidrata en profundidad." },
  { name: "Citrus Vita Essence", note: "Vitamina C: luminosidad y tono uniforme." },
  { name: "3D Collagen", note: "Reafirma y rellena estimulando colágeno." }
];

export default function GlowResetFeatured() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    piel: "",
    preferencia: "",
    detalles: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lineas = [
      "¡Hola Marta! Me interesa el tratamiento *Glow Reset 360°* ✨",
      "Pack completo de los 3 tratamientos · oferta 199 € (antes 285 €)",
      "",
      `*Nombre:* ${form.nombre || "(sin indicar)"}`,
      `*Tipo de piel / necesidad:* ${form.piel || "(sin indicar)"}`,
      `*Preferencia de día u horario:* ${form.preferencia || "(flexible)"}`,
      `*Comentarios:* ${form.detalles || "(sin comentarios)"}`,
      "",
      "¿Me podrías dar presupuesto y disponibilidad? ¡Gracias!"
    ];

    const mensaje = encodeURIComponent(lineas.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="glow-banner section-reveal" id="glow-reset">
      <div className="glow-banner-media" aria-hidden="true" />
      <div className="glow-banner-overlay" aria-hidden="true" />

      <div className="container glow-banner-inner">
        <div className="glow-banner-content">
          <span className="glow-tag">★ Featured · Tratamiento estrella</span>
          <h2 className="glow-title">Glow Reset 360°</h2>
          <p className="glow-lead">
            Tres tratamientos únicos en una experiencia facial completa para reiniciar,
            iluminar y reafirmar tu piel.
          </p>

          <div className="glow-highlights">
            {highlights.map((item) => (
              <div className="glow-highlight" key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="glow-offer">
            <span className="glow-promo-flag">
              <span className="glow-promo-dot" aria-hidden="true" />
              Oferta por tiempo limitado · plazas limitadas
            </span>

            <div className="glow-price-row">
              <div className="glow-price-block">
                <span className="glow-price-old">
                  Antes <s>285 €</s>
                </span>
                <div className="glow-price-now">
                  <span className="glow-price-amount">199 €</span>
                  <span className="glow-save-badge">Ahorras 86 € · −30%</span>
                </div>
              </div>
              <span className="glow-price-label">
                Pack completo · los 3 tratamientos
                <small>Precio cerrado, sin sorpresas · sueltos a consultar</small>
              </span>
            </div>
          </div>

          <div className="glow-actions">
            <button
              type="button"
              className="btn btn-glow"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
            >
              {open ? "Cerrar formulario" : "Reservar mi plaza"}
            </button>
            <span className="glow-actions-note">Reserva sin compromiso por WhatsApp</span>
          </div>
        </div>

        <div className={`glow-form-panel ${open ? "is-open" : ""}`}>
          <h3>Pídelo a tu medida</h3>
          <p className="glow-form-intro">
            Cuéntanos qué necesitas y te enviamos presupuesto y disponibilidad por WhatsApp.
          </p>

          <form className="custom-form" onSubmit={handleSubmit}>
            <label className="custom-field">
              <span>Nombre</span>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </label>

            <div className="custom-row two">
              <label className="custom-field">
                <span>Tipo de piel / necesidad</span>
                <input
                  type="text"
                  name="piel"
                  value={form.piel}
                  onChange={handleChange}
                  placeholder="Ej. piel sensible, falta de luz..."
                />
              </label>

              <label className="custom-field">
                <span>Preferencia de día / horario</span>
                <input
                  type="text"
                  name="preferencia"
                  value={form.preferencia}
                  onChange={handleChange}
                  placeholder="Ej. mañanas, fin de semana..."
                />
              </label>
            </div>

            <label className="custom-field">
              <span>Comentarios</span>
              <textarea
                name="detalles"
                rows={3}
                value={form.detalles}
                onChange={handleChange}
                placeholder="Cualquier detalle que quieras que tengamos en cuenta."
              />
            </label>

            <button type="submit" className="btn btn-primary custom-submit">
              Enviar por WhatsApp
            </button>
            <p className="custom-help">
              Al pulsar se abrirá WhatsApp con tu solicitud lista para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
