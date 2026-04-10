import { Button } from "@/components/ui/button";
import WhatsAppFab from "@/components/WhatsAppFab";
import RevealOnScroll from "@/components/RevealOnScroll";
import heroImg from "@/assets/hero-drums.jpg";
import cymbalImg from "@/assets/cymbal-detail.jpg";
import pedalImg from "@/assets/pedal-detail.jpg";
import logo from "@/assets/Logo fundo transparente.png";
import {
  MessageCircle,
  Drum,
  Disc3,
  Footprints,
  Wrench,
  Recycle,
  Package,
  DollarSign,
  ShieldCheck,
  RefreshCw,
  Headphones,
  Instagram,
  Clock,
  Phone,
  ChevronDown,
  MapPin,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947483998?text=Vi%20no%20site%20e%20quero%20saber%20os%20itens%20dispon%C3%ADveis";

const products = [
  { icon: Drum, label: "Baterias completas", img: heroImg },
  { icon: Disc3, label: "Pratos" },
  { icon: Footprints, label: "Pedais" },
  { icon: Wrench, label: "Ferragens" },
  { icon: Recycle, label: "Peças usadas" },
  { icon: Package, label: "Acessórios" },
];

const steps = [
  { num: "01", title: "Clique no WhatsApp", desc: "Toque no botão verde e inicie a conversa" },
  { num: "02", title: "Pergunte o que temos", desc: "Fale o que procura e veja a disponibilidade" },
  { num: "03", title: "Receba fotos e feche", desc: "Receba imagens reais e negocie direto" },
];

const differentials = [
  { icon: DollarSign, title: "Preços abaixo do mercado", desc: "Economia real em cada produto" },
  { icon: ShieldCheck, title: "Produtos revisados", desc: "Tudo testado antes de vender" },
  { icon: RefreshCw, title: "Alta rotatividade", desc: "Sempre tem novidade chegando" },
  { icon: Headphones, title: "Atendimento direto", desc: "Fale com quem entende de bateria" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bateria profissional em estúdio"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </div>

        <div className="absolute top-5 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20">
          <img
            src={logo}
            alt="JM Drums ABC"
            className="w-[72px] sm:w-[90px] md:w-[110px] h-auto object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up mb-6 inline-block rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            <MapPin className="mr-1.5 inline h-3 w-3" />
            ABC Paulista
          </p>

          <h1 className="animate-fade-up text-4xl font-black leading-[1.1] sm:text-5xl md:text-7xl text-foreground">
            Baterias, Pratos e Peças
            <span className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              com Preço de Verdade
            </span>
          </h1>

          <p className="animate-fade-up-delay mt-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Produtos novos e usados direto do ABC Paulista.
            Qualidade garantida, preço justo.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              asChild
              className="text-base px-8 py-6 rounded-full glow-whatsapp animate-pulse-glow"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ver produtos no WhatsApp
              </a>
            </Button>

            <a
              href="#sobre"
              className="animate-fade-up-delay-3 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Saiba mais <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SOBRE ===== */}
      <section id="sobre" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Sobre nós</p>
                <h2 className="text-3xl font-bold sm:text-4xl text-foreground leading-tight">
                  A sua loja de baterias no <span className="text-gold">ABC Paulista</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Trabalhamos com baterias completas, peças, pratos e acessórios.
                  Produtos novos e seminovos com alta rotatividade — sempre tem
                  novidade chegando na loja.
                </p>
                <div className="mt-8 flex gap-8">
                  <div>
                    <p className="text-3xl font-black text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Itens vendidos</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-foreground">5★</p>
                    <p className="text-sm text-muted-foreground">Avaliação</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-foreground">ABC</p>
                    <p className="text-sm text-muted-foreground">Localização</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="img-zoom rounded-2xl overflow-hidden gradient-border">
                <img
                  src={cymbalImg}
                  alt="Prato de bateria em detalhe"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== O QUE TEMOS ===== */}
      <section className="relative px-6 py-24 md:py-32 noise-overlay">
        <div className="mx-auto max-w-5xl relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Catálogo</p>
              <h2 className="text-3xl font-bold sm:text-4xl text-foreground">O que temos pra você</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {products.map((p, i) => (
              <RevealOnScroll key={p.label} delay={i * 100}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex flex-col items-center gap-4 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/5 group-hover:bg-whatsapp/10 transition-colors">
                    <p.icon className="h-7 w-7 text-foreground group-hover:text-whatsapp transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center">{p.label}</span>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== COMO FUNCIONA ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Simples assim</p>
              <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Como funciona</h2>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 150}>
                <div className="glass-card rounded-2xl p-8 relative group hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-5xl font-black text-foreground/5 absolute top-4 right-6 group-hover:text-whatsapp/10 transition-colors">
                    {s.num}
                  </span>
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/10 mb-6">
                      <span className="text-whatsapp font-bold text-lg">{s.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== DIFERENCIAIS ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll delay={200}>
              <div className="img-zoom rounded-2xl overflow-hidden gradient-border">
                <img
                  src={pedalImg}
                  alt="Pedal de bateria profissional"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </RevealOnScroll>
            <div>
              <RevealOnScroll>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Diferenciais</p>
                  <h2 className="text-3xl font-bold sm:text-4xl text-foreground mb-10">
                    Por que a <span className="text-gold">JM Drums</span>?
                  </h2>
                </div>
              </RevealOnScroll>
              <div className="space-y-4">
                {differentials.map((d, i) => (
                  <RevealOnScroll key={d.title} delay={i * 100}>
                    <div className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-whatsapp/10">
                        <d.icon className="h-5 w-5 text-whatsapp" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{d.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CONTATO ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-lg text-center">
          <RevealOnScroll>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Contato</p>
              <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Fale com a gente</h2>
              <div className="mt-10 space-y-5">
                <a
                  href="https://wa.me/5511947483998"
                  className="glass-card flex items-center gap-4 rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-whatsapp/10">
                    <Phone className="h-5 w-5 text-whatsapp" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">+55 11 94748-3998</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/jmdrumsabc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
                    <Instagram className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground">@jmdrumsabc</p>
                  </div>
                </a>

                <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="font-semibold text-foreground">Seg a Sáb, 10h–18h</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CTA FINAL ===== */}
      <section className="relative px-6 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-whatsapp/5 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <div>
              <h2 className="text-3xl font-black sm:text-5xl text-foreground leading-tight">
                Quer saber o que tem disponível <span className="text-gold">hoje</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                É só chamar no WhatsApp. Resposta rápida e sem enrolação.
              </p>
              <div className="mt-10">
                <Button
                  variant="whatsapp"
                  size="lg"
                  asChild
                  className="text-base px-10 py-7 rounded-full glow-whatsapp text-lg font-bold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">JM Drums ABC</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://wa.me/5511947483998" className="hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/jmdrumsabc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
};

export default Index;
