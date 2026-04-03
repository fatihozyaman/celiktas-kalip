import { motion } from "framer-motion";
import { Target, Cpu, Users, Clock, ShieldCheck } from "lucide-react";

const strengths = [
  { icon: Target, title: "Yüksek Hassasiyetli Üretim", desc: "Mikron düzeyinde toleranslarla hassas kalıp ve parça üretimi." },
  { icon: Cpu, title: "Modern Makine Parkuru", desc: "Son teknoloji CNC ve tel erozyon makineleri ile üretim kapasitesi." },
  { icon: Users, title: "Deneyimli Teknik Ekip", desc: "Alanında uzman mühendis ve teknisyenlerden oluşan kadro." },
  { icon: Clock, title: "Zamanında Teslimat", desc: "Proje planlaması ve takibi ile söz verilen sürede teslimat garantisi." },
  { icon: ShieldCheck, title: "Endüstriyel Kalite Standartları", desc: "ISO standartlarına uygun üretim süreçleri ve kalite kontrol." },
];

const WhyChooseUs = () => (
  <section id="neden-biz" className="py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Neden Biz</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
          Çeliktaş Kalıp'ı Tercih Etmeniz İçin 5 Neden
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center mt-1">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
