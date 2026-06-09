import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  "Dignité humaine",
  "Solidarité",
  "Réciprocité",
  "Respect des cultures",
  "Égalité",
  "Autonomie",
  "Transmission",
  "Transparence",
  "Durabilité",
];

const actions = [
  "Accès à l’éducation et aux savoirs fondamentaux",
  "Alphabétisation",
  "Soutien scolaire",
  "Prévention et sensibilisation",
  "Formation et transmission de compétences",
  "Accompagnement de projets locaux",
  "Valorisation des cultures africaines",
  "Renforcement de l’autonomie des populations vulnérables",
];

const principles = [
  "Écouter",
  "Comprendre",
  "Construire",
  "Transmettre",
];

const teamMembers = [
  {
    name: "Patrick Le Breton",
    role: "Président",
    image: null,
  },
  {
    name: "Cyprien MARCELLE",
    role: "Vice-président",
    image: "/Cyprien.jpg",
  },
  {
    name: "Inès GABSI",
    role: "Secrétaire générale",
    image: "/Ines.png",
  },
  {
    name: "Brice SYNDEOUH",
    role: "Responsable projet — Basé au Togo",
    image: "/Brice.png",
  },
];

const NotreIdentite = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      

      <main className="relative pt-24">
        {/* Formes décoratives de fond */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-[520px] -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-forest-deep/10 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <p className="text-secondary uppercase tracking-[0.35em] text-sm font-body font-semibold mb-5">
                Notre identité
              </p>

              <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
                Une solidarité fondée sur le savoir, la réciprocité et la dignité.
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                L’Association Humanitaire NUNYA est une association de solidarité
                internationale engagée auprès des populations vulnérables,
                principalement en Afrique de l’Ouest, en République démocratique du
                Congo et en France.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="relative px-6 pb-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="sticky top-28 hidden lg:block"
              >
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-secondary via-gold to-transparent" />
                  <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                    Qui sommes-nous ?
                  </p>
                  <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">
                    Une nouvelle identité pour une vision humanitaire plus consciente.
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -left-6 top-8 hidden md:block h-20 w-20 rounded-full border border-secondary/30" />
                <div className="relative bg-card/70 backdrop-blur-sm border border-border/60 rounded-[2rem] p-8 md:p-12 shadow-sm">
                  <h2 className="lg:hidden font-heading text-3xl font-bold text-foreground mb-6">
                    Qui sommes-nous ?
                  </h2>

                  <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                    <p>
                      Anciennement dénommée{" "}
                      <span className="text-foreground font-semibold">
                        RAP2S – Réseau Afrique Partage Savoir Solidaire
                      </span>
                      , l’association poursuit aujourd’hui son action sous une
                      nouvelle identité :{" "}
                      <span className="text-secondary font-semibold">NUNYA</span>,
                      un mot issu de la langue éwé qui signifie{" "}
                      <span className="text-foreground font-semibold">« savoir »</span>.
                    </p>

                    <p>
                      Ce nom incarne notre conviction centrale : le savoir n’est
                      pas seulement ce que l’on transmet, c’est aussi ce que l’on
                      reçoit, ce que l’on partage et ce que l’on construit
                      ensemble.
                    </p>

                    <p>
                      NUNYA agit dans les domaines de l’éducation, de
                      l’alphabétisation, du soutien scolaire, de la formation, de
                      la sensibilisation, de l’accès à l’information et de
                      l’accompagnement des populations vulnérables. Nos projets
                      visent à renforcer l’autonomie des personnes et des
                      communautés, sans créer de dépendance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                  Notre histoire
                </p>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                  D’une prise de conscience à une nouvelle étape d’engagement.
                </h2>

                <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                  <p>
                    L’association est née en 2015, à l’initiative de{" "}
                    <span className="text-foreground font-semibold">
                      Patrick Le Breton
                    </span>
                    , à la suite de rencontres humaines marquantes ayant provoqué
                    une prise de conscience face aux inégalités d’accès au savoir,
                    à l’éducation, à l’information et aux ressources essentielles.
                  </p>

                  <p>
                    Depuis sa création, l’association a mené et soutenu des
                    actions humanitaires, solidaires, éducatives et sociales,
                    principalement en lien avec l’Afrique de l’Ouest. Après plus
                    de onze années d’engagement, NUNYA entre aujourd’hui dans une
                    nouvelle étape de son développement.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2rem] border border-gold/20 rotate-2" />
                <div className="relative rounded-[2rem] bg-forest-deep text-sand p-8 md:p-10 overflow-hidden">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20" />
                  <div className="absolute -left-12 bottom-8 h-28 w-28 rounded-full border border-sand/20" />

                  <p className="text-gold uppercase tracking-[0.3em] text-xs font-body font-semibold mb-6">
                    Nouvelle dynamique
                  </p>

                  <p className="font-body text-lg md:text-xl leading-relaxed text-sand/85">
                    Cette évolution marque une volonté claire : redynamiser
                    l’association, moderniser son fonctionnement et affirmer une
                    vision plus consciente de l’action humanitaire.
                  </p>

                  <div className="mt-8 h-px w-full bg-sand/20" />

                  <p className="font-body text-base md:text-lg leading-relaxed text-sand/75 mt-8">
                    NUNYA souhaite s’inscrire dans une autre démarche : une
                    solidarité fondée sur l’écoute, la coopération et la
                    reconnaissance mutuelle.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre vision */}
        <section className="relative px-6 py-16 md:py-24 bg-forest-deep text-sand">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-px w-40 bg-gold" />
            <div className="absolute right-10 bottom-16 h-px w-56 bg-secondary" />
            <div className="absolute right-1/4 top-20 h-32 w-32 rounded-full border border-sand/20" />
          </div>

          <div className="container relative mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                Notre vision
              </p>

              <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-8">
                Il n’existe pas un seul savoir, ni un seul sens à la transmission.
              </h2>

              <p className="font-body text-lg md:text-xl leading-relaxed text-sand/80">
                NUNYA défend une approche humanitaire fondée sur un partage
                réciproque des savoirs. Les personnes et les territoires que nous
                accompagnons ne sont pas de simples bénéficiaires : ils sont aussi
                porteurs de connaissances, d’expériences, de cultures, de pratiques
                et de solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {[
                {
                  title: "Agir avec",
                  text: "Construire les projets avec les populations, et non à leur place.",
                },
                {
                  title: "Écouter avant d’agir",
                  text: "Comprendre les besoins, les contextes et les réalités locales avant toute intervention.",
                },
                {
                  title: "Reconnaître la dignité",
                  text: "Ne jamais réduire les personnes à leurs difficultés, mais reconnaître leur capacité d’action.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="rounded-[1.5rem] border border-sand/15 bg-sand/5 p-7 backdrop-blur-sm"
                >
                  <div className="h-10 w-10 rounded-full bg-gold/20 border border-gold/30 mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sand/75 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que nous faisons */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                  Ce que nous faisons
                </p>

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Des projets humanitaires, éducatifs, sociaux et culturels.
                </h2>

                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Chaque projet est pensé à partir des besoins du terrain, en
                  lien avec des partenaires locaux, des bénévoles, des
                  enseignants, des familles, des associations et des acteurs
                  communautaires.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {actions.map((action, index) => (
                  <motion.div
                    key={action}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    className="group rounded-2xl border border-border bg-card/70 p-5 hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-1 w-10 rounded-full bg-secondary mb-4 group-hover:w-16 transition-all duration-300" />
                    <p className="font-body text-foreground leading-relaxed">
                      {action}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comment nous agissons */}
        <section className="relative px-6 py-16 md:py-24 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mb-12"
            >
              <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                Comment nous agissons
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Écouter, comprendre, construire, transmettre.
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Nos interventions ne cherchent pas à imposer une solution
                extérieure, mais à accompagner des dynamiques locales, à renforcer
                des capacités existantes et à créer des passerelles entre les
                savoirs.
              </p>
            </motion.div>

            <div className="relative grid md:grid-cols-4 gap-5">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-[1.5rem] bg-background border border-border p-6 overflow-hidden"
                >
                  <span className="absolute right-5 top-4 font-heading text-6xl font-bold text-secondary/10">
                    0{index + 1}
                  </span>
                  <div className="relative">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {principle}
                    </h3>
                    <div className="h-px w-14 bg-gold" />
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-10 max-w-4xl">
              Cette démarche suppose un rapport d’égal à égal. Elle repose sur la
              confiance, la transparence et la reconnaissance de la valeur de
              chacun.
            </p>
          </div>
        </section>

{/* Notre équipe */}
<section className="relative px-6 py-16 md:py-24">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mb-12"
    >
      <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
        Notre équipe
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
        Une équipe engagée au service d’une solidarité plus consciente.
      </h2>

      <p className="text-muted-foreground font-body text-lg leading-relaxed">
        NUNYA s’appuie sur une équipe engagée, réunie autour d’une même volonté :
        développer des projets utiles, humains et durables, en lien étroit avec les réalités du terrain.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="group relative rounded-[1.75rem] border border-border bg-card/70 backdrop-blur-sm p-5 hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-2xl group-hover:bg-gold/10 transition-all duration-300" />

          {member.image ? (
            <div className="relative mb-5">
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-br from-secondary/30 via-gold/20 to-transparent blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-background">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ) : (
            <div className="mb-5 h-72 rounded-[1.5rem] border border-dashed border-secondary/25 bg-secondary/5 flex items-center justify-center">
              <span className="font-body text-sm uppercase tracking-[0.25em] text-secondary/70">
                Membre du bureau
              </span>
            </div>
          )}

          <div className="relative">
            <div className="h-1 w-12 rounded-full bg-secondary mb-4 group-hover:w-20 transition-all duration-300" />
            <h3 className="font-heading text-2xl font-bold text-foreground leading-snug">
              {member.name}
            </h3>
            <p className="mt-2 text-muted-foreground font-body leading-relaxed">
              {member.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Nos valeurs */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-secondary uppercase tracking-[0.3em] text-xs font-body font-semibold mb-4">
                Nos valeurs
              </p>

              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                Une solidarité plus lucide, plus responsable et plus horizontale.
              </h2>

              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                À travers ses actions, NUNYA souhaite défendre une solidarité qui
                ne parle pas à la place des autres, mais qui construit avec eux.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {values.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="rounded-full border border-secondary/30 bg-secondary/10 px-5 py-3 font-body text-sm md:text-base text-foreground"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotreIdentite;