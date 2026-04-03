import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Hassas metal işleme ve tel erozyon kesim"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 gradient-hero-overlay" />

    <div className="relative z-10 container text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
          Çeliktaş Kalıp Makine
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-navy-foreground leading-tight max-w-4xl mx-auto">
          Hassas Sac Kalıp Üretimi ve Tel Erozyon Kesim Hizmetleri
        </h1>
        <p className="mt-6 text-lg md:text-xl text-steel-light max-w-2xl mx-auto font-body">
          Endüstriyel üretim için yüksek hassasiyetli kalıp çözümleri.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-base px-8">
            <a href="#iletisim">
              Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-steel-light/40 text-navy-foreground hover:bg-navy-foreground/10 font-display font-semibold text-base px-8">
            <a href="#hizmetler">Hizmetlerimiz</a>
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
