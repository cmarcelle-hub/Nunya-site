import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Actualites = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
              Actualités
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Dernières nouvelles
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-xl p-8 md:p-10 border border-border border-dashed text-center"
          >
            <p className="text-muted-foreground font-body text-lg leading-relaxed italic">
              Votre texte ici — Ajoutez vos articles et nouvelles de l'ONG dans cette section.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Actualites;
