<template>
  <main id="main-content" class="contact-page">
    <h1>Haben Sie Fragen oder Wünsche?</h1>

    <p>
      Wir freuen uns, von Ihnen zu hören! Ob Sie eine Frage zu unseren Kuchen haben, eine spezielle Anfrage stellen möchten oder uns einfach nur Feedback geben wollen – hier sind Sie richtig. Wir bemühen uns, alle Anfragen so schnell wie möglich zu beantworten.
    </p>

    <section aria-labelledby="kontaktformular">
      <h2 id="kontaktformular">Kontaktformular</h2>
      <p>Nutzen Sie gerne unser Kontaktformular für eine schnelle und unkomplizierte Nachricht.</p>

      <form @submit.prevent="submitForm" novalidate aria-describedby="form-description">
        <p id="form-description" class="visually-hidden">Bitte füllen Sie alle Pflichtfelder aus. Pflichtfelder sind entsprechend gekennzeichnet.</p>

        <div class="form-group">
          <label for="name">Ihr Name <span aria-hidden="true">*</span></label>
          <input
            id="name"
            type="text"
            v-model.trim="form.name"
            required
            :class="{ invalid: errors.name }"
            aria-required="true"
            :aria-invalid="errors.name ? 'true' : 'false'"
          />
          <span v-if="errors.name" class="error-msg" role="alert">Bitte geben Sie Ihren Namen ein.</span>
        </div>

        <div class="form-group">
          <label for="email">Ihre E-Mail-Adresse <span aria-hidden="true">*</span></label>
          <input
            id="email"
            type="email"
            v-model.trim="form.email"
            required
            :class="{ invalid: errors.email }"
            aria-required="true"
            :aria-invalid="errors.email ? 'true' : 'false'"
          />
          <span v-if="errors.email" class="error-msg" role="alert">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
        </div>

        <div class="form-group">
          <label for="subject">Betreff</label>
          <input id="subject" type="text" v-model.trim="form.subject" />
        </div>

        <div class="form-group">
          <label for="message">Ihre Nachricht <span aria-hidden="true">*</span></label>
          <textarea
            id="message"
            rows="6"
            v-model.trim="form.message"
            required
            :class="{ invalid: errors.message }"
            aria-required="true"
            :aria-invalid="errors.message ? 'true' : 'false'"
          ></textarea>
          <span v-if="errors.message" class="error-msg" role="alert">Bitte geben Sie eine Nachricht ein.</span>
        </div>

        <div class="form-group checkbox-group">
          <input
            id="privacy"
            type="checkbox"
            v-model="form.privacyAccepted"
            required
            :class="{ invalid: errors.privacyAccepted }"
            aria-required="true"
            :aria-invalid="errors.privacyAccepted ? 'true' : 'false'"
          />
          <label for="privacy">
            Ich habe die
            <a href="/MELineshop/#/dataprotection" target="_blank" rel="noopener" aria-label="Link zur Datenschutzerklärung">Datenschutzerklärung</a>
            gelesen und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
          </label>
          <span v-if="errors.privacyAccepted" class="error-msg" role="alert">
            Bitte stimmen Sie der Datenschutzerklärung zu.
          </span>
        </div>

        <button type="submit">Nachricht senden</button>
      </form>
    </section>

    <section aria-labelledby="weitere-kontaktmoeglichkeiten">
      <h2 id="weitere-kontaktmoeglichkeiten">Weitere Kontaktmöglichkeiten</h2>
      <ul>
        <li>
          <strong>E-Mail:</strong>
          <a href="mailto:hello@veganakes.at">hello@veganakes.at</a>
        </li>
        <li>
          <strong>Telefon:</strong>
          <a href="tel:+43732123456">+43 732 123456</a>
        </li>
        <li>
          <strong>Anschrift:</strong><br />
          VeganAkes e.U.<br />
          Domgasse 10<br />
          4020 Linz<br />
          Österreich
        </li>
      </ul>
    </section>

    <section aria-labelledby="erreichbarkeit">
      <h2 id="erreichbarkeit">Erreichbarkeit</h2>
      <ul>
        <li>Montag - Freitag: 09:00 - 17:00 Uhr</li>
        <li>Wochenenden &amp; Feiertage: Geschlossen</li>
      </ul>
    </section>

    <section aria-labelledby="folgen-sie-uns">
      <h2 id="folgen-sie-uns">Folgen Sie uns</h2>
      <ul class="social-links">
        <li>
          <a href="https://www.instagram.com/veganakes" target="_blank" rel="noopener" aria-label="Instagram-Profil von VeganAkes (externer Link)">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/veganakes" target="_blank" rel="noopener" aria-label="Facebook-Seite von VeganAkes (externer Link)">Facebook</a>
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
main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #222;
  line-height: 1.6;
}

/* h1 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #111;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
} */

h2 {
  font-weight: 600;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid var(--primary);
  padding-left: 0.5rem;
}

p {
  margin: 0.5rem 0;
  color: #444;
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
  background-color: var(--primary);
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

ul {
  list-style: none;
  padding-left: 0;
  color: #444;
}

li {
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-links a {
  color: var(--accent);
  text-decoration: none;
  font-weight: bold;
}

.social-links a:hover {
  text-decoration: underline;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  color: var(--primary);
  text-decoration: underline;
}

@media (max-width: 480px) {
  main {
    padding: 0 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.1rem;
  }
}
</style>
