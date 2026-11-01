import { ArrowUpRight, ShoppingBasket } from "lucide-react";
import { storeDetails } from "../data/site";

export default function Footer() {
  return <footer className="bg-[#081d19] pb-8 pt-14 text-white">
    <div className="container-shell">
      <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_.7fr_.9fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
           <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-forest-950 overflow-hidden">
          <img
           src="/images/sahu-logo.png"
           alt="Sahu Store Logo"
          className="h-11 w-11 rounded-full object-contain"
          />
           </span>
          <span className="font-display text-xl font-bold">Sahu Cold Drink & General Store</span>
        </a><p className="mt-5 max-w-sm text-sm leading-7 text-white/55">Your neighbourhood destination for cold drinks, groceries, snacks and daily essentials.</p></div>
        <div><h4 className="font-bold">Explore</h4><div className="mt-4 grid gap-3 text-sm text-white/55"><a href="#about">About us</a><a href="#categories">Categories</a><a href="#products">Products</a><a href="#gallery">Gallery</a></div></div>
        <div><h4 className="font-bold">Get in touch</h4><p className="mt-4 text-sm leading-7 text-white/55">{storeDetails.address}<br/>{storeDetails.phone}</p><a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-gold">Contact us <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/40 sm:flex-row"><p>© {new Date().getFullYear()} Sahu Cold Drink & General Store. All rights reserved.</p><p>Made for everyday neighbourhood shopping.</p></div>
    </div>
  </footer>;
}
