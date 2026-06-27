"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/glow-reset", label: "Glow Reset 360°" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tarjetas-regalo", label: "Tarjetas regalo" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-logo">
            <Image src="/logo.jpg" alt="Logo Marta Martínez Sáez" fill sizes="50px" />
          </span>
          <span className="brand-text">
            <span>Marta Martínez Sáez</span>
            <small>Maquillaje y estética</small>
          </span>
        </Link>

        <nav className={`nav-menu ${open ? "is-open" : ""}`} aria-label="Principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : ""}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
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
