import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const countries = [
  {
    name: "Togo",
    path: "/nos-actions/togo",
    tag: "Afrique de l’Ouest",
    description:
      "Actions éducatives, formations, accompagnement local et soutien aux femmes.",
  },
  {
    name: "RDC",
    path: "/nos-actions/rdc",
    tag: "Afrique centrale",
    description:
      "Projets d’alphabétisation, accompagnement communautaire et autonomie locale.",
  },
  {
    name: "Bénin",
    path: "/nos-actions/benin",
    tag: "Afrique de l’Ouest",
    description:
      "Rubrique en construction pour les futures actions de l’association.",
  },
];

const NosActionsIndex = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-[480px] -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <section className="relative px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-secondary uppercase tracking-[0.35em] text-sm font-body font-semibold mb-5">
              Nos actions
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
              Des projets construits avec les territoires.
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              NUNYA développe ses actions en lien avec les besoins du terrain,
              les partenaires locaux et les communautés concernées. Chaque projet
              s’inscrit dans une logique de coopération, de transmission et
              d’autonomie durable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link
                  to={country.path}
                  className="group relative block min-h-[360px] rounded-[2rem] bg-forest-deep text-sand overflow-hidden border border-border hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/20 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full border border-sand/20" />

                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold mb-5">
                        {country.tag}
                      </p>

                      <h2 className="font-heading text-4xl font-bold mb-6">
                        {country.name}
                      </h2>

                      <p className="font-body text-sand/75 leading-relaxed">
                        {country.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <span className="font-body text-sm uppercase tracking-[0.2em] text-sand/70">
                        Découvrir
                      </span>
                      <span className="h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
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

export default NosActionsIndex;