import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Camp de soutien scolaire gratuit à Gboto-Vodoupé",
    path: "/nos-actions/togo/education/soutien-scolaire",
    description:
      "Un camp éducatif gratuit destiné aux élèves du primaire, du collège et du lycée afin de renforcer leurs acquis scolaires.",
    image: "/soutienscolaire.jpeg",
    tag: "Août 2026",
  },
];

const TogoEducation = () => {
  return (
    <main className="relative overflow-hidden">
      <section className="relative px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-secondary uppercase tracking-[0.35em] text-sm font-body font-semibold mb-5">
              Togo — Éducation
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
              Des projets pour renforcer l’accès au savoir et la réussite scolaire.
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Les actions éducatives menées au Togo visent à soutenir les élèves,
              consolider les apprentissages fondamentaux et créer des cadres
              d’accompagnement accessibles, motivants et durables.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link
                  to={project.path}
                  className="group block overflow-hidden rounded-[2rem] border border-border bg-card hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-forest-deep/25" />
                    <span className="absolute left-6 top-6 rounded-full bg-gold px-4 py-2 text-sm font-body font-semibold text-forest-deep">
                      {project.tag}
                    </span>
                  </div>

                  <div className="p-8">
                    <p className="text-secondary uppercase tracking-[0.25em] text-xs font-body font-semibold mb-4">
                      Projet éducatif
                    </p>

                    <h2 className="font-heading text-3xl font-bold text-foreground mb-5">
                      {project.title}
                    </h2>

                    <p className="font-body text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <span className="font-body text-secondary font-semibold">
                      Découvrir le projet →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TogoEducation;