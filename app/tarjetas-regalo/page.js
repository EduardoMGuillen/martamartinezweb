import GiftCardPicker from "../GiftCardPicker";

export const metadata = {
  title: "Tarjetas de regalo",
  description:
    "Regala belleza y bienestar con una tarjeta de regalo de Marta Martínez Sáez. Elige el diseño, resérvala online y recógela en tienda en La Almunia de Doña Godina.",
  alternates: { canonical: "/tarjetas-regalo" }
};

const perks = [
  { icon: "🎁", text: "Presentación cuidada, lista para regalar" },
  { icon: "🏬", text: "Reserva online y recógela en tienda" },
  { icon: "🗓️", text: "Válida para cualquier tratamiento o servicio" }
];

export default function TarjetasRegaloPage() {
  return (
    <main>
      <section className="gift-banner section-reveal">
        <div className="container gift-hero-inner">
          <span className="gift-tag">🎁 Tarjetas de regalo</span>
          <h1 className="gift-title">Regala belleza y bienestar</h1>
          <p className="gift-lead">
            Sorprende a quien más quieres con una tarjeta de regalo del centro. Elige un
            diseño, resérvala online y pásate a recogerla en tienda, lista para entregar.
          </p>
          <ul className="gift-perks">
            {perks.map((perk) => (
              <li className="gift-perk" key={perk.text}>
                <span className="gift-perk-icon" aria-hidden="true">
                  {perk.icon}
                </span>
                <span>{perk.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GiftCardPicker />
    </main>
  );
}
