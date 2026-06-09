import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FaireUnDon = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
              Faire un don
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Votre générosité change des vies
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Chaque don, quel que soit son montant, contribue directement à nos actions sur le terrain : formations, éducation, partage de savoir. 100 % de vos dons sont utilisés pour nos projets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-xl p-8 md:p-10 border border-border text-center"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Faites un don via HelloAsso
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              HelloAsso est une plateforme sécurisée dédiée aux associations. Votre don est déductible des impôts.
            </p>
            <a
              href="https://www.helloasso.com/associations/rap2sfrance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Faire un don sur HelloAsso <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaireUnDon;
