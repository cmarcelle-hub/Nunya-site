import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Agir ensemble
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comment nous aider ?
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            chaque action compte. Que tu agisses en France ou que tu ailles directement sur le terrain pour suivre un projet,
            on a besoin de toi !
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Link
            to="/agir-ensemble"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Agir ensemble
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
