import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Communauté en Afrique de l'Ouest"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-forest-deep/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-heading text-7xl md:text-9xl font-bold tracking-wider text-sand mb-2">
            NUNYA
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <p className="text-gold text-sm md:text-base uppercase tracking-[0.4em] font-body font-medium">
              ASSOCIATION HUMANITAIRE NUNYA
            </p>
            <span className="h-px w-12 bg-gold" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-sand/80 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Son engagement repose sur un principe essentiel : favoriser un partage de savoirs réciproque, dans lequel chaque
          territoire, chaque culture et chaque individu contribue à l’enrichissement collectif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/notre-identite"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Découvrir notre mission
          </a>
          <a
            href="/faire-un-don"
            className="border border-sand/40 text-sand px-8 py-3 rounded-md font-body font-semibold text-base hover:bg-sand/10 transition-colors"
          >
            Faire un don
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-sand/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
