<template>
  <main class="contact-page">
    <h1>Haben Sie Fragen oder Wünsche?</h1>
    <p>
      Wir freuen uns, von Ihnen zu hören! Ob Sie eine Frage zu unseren Kuchen haben, eine spezielle Anfrage stellen möchten oder uns einfach nur Feedback geben wollen – hier sind Sie richtig. Wir bemühen uns, alle Anfragen so schnell wie möglich zu beantworten.
    </p>

    <section class="contact-form-section">
      <h2>Kontaktformular</h2>
      <p>Nutzen Sie gerne unser Kontaktformular für eine schnelle und unkomplizierte Nachricht.</p>
      <form @submit.prevent="submitForm" novalidate>
        <div class="form-group">
          <label for="name">Ihr Name (Pflichtfeld)</label>
          <input
            id="name"
            type="text"
            v-model.trim="form.name"
            required
            :class="{ invalid: errors.name }"
          />
          <span v-if="errors.name" class="error-msg">Bitte geben Sie Ihren Namen ein.</span>
        </div>

        <div class="form-group">
          <label for="email">Ihre E-Mail-Adresse (Pflichtfeld)</label>
          <input
            id="email"
            type="email"
            v-model.trim="form.email"
            required
            :class="{ invalid: errors.email }"
          />
          <span v-if="errors.email" class="error-msg">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
        </div>

        <div class="form-group">
          <label for="subject">Betreff</label>
          <input id="subject" type="text" v-model.trim="form.subject" />
        </div>

        <div class="form-group">
          <label for="message">Ihre Nachricht (Pflichtfeld)</label>
          <textarea
            id="message"
            rows="6"
            v-model.trim="form.message"
            required
            :class="{ invalid: errors.message }"
          ></textarea>
          <span v-if="errors.message" class="error-msg">Bitte geben Sie eine Nachricht ein.</span>
        </div>

        <div class="form-group checkbox-group">
          <input
            id="privacy"
            type="checkbox"
            v-model="form.privacyAccepted"
            required
            :class="{ invalid: errors.privacyAccepted }"
          />
          <label for="privacy">
            Ich habe die
            <a href="/datenschutzerklaerung" target="_blank" rel="noopener">Datenschutzerklärung</a>
            gelesen und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
          </label>
          <span v-if="errors.privacyAccepted" class="error-msg">
            Bitte stimmen Sie der Datenschutzerklärung zu.
          </span>
        </div>

        <button type="submit">Nachricht senden</button>
      </form>
    </section>

    <section class="other-contacts">
      <h2>Weitere Kontaktmöglichkeiten</h2>
      <p>Sie können uns auch direkt erreichen:</p>
      <ul>
        <li>
          <strong>E-Mail:</strong> Für allgemeine Anfragen, Presse oder Kooperationen.
          <a href="mailto:hello@veganakes.at">hello@veganakes.at</a>
        </li>
        <li>
          <strong>Telefon:</strong> Für dringende Fragen zu einer bestehenden Bestellung.
          <a href="tel:+43732123456">+43 732 123456</a>
        </li>
        <li>
          <strong>Anschrift:</strong> Unser Firmensitz (kein Verkauf vor Ort).<br />
          VeganAkes e.U.<br />
          Domgasse 10<br />
          4020 Linz<br />
          Österreich
        </li>
      </ul>
    </section>

    <section class="office-hours">
      <h2>Erreichbarkeit</h2>
      <p>Unsere Bürozeiten, in denen wir E-Mails und Anrufe beantworten, sind:</p>
      <ul>
        <li>Montag - Freitag: 09:00 - 17:00 Uhr</li>
        <li>Wochenenden & Feiertage: Geschlossen</li>
      </ul>
    </section>

    <section class="social-media">
      <h2>Folgen Sie uns</h2>
      <p>
        Bleiben Sie auf dem Laufenden und entdecken Sie unsere neuesten Kreationen auf unseren Social-Media-Kanälen!
      </p>
      <ul class="social-links">
        <li>
          <a href="https://www.instagram.com/veganakes" target="_blank" rel="noopener" aria-label="Instagram">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/veganakes" target="_blank" rel="noopener" aria-label="Facebook">
            Facebook
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "Kontaktseite",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
      },
      errors: {},
    };
  },
  methods: {
    validateEmail(email) {
      // Simple email regex validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    submitForm() {
      this.errors = {};

      if (!this.form.name) this.errors.name = true;
      if (!this.form.email || !this.validateEmail(this.form.email)) this.errors.email = true;
      if (!this.form.message) this.errors.message = true;
      if (!this.form.privacyAccepted) this.errors.privacyAccepted = true;

      if (Object.keys(this.errors).length === 0) {
        alert("Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.");
        // Here you would normally send the form data to a server
        this.resetForm();
      }
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
      };
      this.errors = {};
    },
  },
};
</script>

<style scoped>
/* .contact-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

h1,
h2 {
  color: #2c3e50;
}

form {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

input[type="text"],
input[type="email"],
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

input.invalid,
textarea.invalid {
  border-color: #e74c3c;
  background-color: #fdecea;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 0.5rem;
  width: auto;
}

button {
  background-color: #2c3e50;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1a2733;
}

.other-contacts ul,
.office-hours ul,
.social-links {
  list-style: none;
  padding-left: 0;
}

.other-contacts li,
.office-hours li {
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-links a {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.social-links a:hover {
  text-decoration: underline;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
} */
</style>
