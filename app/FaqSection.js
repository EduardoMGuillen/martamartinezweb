import { faqs } from "./siteConfig";

export default function FaqSection() {
  return (
    <section className="section section-reveal" id="preguntas-frecuentes">
      <div className="container">
        <div className="section-headline center-headline">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Tu centro de estética en La Almunia, resuelto</h2>
          <p>Lo que más nos preguntáis sobre tratamientos, precios y citas.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <h3>{faq.question}</h3>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
