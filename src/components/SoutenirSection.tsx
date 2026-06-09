import { motion } from "framer-motion";
import { Heart, CreditCard, Package } from "lucide-react";

const SoutenirSection = () => {
  return (
    <section id="soutenir" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Nous soutenir
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Votre soutien change des vies
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            100% de vos dons sont reversés aux projets sur le terrain. Transparence totale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: CreditCard, title: "Don ponctuel", desc: "Faites un don unique pour soutenir un projet spécifique." },
            { icon: Heart, title: "Don mensuel", desc: "Un soutien régulier pour un impact durable et planifiable." },
            { icon: Package, title: "Don en nature", desc: "Matériel scolaire, médical ou alimentaire pour nos missions." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border text-center hover:border-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#don"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Faire un don maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SoutenirSection;
