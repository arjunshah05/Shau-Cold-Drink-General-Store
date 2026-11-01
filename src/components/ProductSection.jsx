import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { products } from "../data/products";

const filters = ["All", "Cold Drinks", "Snacks", "Groceries", "Chocolates"];

export default function ProductSection() {
  const [active, setActive] = useState("All");
  const shown = useMemo(() => active === "All" ? products : products.filter(p => p.category === active), [active]);
  return <section id="products" className="section-pad bg-white">
    <div className="container-shell">
      <SectionHeading eyebrow="Popular picks" title="Things you’ll find" highlight="in store." description="A sample product showcase. Replace or add products to match your actual store inventory."/>
      <div className="mt-9 flex flex-wrap justify-center gap-2">
        {filters.map(f => <button key={f} onClick={() => setActive(f)} className={`filter-pill ${active === f ? "active" : ""}`}>{f}</button>)}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map(p => <article key={p.name} className="product-card">
          <div className="relative overflow-hidden rounded-2xl bg-cream"><img src={p.image} alt={p.name} loading="lazy" className="h-56 w-full object-cover transition duration-500 hover:scale-105"/><span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-800">{p.tag}</span></div>
          <div className="pt-4"><p className="text-xs font-bold uppercase tracking-[.14em] text-gold">{p.category}</p><h3 className="mt-1 font-display text-xl font-bold text-forest-950">{p.name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{p.description}</p></div>
        </article>)}
      </div>
      <p className="mt-8 text-center text-xs text-slate-400">Product images are illustrative. Brand availability and pack sizes may vary.</p>
    </div>
  </section>;
}
