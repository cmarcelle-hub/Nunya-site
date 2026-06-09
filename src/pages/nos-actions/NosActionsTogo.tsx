import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Éducation",
    path: "/nos-actions/togo/education",
    description:
      "Soutien scolaire, concours éducatifs, accès aux savoirs fondamentaux et accompagnement des élèves.",
    number: "01",
  },
  {
    title: "Formation",
    path: "/nos-actions/togo/formation",
    description:
      "Transmission de compétences, ateliers pratiques et renforcement des capacités locales.",
    number: "02",
  },
  {
    title: "Soutien aux femmes",
    path: "/nos-actions/togo/soutien-aux-femmes",
    description:
      "Sensibilisation, autonomie, prévention, accompagnement social et valorisation du rôle des femmes.",
    number: "03",
  },
];

const NosActionsTogo = () => {
  return (
    <main className="relative overflow-hidden">
      <section className="relative px-6 py-20 md:py-28 bg-forest-deep text-sand">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 h-px w-40 bg-gold" />
          <div className="absolute right-10 bottom-16 h-px w-56 bg-secondary" />
          <div className="absolute right-1/4 top-20 h-32 w-32 rounded-full border border-sand/20" />
        </div>

        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-gold uppercase tracking-[0.35em] text-sm font-body font-semibold mb-5">
              Nos actions au Togo
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8">
              Éducation, formation et autonomie locale.
            </h1>

            <p className="font-body text-lg md:text-xl text-sand/75 leading-relaxed max-w-3xl">
              Au Togo, NUNYA développe des projets construits avec les acteurs
              locaux afin de renforcer l’accès au savoir, soutenir les élèves,
              accompagner les communautés et valoriser les initiatives de terrain.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link
                  to={category.path}
                  className="group block h-full rounded-[2rem] border border-border bg-card/70 p-8 hover:border-secondary/50 hover:-translate-y-2 transition-all duration-300"
                >
                  <span className="font-heading text-7xl font-bold text-secondary/15 group-hover:text-secondary/25 transition-colors">
                    {category.number}
                  </span>

                  <div className="h-1 w-12 rounded-full bg-secondary mt-6 mb-6 group-hover:w-20 transition-all duration-300" />

                  <h2 className="font-heading text-3xl font-bold text-foreground mb-5">
                    {category.title}
                  </h2>

                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <span className="font-body text-secondary font-semibold">
                    Voir les projets →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NosActionsTogo;