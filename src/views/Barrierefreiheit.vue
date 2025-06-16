<template>
  <section class="accessibility-statement">
    <h1>Barrierefreiheitserklärung</h1>

    <p>
      Diese Erklärung zur Barrierefreiheit gilt für die Website 
      <strong>{{ websiteName }}</strong> unter der Adresse 
      <a :href="websiteUrl">{{ websiteUrl }}</a>.
    </p>

    <h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
    <p>
      Diese Website ist <strong>teilweise mit den Anforderungen der Web-Zugänglichkeits-Richtlinie (WZG)</strong> in der derzeit geltenden Fassung vereinbar.
    </p>

    <h2>Erstellung der Erklärung</h2>
    <p>
      Diese Erklärung wurde am {{ creationDate }} erstellt. Grundlage war eine {{ evaluationMethod }}.
    </p>

    <h2>Nicht barrierefreie Inhalte</h2>
    <ul>
      <li v-for="(item, index) in issues" :key="index">
        {{ item }}
      </li>
    </ul>

    <h2>Kontakt und Feedback-Möglichkeit</h2>
    <p>
      Wenn Ihnen Barrieren auffallen oder Sie Informationen benötigen, die derzeit nicht barrierefrei verfügbar sind, kontaktieren Sie uns bitte:
    </p>
    <address>
      <strong>{{ organization }}</strong><br>
      {{ address }}<br>
      E-Mail: <a :href="`mailto:${email}`">{{ email }}</a><br>
      Telefon: <a :href="`tel:${phone}`">{{ phone }}</a>
    </address>

    <h2>Durchsetzungsverfahren</h2>
    <p>
      Wenn Sie mit unserer Antwort nicht zufrieden sind, können Sie sich an die 
      <strong>Beschwerdestelle für digitale Barrierefreiheit der Republik Österreich</strong> wenden:
    </p>
    <address>
      Unabhängige Bundes-Behindertenanwaltschaft<br>
      Babenbergerstraße 5, 1010 Wien<br>
      E-Mail: <a href="mailto:post@behindertenanwalt.gv.at">post@behindertenanwalt.gv.at</a><br>
      Website: <a href="https://www.behindertenanwalt.gv.at" target="_blank" rel="noopener">www.behindertenanwalt.gv.at</a>
    </address>
  </section>
</template>

<script setup>
const websiteName = 'Beispielseite'
const websiteUrl = 'https://www.beispielseite.at'
const creationDate = '16. Juni 2025'
const evaluationMethod = 'Selbstbewertung'

const issues = [
  'Bestimmte PDF-Dokumente sind nicht barrierefrei.',
  'Alternativtexte für Bilder sind teilweise unvollständig.',
  'Die Tastaturbedienbarkeit einzelner interaktiver Elemente ist eingeschränkt.'
]

const organization = 'Beispiel GmbH'
const address = 'Musterstraße 1, 1010 Wien'
const email = 'kontakt@beispielseite.at'
const phone = '+4312345678'
</script>

<style scoped>
.accessibility-statement {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.7;
  font-size: 1rem;
  color: #111827;
}

h1, h2 {
  color: #1e3a8a;
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

address {
  font-style: normal;
  margin-bottom: 2rem;
}
</style>
