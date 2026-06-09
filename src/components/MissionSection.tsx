import { motion } from "framer-motion";
import { Heart, BookOpen, Droplets } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Santé",
    description: "Accès aux soins médicaux de base, campagnes de vaccination et sensibilisation à l'hygiène dans les communautés rurales.",
  },
  {
    icon: BookOpen,
    title: "Éducation",
    description: "Construction d'écoles, formation des enseignants et programmes de bourses pour les enfants défavorisés.",
  },
  {
    icon: Droplets,
    title: "Eau & Assainissement",
    description: "Installation de puits, systèmes de filtration et formation à la gestion durable des ressources en eau.",
  },
];

const MissionSection = () => {
  return (
    <section id="identite" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Notre identité
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agir là où l'on a besoin de nous
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            NUNYA intervient au cœur des communautés d'Afrique de l'Ouest pour apporter des solutions concrètes et durables aux défis quotidiens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
