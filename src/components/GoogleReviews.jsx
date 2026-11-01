import { Star, ScanLine } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { storeDetails } from "../data/site";

export default function GoogleReviews() {
  return <section id="google-reviews" className="section-pad bg-white">
    <div className="container-shell grid items-center gap-12 rounded-[2rem] bg-cream p-7 sm:p-12 lg:grid-cols-[1fr_340px]">
      <div><SectionHeading centered={false} eyebrow="Your feedback matters" title="Enjoyed shopping with us?" highlight="Tell Google." description="Scan the QR code to open our Google review page and share your experience. Your feedback helps our neighbourhood store grow."/>
        <a href={storeDetails.reviewUrl} target="_blank" rel="noreferrer" className="btn-primary mt-7">Write a Google review <span>↗</span></a>
      </div>
      <div className="mx-auto w-full max-w-[290px] rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-soft">
        <div className="mx-auto mb-3 flex items-center justify-center gap-1 text-2xl font-bold tracking-tight"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></div>
        <img src="/images/google-review-qr.png" alt="Google review QR code for Sahu Cold Drink and General Store" className="mx-auto aspect-square w-full rounded-2xl object-contain"/>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-forest-900"><ScanLine size={16}/> Scan to review</p>
        <p className="mt-1 text-xs text-slate-400">Sahu Cold Drink & General Store</p>
      </div>
    </div>
  </section>;
}
