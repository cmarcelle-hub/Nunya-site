import { motion } from "framer-motion";
import { Users, HandHeart, Globe } from "lucide-react";

const actions = [
  {
    icon: Users,
    title: "Devenir bénévole",
    description: "Rejoignez nos équipes sur le terrain ou depuis chez vous pour contribuer à nos projets humanitaires.",
  },
  {
    icon: HandHeart,
    title: "Parrainer un enfant",
    description: "Offrez un avenir à un enfant en finançant sa scolarité, ses repas et ses soins médicaux.",
  },
  {
    icon: Globe,
    title: "Organiser un événement",
    description: "Mobilisez votre communauté en organisant une collecte de fonds ou un événement de sensibilisation.",
  },
];

const AgirEnsembleSection = () => {
  return (
    <section id="agir" className="py-24 px-6 bg-forest-deep">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
            Agir ensemble
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sand mb-6">
            Comment nous rejoindre
          </h2>
          <p className="text-sand/70 font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Il existe de nombreuses façons de contribuer à notre mission. Chaque geste compte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <action.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-sand mb-3">{action.title}</h3>
              <p className="text-sand/70 font-body leading-relaxed">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgirEnsembleSection;
