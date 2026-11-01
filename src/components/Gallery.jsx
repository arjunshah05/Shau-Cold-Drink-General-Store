import SectionHeading from "./SectionHeading";

const photos = [
  ["/images/storefront-premium.png", "Storefront design concept", "Large"],
  ["/images/store-interior.png", "Store shelves and products", "Tall"],
  ["/images/storefront-concept.png", "Shopfront inspiration", "Tall"]
];
export default function Gallery() {
  return <section id="gallery" className="section-pad bg-cream">
    <div className="container-shell">
      <SectionHeading eyebrow="Inside Sahu Store" title="A glimpse of our" highlight="store." description="Replace these sample visuals with your own shop, shelves and product photographs."/>
      <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3">
        {photos.map(([src, alt, size], i) => <div key={src} className={`group relative overflow-hidden rounded-3xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-forest-950/65 via-transparent to-transparent"/><p className="absolute bottom-5 left-5 font-display text-xl font-bold text-white">{alt}</p></div>)}
      </div>
    </div>
  </section>;
}
