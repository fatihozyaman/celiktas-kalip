import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mesajınız gönderildi", description: "En kısa sürede size dönüş yapacağız." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="iletisim" className="py-24 gradient-navy">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-[0.15em] uppercase mb-3">İletişim</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Adınız" required className="bg-navy/40 border-steel/30 text-navy-foreground placeholder:text-steel-light/60 font-body" />
              <Input placeholder="Firma Adı" className="bg-navy/40 border-steel/30 text-navy-foreground placeholder:text-steel-light/60 font-body" />
            </div>
            <Input type="email" placeholder="E-posta Adresiniz" required className="bg-navy/40 border-steel/30 text-navy-foreground placeholder:text-steel-light/60 font-body" />
            <Input type="tel" placeholder="Telefon Numaranız" className="bg-navy/40 border-steel/30 text-navy-foreground placeholder:text-steel-light/60 font-body" />
            <Textarea placeholder="Projeniz hakkında kısa bilgi..." rows={4} required className="bg-navy/40 border-steel/30 text-navy-foreground placeholder:text-steel-light/60 font-body resize-none" />
            <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold">
              {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-navy-foreground">Telefon</p>
                <p className="text-steel-light font-body text-sm">+90 (212) 000 00 00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-navy-foreground">E-posta</p>
                <p className="text-steel-light font-body text-sm">info@celiktaskalip.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-navy-foreground">Adres</p>
                <p className="text-steel-light font-body text-sm">Organize Sanayi Bölgesi, İstanbul, Türkiye</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded overflow-hidden border border-steel/20 h-52">
              <iframe
                title="Çeliktaş Kalıp Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3498498763!2d28.731994399999998!3d41.0054958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
