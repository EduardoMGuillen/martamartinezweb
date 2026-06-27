"use client";

import { useState } from "react";

// Número de WhatsApp del centro (formato internacional, sin "+" ni espacios)
const WHATSAPP_NUMBER = "34676239789";

// Frente de la tarjeta: por defecto se dibuja el diseño "sol" en CSS.
// Si dejas una foto en /public/tarjetas/tarjeta-frente.jpg, pon
// frontImage: true para usar tu imagen real en vez del diseño dibujado.
const card = {
  frontImage: false,
  front: "/tarjetas/tarjeta-frente.jpg"
};

const amounts = ["25 €", "50 €", "100 €"];

export default function GiftCardPicker() {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [form, setForm] = useState({
    importe: "50 €",
    deParte: "",
    paraQuien: "",
    recogida: ""
  });

  const openEnvelope = () => setOpen(true);

  const closeEnvelope = (event) => {
    if (event) event.stopPropagation();
    setOpen(false);
    setFlipped(false);
  };

  const flipCard = (event) => {
    event.stopPropagation();
    setFlipped((prev) => !prev);
  };

  const handleKey = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEnvelope();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lineas = [
      "¡Hola Marta! Quiero reservar una *Tarjeta de Regalo* 🎁",
      `*Importe:* ${form.importe}`,
      `*De parte de:* ${form.deParte || "(sin indicar)"}`,
      `*Para:* ${form.paraQuien || "(sin indicar)"}`,
      `*Recogida en tienda:* ${form.recogida || "(a convenir)"}`,
      "",
      "¿Me confirmáis disponibilidad para recogerla en tienda? ¡Gracias!"
    ];

    const mensaje = encodeURIComponent(lineas.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section gift-section section-reveal" id="tarjetas-regalo">
      <div className="container">
        <div className="section-headline center-headline">
          <p className="eyebrow">Tu tarjeta de regalo</p>
          <h2>Ábrela y descúbrela</h2>
          <p>
            Toca el estuche para abrirlo y sacar la tarjeta. Elige el importe, resérvala y pásate
            a recogerla en tienda.
          </p>
        </div>

        <div className="gift-picker">
          <div className="gift-envelope-wrap">
            <div className={`gift-stage ${open ? "is-open" : ""}`}>
              {/* Sobre (horizontal) que se abre */}
              <button
                type="button"
                className="env"
                aria-label="Abrir el sobre y ver la tarjeta de regalo"
                aria-hidden={open}
                tabIndex={open ? -1 : 0}
                onClick={openEnvelope}
                onKeyDown={handleKey}
              >
                <span className="env-back" aria-hidden="true" />
                <span className="env-front" aria-hidden="true" />
                <span className="env-flap" aria-hidden="true" />
                <span className="env-seal" aria-hidden="true">♡</span>
              </button>

              {/* Tarjeta que sale del sobre */}
              <button
                type="button"
                className={`stage-card ${flipped ? "is-flipped" : ""}`}
                tabIndex={open ? 0 : -1}
                aria-hidden={!open}
                aria-label="Tarjeta de regalo, toca para ver el mensaje"
                onClick={flipCard}
              >
                <span className="stage-card-inner">
                  <span
                    className={`stage-card-face stage-front ${card.frontImage ? "has-photo" : ""}`}
                    style={card.frontImage ? { backgroundImage: `url(${card.front})` } : undefined}
                  >
                    {!card.frontImage ? <span className="sun-disc" aria-hidden="true" /> : null}
                  </span>

                  <span className="stage-card-face stage-back">
                    <span className="msg-logo" aria-hidden="true">
                      <svg viewBox="0 0 64 40" width="44" height="28">
                        <path
                          d="M6 36 L20 6 L32 26 L44 6 L58 36"
                          fill="none"
                          stroke="#2c4a3c"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14 6 L26 30 M50 6 L38 30"
                          fill="none"
                          stroke="#2c4a3c"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <strong className="msg-title">Este regalo es para ti</strong>
                    <span className="msg-body">
                      Te han regalado un tratamiento de belleza para que te relajes, te
                      consientas y disfrutes de un momento solo para ti.
                    </span>
                    <span className="msg-foot">Porque te lo mereces.</span>
                  </span>
                </span>

                <span className="price-medallion" aria-hidden="true">
                  <small>Vale por</small>
                  <strong>{form.importe}</strong>
                </span>
              </button>

              <button type="button" className="reveal-close" onClick={closeEnvelope}>
                ↩ Volver al sobre
              </button>
            </div>

            <p className="gift-stage-hint">
              {open ? "Toca la tarjeta para ver el mensaje" : "👆 Toca el sobre para abrirlo"}
            </p>
          </div>

          <div className="gift-form-panel">
            <h3>Reserva tu tarjeta</h3>
            <p className="gift-form-intro">
              Elige el importe y completa los datos. Te la preparamos para recoger en tienda y te
              confirmamos por WhatsApp.
            </p>

            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="custom-row two">
                <label className="custom-field">
                  <span>Importe</span>
                  <select name="importe" value={form.importe} onChange={handleChange}>
                    {amounts.map((amount) => (
                      <option key={amount} value={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="custom-field">
                  <span>Recogida en tienda</span>
                  <input
                    type="text"
                    name="recogida"
                    value={form.recogida}
                    onChange={handleChange}
                    placeholder="Ej. esta semana, mañanas..."
                  />
                </label>
              </div>

              <div className="custom-row two">
                <label className="custom-field">
                  <span>De parte de</span>
                  <input
                    type="text"
                    name="deParte"
                    value={form.deParte}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </label>

                <label className="custom-field">
                  <span>Para (opcional)</span>
                  <input
                    type="text"
                    name="paraQuien"
                    value={form.paraQuien}
                    onChange={handleChange}
                    placeholder="Nombre de quien lo recibe"
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-primary custom-submit">
                Reservar por WhatsApp
              </button>
              <p className="custom-help">
                Sin pago online: confirmas y pagas al recogerla en tienda.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
