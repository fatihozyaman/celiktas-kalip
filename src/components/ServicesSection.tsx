import { motion } from "framer-motion";
import { Layers, LayoutGrid, Grip, Scissors, CircleDot, Zap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Sac Kalıp Üretimi",
    desc: "Her türlü sac metal kalıp tasarımı ve imalatı, endüstriyel standartlara uygun hassas üretim.",
  },
  {
    icon: LayoutGrid,
    title: "Progressive Kalıp Tasarımı ve İmalatı",
    desc: "Çoklu operasyon progressive kalıplar ile seri üretim için verimli ve ekonomik çözümler.",
  },
  {
    icon: Grip,
    title: "Sac Bükme Kalıpları",
    desc: "Farklı açı ve form gereksinimleri için özel tasarım sac bükme kalıpları.",
  },
  {
    icon: Scissors,
    title: "Sac Kesme Kalıpları",
    desc: "Yüksek hassasiyetli kesme kalıpları ile temiz ve pürüzsüz kesim sonuçları.",
  },
  {
    icon: CircleDot,
    title: "Sıvama Kalıpları",
    desc: "Karmaşık geometriler için özel sıvama kalıp çözümleri ve üretimi.",
  },
  {
    icon: Zap,
    title: "Tel Erozyon Kesimi (Wire EDM)",
    desc: "Mikron düzeyinde hassasiyet gerektiren parçalar için CNC tel erozyon kesim hizmeti.",
  },
];

const ServicesSection = () => (
  <section id="hizmetler" className="py-24 gradient-navy">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Hizmetlerimiz</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground">
          Kapsamlı Kalıp ve Kesim Çözümleri
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-navy/40 border border-steel/20 rounded p-6 hover:border-primary/40 transition-colors duration-200"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-200">
              <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-foreground mb-2">{s.title}</h3>
            <p className="text-steel-light font-body text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
