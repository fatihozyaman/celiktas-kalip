const Footer = () => (
  <footer className="py-8 bg-navy border-t border-steel/20">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-steel-light font-body text-sm">
        © {new Date().getFullYear()} Çeliktaş Kalıp Makine. Tüm hakları saklıdır.
      </p>
      <div className="flex gap-6">
        <a href="#hizmetler" className="text-steel-light hover:text-primary text-sm font-body transition-colors">Hizmetler</a>
        <a href="#hakkimizda" className="text-steel-light hover:text-primary text-sm font-body transition-colors">Hakkımızda</a>
        <a href="#iletisim" className="text-steel-light hover:text-primary text-sm font-body transition-colors">İletişim</a>
      </div>
    </div>
  </footer>
);

export default Footer;
