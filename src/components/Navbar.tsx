import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre identité", href: "/notre-identite" },
  { label: "Actualités", href: "/actualites" },
  {
    label: "Nos actions",
    href: "/nos-actions",
    subLinks: [
      { label: "Togo", href: "/nos-actions/togo" },
      { label: "RDC", href: "/nos-actions/rdc" },
    ],
  },
  { label: "Agir ensemble", href: "/agir-ensemble" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-deep/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-heading text-2xl font-bold tracking-wider text-sand">NUNYA</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-body">ASSOCIATION HUMANITAIRE NUNYA</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 transition-colors text-sm font-body font-medium tracking-wide px-3 py-2 rounded-md hover:bg-white/5 ${
                  location.pathname === link.href ? "text-gold" : "text-sand/80 hover:text-gold"
                }`}
              >
                {link.label}
                {link.subLinks && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />}
              </Link>
              {link.subLinks && activeDropdown === link.label && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-forest-deep border border-primary/20 rounded-md shadow-xl py-2 min-w-[180px]">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-4 py-2 text-sm text-sand/80 hover:text-gold hover:bg-white/5 font-body transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li className="ml-3">
            <Link
              to="/faire-un-don"
              className="bg-secondary text-secondary-foreground px-5 py-2 rounded-md text-sm font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Faire un don
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-sand">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-forest-deep border-t border-primary/20 overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.subLinks ? (
                    <>
                      <div className="flex items-center justify-between w-full py-2">
                        <Link
                          to={link.href}
                          onClick={() => setOpen(false)}
                          className="text-sand/80 hover:text-gold transition-colors text-sm font-body font-medium"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`Ouvrir le menu ${link.label}`}
                          onClick={() => setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)}
                          className="p-1 text-sand/80 hover:text-gold transition-colors"
                        >
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${mobileSubOpen === link.label ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileSubOpen === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            <Link
                              to={link.href}
                              onClick={() => setOpen(false)}
                              className="block text-sand/70 hover:text-gold transition-colors text-sm font-body py-1.5"
                            >
                              Voir tout
                            </Link>
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                onClick={() => setOpen(false)}
                                className="block text-sand/70 hover:text-gold transition-colors text-sm font-body py-1.5"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-sand/80 hover:text-gold transition-colors text-sm font-body font-medium py-2"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/faire-un-don"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-secondary text-secondary-foreground px-5 py-2 rounded-md text-sm font-body font-semibold"
                >
                  Faire un don
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
