import { BadgeCheck, HeartHandshake, Leaf } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutContent } from "../data/site";

export default function About() {
  return <section id="about" className="section-pad bg-white">
    <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
      <div className="relative">
        <img src="/images/store-interior.png" alt="Well-stocked general store interior" className="h-[430px] w-full rounded-[2rem] object-cover shadow-soft"/>
        <div className="absolute -bottom-6 -right-4 max-w-[230px] rounded-2xl border border-gold/30 bg-cream p-5 shadow-soft">
          <p className="font-display text-3xl font-bold text-forest-900">Local</p><p className="mt-1 text-sm text-slate-600">A familiar place for the things you need every day.</p>
        </div>
      </div>
      <div>
        <SectionHeading centered={false} eyebrow="A little about us" title="A friendly store for your" highlight="everyday needs."/>
        <p className="mt-6 leading-8 text-slate-600">{aboutContent.description}</p>
        <p className="mt-4 border-l-2 border-gold pl-4 font-semibold italic text-forest-800">{aboutContent.note}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[["Quality picks", BadgeCheck], ["Neighbourhood care", HeartHandshake], ["Everyday value", Leaf]].map(([label, Icon]) => <div key={label} className="rounded-2xl bg-cream p-4"><Icon className="text-gold"/><p className="mt-3 text-sm font-bold text-forest-900">{label}</p></div>)}
        </div>
      </div>
    </div>
  </section>;
}
