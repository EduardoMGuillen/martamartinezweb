import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Marta Martínez Sáez: maquillaje y estética con atención personalizada en La Almunia de Doña Godina, especializada en cuidado oncológico.",
  alternates: { canonical: "/sobre-mi" }
};

const values = [
  {
    title: "Atención personalizada",
    text: "Cada tratamiento parte de un diagnóstico y se adapta a tu piel, tu momento y tus objetivos."
  },
  {
    title: "Cuidado oncológico",
    text: "Formación específica para acompañar la piel durante y después de procesos oncológicos, con delicadeza y seguridad."
  },
  {
    title: "Producto y técnica",
    text: "Protocolos profesionales y activos de calidad para lograr resultados visibles y duraderos."
  }
];

export default function SobreMiPage() {
  return (
    <main>
      <section className="page-hero section-reveal">
        <div className="container">
          <p className="eyebrow">Sobre mí</p>
          <h1>Marta Martínez Sáez</h1>
          <p className="page-hero-copy">
            Maquillaje y estética con una filosofía clara: cuidar a cada persona de forma
            cercana, profesional y a su medida.
          </p>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container about-grid">
          <figure className="about-image side-image">
            <Image
              src="/Fotos/ad2a20d3-1384-4ea6-b056-6b6b6396c0ff.jpg"
              alt="Marta Martínez Sáez en su centro de estética"
              fill
              sizes="(max-width: 980px) 100vw, 480px"
            />
          </figure>
          <div className="about-text">
            <h2>Belleza con propósito</h2>
            <p>
              En el centro de La Almunia de Doña Godina trabajo el maquillaje y la estética
              desde el cuidado real de la piel. Me gusta entender qué necesita cada persona
              antes de recomendar nada, porque los mejores resultados nacen de un buen
              diagnóstico y de un acompañamiento cercano.
            </p>
            <p>
              Estoy especializada en cuidado oncológico, ofreciendo protocolos suaves y
              seguros para acompañar la piel en sus momentos más delicados. Y, en el día a día,
              ayudo a que te sientas bien contigo a través de tratamientos faciales y
              corporales, mirada, manos y pies.
            </p>
            <Link className="btn btn-primary" href="/contacto">
              Pide tu cita
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="container">
          <div className="section-headline center-headline">
            <p className="eyebrow">Cómo trabajo</p>
            <h2>Lo que me importa</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
