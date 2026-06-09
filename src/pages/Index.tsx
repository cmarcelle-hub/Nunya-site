import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        {/* Présentation */}
        <section
          className="py-20 px-6"
          
        >
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed bg-white/80 backdrop-blur rounded-lg p-6 inline-block">
                L’Association Humanitaire Nunya s’inscrit dans une démarche humanitaire consciente, exigeante et évolutive.
                Dans un contexte où les actions menées en Afrique de l’Ouest peuvent parfois être mal perçues ou inadaptées,
                l’association affirme sa volonté de proposer une approche différente, fondée sur la lucidité et la
                responsabilité.
              </p>
            </motion.div>
          </div>
        </section>
   

        {/* Aperçu Notre identité */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
                Notre identité
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Anciennement appelée RAP2S, l'association se modernise. Découvrez notre histoire, nos valeurs et notre mission.
              </p>
              <Link
                to="/notre-identite"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Lire plus <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Actualités */}
        <section className="py-20 px-6 bg-forest-deep text-sand">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
                Actualités
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-sand mb-6">
                Découvrez l'histoire de la région
              </h2>
              <p className="text-sand/80 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Il est souvent utile de comprendre, l'histoire et la politique du Togo et de ses alentours, avant d'agir !
              </p>
              <Link
                to="/actualites"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Lire plus <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Aperçu Nos actions */}
        <section className="py-20 px-6 bg-forest-deep text-sand">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
                Nos actions
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-sand mb-6">
                Sur le terrain
              </h2>
              <p className="text-sand/80 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                De la formation au Togo à nos projets en RDC, découvrez comment NUNYA agit concrètement.
              </p>
              <Link
                to="/nos-actions"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Voir nos actions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <ImpactSection />

        <Footer />
      </main>
    </div>
  );
};

export default Index;
