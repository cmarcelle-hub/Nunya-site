import { motion } from "framer-motion";
import { Users, Handshake, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdhesionForm from "./AdhesionForm";

const AgirEnsemble = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-3">
              Agir ensemble
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Rejoignez-nous
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, title: "Devenir bénévole", desc: "Votre texte ici — Expliquez comment devenir bénévole." },
              { icon: Handshake, title: "Participer aux projets", desc: "Votre texte ici — Décrivez comment participer." },
              { icon: Mail, title: "Nous contacter", desc: "Votre texte ici — Présentez le formulaire de contact." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <AdhesionForm />
            </div>
          </section>

          {/* Formulaire de contact placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-xl p-8 md:p-10 border border-border"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Formulaire de contact
            </h2>
            <form className="space-y-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Nom</label>
                <input type="text" className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Message</label>
                <textarea rows={4} className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground resize-none" placeholder="Votre message…" />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgirEnsemble;
