import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Atölye", href: "#atolye" },
  { label: "İletişim", href: "#iletisim" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-steel/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg text-navy-foreground tracking-tight">
          ÇELİKTAŞ<span className="text-primary font-normal ml-1 text-sm">KALIP</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-steel-light hover:text-primary transition-colors duration-200 font-body"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold">
            <a href="#iletisim">Teklif Al</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-navy-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-steel/20 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-steel-light hover:text-primary font-body"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild size="sm" className="w-full bg-primary text-primary-foreground font-display font-semibold">
              <a href="#iletisim" onClick={() => setOpen(false)}>Teklif Al</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
