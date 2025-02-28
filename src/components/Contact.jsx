import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Met à jour uniquement le champ correspondant
    });
  };

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Paramètres à envoyer via EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      // Envoi de l'email via EmailJS
      const result = await emailjs.send(
        "service_ay3tjtu", // Service ID EmailJS
        "template_4jfd7hp", // Template ID EmailJS
        templateParams,
        "DB-imx4z1Z0t9-28V" // Clé publique EmailJS
      );

      console.log("Email envoyé :", result.text);
      alert("Message envoyé avec succès !");

      // Réinitialise le formulaire après envoi réussi
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div id="contact" className="contact__container">
      <div className="contact__card">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          {/* Champ Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          {/* Champ Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          {/* Bouton d'envoi */}
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
