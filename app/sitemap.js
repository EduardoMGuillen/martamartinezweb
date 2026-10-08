import { categories } from "./servicesData";
import { business, siteUrl } from "./siteConfig";

export default function sitemap() {
  const images = [business.heroImage, ...categories.map((category) => category.image), "/logo.jpg"];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: images.map((path) => `${siteUrl}${path}`)
    }
  ];
}
