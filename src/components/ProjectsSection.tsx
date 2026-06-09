import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Puits de Koudougou",
    location: "Burkina Faso",
    description: "Construction de 12 puits pour fournir de l'eau potable à plus de 3 000 habitants.",
    status: "En cours",
  },
  {
    title: "École de Lomé",
    location: "Togo",
    description: "Construction d'une école primaire avec 6 salles de classe et une bibliothèque.",
    status: "Terminé",
  },
  {
    title: "Centre de santé de Tamale",
    location: "Ghana",
    description: "Réhabilitation d'un centre de santé communautaire desservant 5 villages environnants.",
    status: "En cours",
  },
];

const ProjectsSection = () => {
  return (
    <section id="actions" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Nos actions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sur le terrain, par pays
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-card rounded-xl overflow-hidden border border-border group hover:border-secondary/50 transition-colors"
            >
              <div className="bg-primary/5 px-6 py-4 flex items-center justify-between">
                <span className="text-muted-foreground font-body text-sm">{project.location}</span>
                <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${
                  project.status === "En cours"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-primary/10 text-primary"
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-secondary font-body font-semibold text-sm group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
