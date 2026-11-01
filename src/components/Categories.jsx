import SectionHeading from "./SectionHeading";
import { categories } from "../data/categories";

export default function Categories() {
  return <section id="categories" className="section-pad bg-cream">
    <div className="container-shell">
      <SectionHeading eyebrow="Browse the store" title="A little something for" highlight="everyday life." description="Explore the everyday categories available at Sahu Cold Drink & General Store."/>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({name, detail, icon: Icon, color}, i) => <a href="#products" key={name} className="category-card group">
          <div className={`category-icon ${color}`}><Icon size={27}/></div>
          <div className="mt-6 flex items-center justify-between"><div><h3 className="font-display text-xl font-bold text-forest-950">{name}</h3><p className="mt-1 text-sm text-slate-500">{detail}</p></div><span className="text-xl text-gold transition group-hover:translate-x-1">↗</span></div>
        </a>)}
      </div>
    </div>
  </section>;
}
