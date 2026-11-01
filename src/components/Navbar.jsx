import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { storeDetails } from "../data/site";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Categories", "#categories"],
  ["Products", "#products"], ["Gallery", "#gallery"], ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-cream/90 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a
              href="#home"
              className="flex items-center gap-3"
              onClick={() => setOpen(false)}
     >
        <img
        src="/images/sahu-logo.png"
        alt="Sahu Cold Drink & General Store"
        className="h-12 w-12 rounded-full object-contain"
      />

       <span className="leading-tight">
       <span className="block font-display text-lg font-bold text-forest-950">
      Sahu 
        </span>
     <span className="text-[10px] font-bold uppercase tracking-[.18em] text-forest-700">
      Cold Drink & General Store
     </span>
    </span>
    </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <a className="btn-primary hidden lg:inline-flex" href="#contact">Visit our store <span>↗</span></a>
        <button className="rounded-xl border border-forest-900/10 p-2 text-forest-900 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && <nav className="border-t border-forest-900/10 bg-cream px-6 py-4 lg:hidden">
        {links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} className="block border-b border-forest-900/5 py-3 font-semibold text-forest-900" href={href}>{label}</a>)}
        <a onClick={() => setOpen(false)} className="btn-primary mt-4 w-full" href="#contact">Visit our store</a>
      </nav>}
    </header>
  );
}
