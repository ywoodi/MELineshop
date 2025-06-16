<template>
  <section class="impressum">
    <h1>Impressum</h1>

    <address>
      <p><strong>{{ companyName }}</strong></p>
      <p>{{ street }}<br />{{ postalCode }} {{ city }}<br />{{ country }}</p>
    </address>

    <p><strong>Geschäftsführung:</strong> {{ managingDirector }}</p>
    <p><strong>Kontakt:</strong></p>
    <ul>
      <li>E-Mail: <a :href="`mailto:${email}`">{{ email }}</a></li>
      <li>Telefon: <a :href="`tel:${phone}`">{{ phone }}</a></li>
      <li>Fax: {{ fax }}</li>
    </ul>

    <p><strong>Firmenbuchnummer:</strong> {{ companyRegistration }}</p>
    <p><strong>UID-Nummer:</strong> {{ vatNumber }}</p>

    <p>
      Verantwortlich für den Inhalt nach § 5 TMG:<br />
      {{ responsiblePerson }}
    </p>

    <p>
      <strong>Haftungsausschluss:</strong><br />
      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
    </p>
  </section>
</template>

<script setup>
const companyName = 'Beispiel GmbH'
const street = 'Musterstraße 1'
const postalCode = '1010'
const city = 'Wien'
const country = 'Österreich'
const managingDirector = 'Max Mustermann'
const email = 'kontakt@beispielseite.at'
const phone = '+43 1 2345678'
const fax = '+43 1 2345679'
const companyRegistration = 'FN 123456 a'
const vatNumber = 'ATU12345678'
const responsiblePerson = 'Max Mustermann, Musterstraße 1, 1010 Wien'
</script>

<style scoped>
.impressum {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #111827;
  background: #f9fafb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.1);
}

h1 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

address {
  font-style: normal;
  margin-bottom: 1rem;
}

a {
  color: #2563eb;
  text-decoration: underline;
}

a:focus,
a:hover {
  color: #1e40af;
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}

ul {
  padding-left: 1.25rem;
  margin: 0.5rem 0 1.5rem;
}

strong {
  font-weight: 700;
}
</style>
