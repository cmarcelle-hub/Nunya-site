import { motion } from "framer-motion";

const facts = [
  ["Lieu d’intervention", "Gboto-Vodoupé, Togo"],
  ["Période", "Août 2026"],
  ["Public concerné", "Élèves du primaire, du collège et du lycée"],
  ["Objectif", "Améliorer les performances scolaires et prévenir l’échec scolaire"],
  ["Partenaires", "RAP2S-France, CJLE, ministère des Enseignements du Togo"],
  ["Budget prévisionnel", "2 585 000 FCFA, soit environ 3 941 euros"],
];

const activities = [
  "Ateliers de révision par niveau",
  "Cours particuliers et en petits groupes",
  "Activités ludiques et interactives",
  "Ateliers de gestion du temps et de méthode de travail",
  "Échanges culturels entre jeunes Togolais et bénévoles français",
  "Activités sportives et culturelles",
  "Initiation à l’élevage et à l’agriculture écologique",
  "Évaluations avant et après le camp pour mesurer les progrès",
];

const ProjetSoutienScolaireTogo = () => {
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
              Togo — Camp de soutien scolaire
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
              Camp de soutien scolaire gratuit à Gboto-Vodoupé.
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              À Gboto-Vodoupé, village situé à environ 80 km de Lomé, de nombreux
              élèves issus de milieux défavorisés rencontrent des difficultés
              scolaires qui freinent leur progression et fragilisent leur réussite
              académique.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-border shadow-sm"
          >
            <img
              src="/soutienscolaire.jpeg"
              alt="Camp de soutien scolaire à Gboto-Vodoupé"
              className="w-full h-[320px] md:h-[520px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-forest-deep/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-forest-deep/80 to-transparent">
              <p className="font-body text-sand/90 text-sm md:text-base">
                Camp de soutien scolaire gratuit à Gboto-Vodoupé — Togo
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-20 bg-forest-deep text-sand">
        <div className="container mx-auto max-w-6xl">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
            En bref
          </p>

          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-12">
            Une action éducative ciblée, gratuite et structurée.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facts.map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-sand/15 bg-sand/5 p-6 backdrop-blur-sm"
              >
                <div className="h-1 w-10 rounded-full bg-gold mb-5" />
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-body font-semibold mb-3">
                  {label}
                </p>
                <p className="font-body text-sand/85 leading-relaxed">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                Pourquoi nous intervenons
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Répondre aux difficultés d’apprentissage par un accompagnement accessible.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                L’éducation est un levier essentiel de développement, mais de
                nombreux élèves togolais restent confrontés à des difficultés
                d’apprentissage, en particulier lorsqu’ils vivent dans des zones
                moins favorisées.
              </p>

              <p>
                Le manque d’accompagnement individualisé, de ressources
                pédagogiques et d’espaces de soutien limite parfois leur capacité
                à consolider leurs acquis.
              </p>

              <p className="text-foreground font-semibold">
                Ce camp répond à un besoin concret : offrir gratuitement aux
                élèves un cadre de révision structuré, stimulant et accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-24 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
            Ce que nous faisons
          </p>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12">
            Des activités pédagogiques, humaines et interculturelles.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group rounded-2xl border border-border bg-background p-5 hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300"
              >
                <span className="block font-heading text-4xl font-bold text-secondary/15 mb-4">
                  0{index + 1}
                </span>
                <div className="h-1 w-10 rounded-full bg-secondary mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="font-body text-foreground leading-relaxed">
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center rounded-[2rem] border border-secondary/20 bg-secondary/10 p-8 md:p-12">
            <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
              Notre objectif
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Faire de l’éducation un levier concret d’égalité des chances.
            </h2>

            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
              En renforçant les acquis scolaires et la confiance des élèves, le
              projet contribue à leur réussite, à leur épanouissement personnel
              et à leur capacité à construire leur avenir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjetSoutienScolaireTogo;