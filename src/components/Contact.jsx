import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { storeDetails } from "../data/site";

export default function Contact() {
  const wa = `https://wa.me/${storeDetails.whatsapp}?text=${encodeURIComponent(storeDetails.whatsappMessage)}`;
  return <section id="contact" className="section-pad bg-cream">
    <div className="container-shell">
      <SectionHeading eyebrow="We’re happy to help" title="Let’s get in" highlight="touch." description="Need to check product availability or find our store? Call, message or visit us."/>
      <div className="mt-12 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-forest-900 p-8 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Contact details</p>
          <h3 className="mt-4 font-display text-3xl font-bold">Say hello to Sahu Store.</h3>
          <div className="mt-9 space-y-6">
            <div className="flex gap-4"><Phone className="shrink-0 text-gold"/><div><p className="text-xs text-white/50">Phone</p><a className="mt-1 block font-semibold" href={`tel:${storeDetails.phone.replaceAll(" ", "")}`}>{storeDetails.phone}</a></div></div>
            {/* <div className="flex gap-4"><Mail className="shrink-0 text-gold"/><div><p className="text-xs text-white/50">Email</p><a className="mt-1 block font-semibold" href={`mailto:${storeDetails.email}`}>{storeDetails.email}</a></div></div> */}
            <div className="flex gap-4"><MapPin className="shrink-0 text-gold"/><div><p className="text-xs text-white/50">Address</p><p className="mt-1 font-semibold">{storeDetails.address}</p></div></div>
            <div className="flex gap-4"><Clock className="shrink-0 text-gold"/><div><p className="text-xs text-white/50">Opening hours</p><p className="mt-1 font-semibold">{storeDetails.openingHours}</p></div></div>
          </div>
          <a href={wa} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#1eb95a]"><MessageCircle size={18}/> Chat on WhatsApp</a>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-white p-3 shadow-soft">
          <iframe
            title="Sahu Store Location"
              src="https://maps.google.com/maps?q=Vinod%20Sah%20Cold%20Drink%20%26%20General%20Store%2C%20Kunaolee%2C%20Bihar%20847451&output=embed"
             className="h-[390px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
/>
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4"><div><p className="font-bold text-forest-950">Find our store</p><p className="text-sm text-slate-500">Kunauli, Bihar 847451</p></div><a href={storeDetails.mapUrl} target="_blank" rel="noreferrer" className="btn-secondary">Open in Maps ↗</a></div>
        </div>
      </div>
    </div>
  </section>;
}
