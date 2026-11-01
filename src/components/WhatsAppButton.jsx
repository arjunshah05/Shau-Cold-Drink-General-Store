import { MessageCircle } from "lucide-react";
import { storeDetails } from "../data/site";

export default function WhatsAppButton() {
  const url = `https://wa.me/${storeDetails.whatsapp}?text=${encodeURIComponent(storeDetails.whatsappMessage)}`;
  return <a href={url} target="_blank" rel="noreferrer" aria-label="Chat with Sahu Store on WhatsApp" className="whatsapp-float"><MessageCircle size={25}/><span>WhatsApp</span></a>;
}
