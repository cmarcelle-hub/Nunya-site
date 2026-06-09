import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  nom: string;
  prenom: string;
  dateNaissance: string;
  adresse: string;
  codePostal: string;
  ville: string;
  telephone: string;
  email: string;
  profession: string;
  typeAdhesion: string;
  charte: boolean;
  imageOk: boolean;
  signature: string;
};

export default function AdhesionForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    dateNaissance: "",
    adresse: "",
    codePostal: "",
    ville: "",
    telephone: "",
    email: "",
    profession: "",
    typeAdhesion: "",
    charte: false,
    imageOk: false,
    signature: "",
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.charte) {
      setError("Vous devez accepter la charte de l’association.");
      return;
    }

    setSending(true);

    /**
     * IMPORTANT :
     * Remplace cette URL par ta vraie URL Formspree.
     * Exemple : https://formspree.io/f/abcdwxyz
     */
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvagjgq";

    const payload = {
      Nom: formData.nom,
      Prénom: formData.prenom,
      "Date de naissance": formData.dateNaissance,
      Adresse: formData.adresse,
      "Code postal": formData.codePostal,
      Ville: formData.ville,
      Téléphone: formData.telephone,
      "E-mail": formData.email,
      "Profession / Statut": formData.profession,
      "Type d’adhésion": formData.typeAdhesion,
      "Charte acceptée": formData.charte ? "Oui" : "Non",
      "Utilisation de l’image autorisée": formData.imageOk ? "Oui" : "Non",
      Signature: formData.signature,
      _replyto: formData.email,
      _subject: "Nouvelle demande d’adhésion NUNYA",
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi du formulaire.");
      }

      setSubmitted(true);

      setFormData({
        nom: "",
        prenom: "",
        dateNaissance: "",
        adresse: "",
        codePostal: "",
        ville: "",
        telephone: "",
        email: "",
        profession: "",
        typeAdhesion: "",
        charte: false,
        imageOk: false,
        signature: "",
      });
    } catch {
      setError(
        "Une erreur est survenue lors de l’envoi. Veuillez réessayer ou nous contacter directement par e-mail."
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-xl p-8 md:p-10 border border-border text-center"
      >
        <div className="mb-4 text-4xl" role="img" aria-label="confirmation">
          ✅
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Votre demande d’adhésion a bien été transmise.
        </h2>

        <p className="text-muted-foreground font-body">
          Nous reviendrons vers vous rapidement.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-card rounded-xl p-8 md:p-10 border border-border"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Adhérer à l’association
        </h2>

        <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-4">
          Remplissez directement le formulaire ci-dessous pour transmettre votre
          demande d’adhésion. Vous pouvez consulter ou télécharger la charte de
          l’association avant de valider votre demande. Vous pouvez également remplir manuellement la fiche d'adhésion et nous la renvoyer par mail.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <a
            href="/Documents/charte-nunya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2 font-body font-medium hover:bg-muted transition-colors"
          >
            Télécharger la charte
          </a>
          <a
            href="/Documents/fiche-adhesion-nunya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2 font-body font-medium hover:bg-muted transition-colors"
          >
            Télécharger la fiche d’adhésion
          </a>
        </div>
   
      </div>

      <form
        className="space-y-5 max-w-3xl mx-auto"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Votre prénom"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Date de naissance <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dateNaissance"
              required
              value={formData.dateNaissance}
              onChange={handleChange}
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06..."
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="adresse"
              required
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Votre adresse postale"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Code postal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="codePostal"
              required
              value={formData.codePostal}
              onChange={handleChange}
              placeholder="75000"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ville"
              required
              value={formData.ville}
              onChange={handleChange}
              placeholder="Votre ville"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Profession / Statut
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Votre profession ou statut"
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Type d’adhésion <span className="text-red-500">*</span>
            </label>
            <select
              name="typeAdhesion"
              required
              value={formData.typeAdhesion}
              onChange={handleChange}
              className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
            >
              <option value="">Sélectionnez un type d’adhésion</option>
              <option value="Membre actif / active">
                Membre actif / active
              </option>
              <option value="Membre bienfaiteur / bienfaitrice">
                Membre bienfaiteur / bienfaitrice
              </option>
              <option value="Donateur / donatrice">
                Donateur / donatrice
              </option>
              <option value="Membre du bureau">Membre du bureau</option>
            </select>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="charte"
              id="charte"
              required
              checked={formData.charte}
              onChange={handleChange}
              className="mt-1 accent-secondary"
            />

            <label
              htmlFor="charte"
              className="font-body text-sm text-foreground leading-relaxed"
            >
              J’ai lu et j’accepte la charte de l’association{" "}
              <a
                href="/documents/charte-nunya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-secondary hover:opacity-80"
              >
                Télécharger la charte
              </a>
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="imageOk"
              id="imageOk"
              checked={formData.imageOk}
              onChange={handleChange}
              className="mt-1 accent-secondary"
            />

            <label
              htmlFor="imageOk"
              className="font-body text-sm text-foreground leading-relaxed"
            >
              J’autorise l’association à utiliser mon image dans le cadre de ses
              activités.
            </label>
          </div>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Signature numérique <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="signature"
            required
            value={formData.signature}
            onChange={handleChange}
            placeholder="Écrire votre nom et prénom ici"
            className="w-full border border-border rounded-md px-4 py-2 bg-background font-body text-foreground"
          />

          <p className="text-xs text-muted-foreground mt-1">
            Merci de renseigner votre signature en toutes lettres pour valider
            votre demande.
          </p>
        </div>

        {error && <p className="text-red-600 font-body text-sm">{error}</p>}

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-secondary text-secondary-foreground py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {sending ? "Envoi en cours..." : "Envoyer ma demande d’adhésion"}
        </button>
      </form>
    </motion.div>
  );
}