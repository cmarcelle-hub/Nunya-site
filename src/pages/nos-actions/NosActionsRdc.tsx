import { motion } from "framer-motion";

const NosActionsRdc = () => {
  return (
    <div className="pt-24 pb-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Nos actions
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            RDC
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Projets et partenariats en République Démocratique du Congo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-xl p-8 md:p-10 border border-border"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Projets en RDC
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed italic">
            Votre texte ici — Décrivez les projets menés ou prévus en RDC.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NosActionsRdc;
