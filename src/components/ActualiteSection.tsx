import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const articles = [
  {
    date: "Mars 2026",
    title: "Inauguration du centre de santé de Tamale",
    excerpt: "Après 18 mois de travaux, le centre accueille désormais ses premiers patients dans la région nord du Ghana.",
  },
  {
    date: "Février 2026",
    title: "Campagne de vaccination au Burkina Faso",
    excerpt: "Plus de 2 000 enfants vaccinés dans la province du Kadiogo grâce à nos équipes mobiles.",
  },
  {
    date: "Janvier 2026",
    title: "Partenariat avec l'UNICEF au Togo",
    excerpt: "Un accord cadre signé pour renforcer l'accès à l'éducation dans les zones rurales de la région Maritime.",
  },
];

const ActualiteSection = () => {
  return (
    <section id="actualite" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Actualité
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dernières nouvelles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-background rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                <Calendar size={14} className="text-secondary" />
                {article.date}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActualiteSection;
