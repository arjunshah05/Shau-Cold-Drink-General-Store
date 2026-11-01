import { BadgeCheck, Clock3, HeartHandshake, Wallet } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "../data/site";

const icons = [BadgeCheck, Wallet, HeartHandshake, Clock3];
export default function WhyChooseUs() {
  return <section className="section-pad bg-forest-950 text-white">
    <div className="container-shell">
      <SectionHeading eyebrow="The Sahu difference" title="Small things that make" highlight="shopping easier." description="A neighbourhood store experience built around convenience, value and friendly service."/>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, i) => { const Icon = icons[i]; return <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:bg-white/[.08]"><Icon className="text-gold" size={28}/><h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p></div>; })}
      </div>
    </div>
  </section>;
}
