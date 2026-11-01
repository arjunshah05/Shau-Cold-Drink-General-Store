import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { heroContent, storeDetails } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32">
      <div className="container-shell grid min-h-[680px] items-center gap-12 pb-20 pt-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-forest-800">
            <Sparkles size={14} className="text-gold"/> {heroContent.eyebrow}
          </div>
          <h1 className="max-w-xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-forest-950 sm:text-6xl xl:text-7xl">
            {heroContent.title} <span className="italic text-forest-700">{heroContent.highlight}</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">{heroContent.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">{heroContent.primaryCta} <ArrowUpRight size={17}/></a>
            <a href={`https://wa.me/${storeDetails.whatsapp}?text=${encodeURIComponent(storeDetails.whatsappMessage)}`} target="_blank" rel="noreferrer" className="btn-secondary">{heroContent.secondaryCta}</a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-slate-500"><MapPin size={17} className="text-gold"/>{storeDetails.address}</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] border border-gold/40 rotate-3"></div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(9,35,30,.24)]">
            <img src="/images/storefront-premium.png" alt="Sahu Cold Drink and General Store storefront concept" className="h-[520px] w-full object-cover object-center"/>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/40 bg-forest-950/85 p-4 text-white backdrop-blur-md">
              <div><p className="text-xs uppercase tracking-[.18em] text-gold">Your neighbourhood stop</p><p className="mt-1 font-display text-xl">Fresh picks, every day.</p></div>
              <a href="#about" className="grid h-11 w-11 place-items-center rounded-full bg-gold text-forest-950"><ArrowDown/></a>
            </div>
          </div>
          <div className="absolute -left-8 top-16 hidden rounded-2xl bg-white p-4 shadow-soft sm:block"><span className="text-xs font-bold uppercase tracking-widest text-forest-700">Shop local</span><p className="font-display text-xl text-forest-950">Shop happy.</p></div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
    </section>
  );
}
