const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.martamartinezestetica.com";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/glow-reset", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tarjetas-regalo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sobre-mi", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "yearly" }
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
