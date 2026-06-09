import { motion } from "framer-motion";

const partenaires = [
  "UNICEF",
  "Croix-Rouge",
  "Médecins Sans Frontières",
  "OMS",
  "Banque Mondiale",
  "Union Européenne",
];

const PartenairesSection = () => {
  return (
    <section id="partenaires" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Nos partenaires
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partenaires.map((nom, index) => (
            <motion.div
              key={nom}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl py-8 px-6 flex items-center justify-center hover:border-secondary/50 transition-colors"
            >
              <span className="font-heading text-lg font-bold text-foreground/70">{nom}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartenairesSection;
