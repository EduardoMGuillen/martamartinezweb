import "./globals.css";

export const metadata = {
  title: "Marta Martinez Saez | Maquillaje y Estetica",
  description:
    "Centro de maquillaje y estetica especializado en cuidado oncológico. Belleza profesional, cercana y personalizada en La Almunia de Dona Godina."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
