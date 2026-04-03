import { motion } from "framer-motion";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";

const images = [
  { src: workshop1, alt: "CNC makine parkuru", caption: "Modern Makine Parkuru" },
  { src: workshop2, alt: "Hassas kalıp üretimi", caption: "Hassas Kalıp İmalatı" },
  { src: workshop3, alt: "Tel erozyon kesim", caption: "Tel Erozyon Kesim" },
];

const WorkshopSection = () => (
  <section id="atolye" className="py-24 bg-muted">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">Üretim Atölyemiz</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
          Makine Parkuru ve Üretim Tesisimiz
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={img.caption}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="font-display font-bold text-navy-foreground text-lg">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopSection;
