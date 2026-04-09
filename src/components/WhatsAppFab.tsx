import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947483998?text=Vi%20no%20site%20e%20quero%20saber%20os%20itens%20dispon%C3%ADveis";

const WhatsAppFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 active:scale-95"
  >
    <MessageCircle className="h-7 w-7 text-whatsapp-foreground" />
  </a>
);

export default WhatsAppFab;
