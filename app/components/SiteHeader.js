"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tarjetas-regalo", label: "Tarjetas regalo" },
  { href: "#glow-reset", label: "Glow Reset 360°" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-logo">
            <Image src="/logo.jpg" alt="Logo Marta Martínez Sáez" fill sizes="50px" />
          </span>
          <span className="brand-text">
            <span>Marta Martínez Sáez</span>
            <small>Maquillaje y estética</small>
          </span>
        </a>

        <nav className={`nav-menu ${open ? "is-open" : ""}`} aria-label="Principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="tel:+34676239789">
            Llamar
          </a>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
