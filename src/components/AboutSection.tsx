import { motion } from "framer-motion";
import { Factory, Award, Wrench } from "lucide-react";

const stats = [
  { icon: Factory, value: "20+", label: "Yıllık Deneyim" },
  { icon: Award, value: "500+", label: "Tamamlanan Proje" },
  { icon: Wrench, value: "50+", label: "Aktif Müşteri" },
];

const AboutSection = () => (
  <section id="hakkimizda" className="py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Hakkımızda</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
          Endüstriyel Kalıp Üretiminde Güvenilir Çözüm Ortağınız
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Çeliktaş Kalıp Makine, sac metal kalıp üretimi alanında uzmanlaşmış bir üretim atölyesidir. Sac bükme, kesme, sıvama ve progressive kalıp üretimi konularında yüksek hassasiyetli çözümler sunmaktadır. Ayrıca tel erozyon kesim hizmetleri ile sanayi firmalarına hızlı ve kaliteli üretim desteği sağlamaktadır.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-primary/10 mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="font-display font-extrabold text-4xl text-foreground">{s.value}</p>
            <p className="text-muted-foreground font-body mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
