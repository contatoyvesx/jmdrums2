import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-drums.jpg";
import logo from "@/assets/Logo fundo transparente.png";
import {
  MessageCircle,
  ChevronDown,
  MapPin,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947483998?text=Vi%20no%20site%20e%20quero%20saber%20os%20itens%20dispon%C3%ADveis";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bateria profissional"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* LOGO TOPO ESQUERDO */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src={logo}
          alt="JM Drums ABC"
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto object-contain"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        <p className="mb-6 inline-block rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
          <MapPin className="mr-1.5 inline h-3 w-3" />
          ABC Paulista
        </p>

        <h1 className="text-4xl font-black leading-[1.1] sm:text-5xl md:text-7xl text-foreground">
          Baterias, Pratos e Peças
          <span className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
            com Preço de Verdade
          </span>
        </h1>

        <p className="mt-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Produtos novos e usados direto do ABC Paulista. 
          Qualidade garantida, preço justo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            asChild
            className="text-base px-8 py-6 rounded-full"
          >
            <a href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ver produtos no WhatsApp
            </a>
          </Button>

          <a
            href="#sobre"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            Saiba mais <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
