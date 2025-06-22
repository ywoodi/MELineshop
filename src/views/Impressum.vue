<template>
  <main id="main-content" class="impressum">
    <h1>Impressum und Offenlegung</h1>
    <p><em>gem. §§ 24, 25 MedienG sowie Angaben gem. § 5 ECG</em></p>

    <section aria-labelledby="inhaber">
      <h2 id="inhaber">Medieninhaber und Herausgeber</h2>
      <p>
        <strong>VeganAkes e.U.</strong><br />
        Inhaberin: Sabrina Gabriel
      </p>
    </section>

    <section aria-labelledby="unternehmensgegenstand">
      <h2 id="unternehmensgegenstand">Unternehmensgegenstand</h2>
      <p>
        Herstellung und Vertrieb von veganen und glutenfreien Backwaren (Konditorei (Zuckerbäckerei))
      </p>
    </section>

    <section aria-labelledby="anschrift">
      <h2 id="anschrift">Anschrift</h2>
      <address>
        Domgasse 10<br />
        4020 Linz<br />
        Österreich
      </address>
    </section>

    <section aria-labelledby="kontaktdaten">
      <h2 id="kontaktdaten">Kontaktdaten</h2>
      <p>
        Telefon: <a href="tel:+43732123456">+43 732 123456</a><br />
        E-Mail: 
        <a href="mailto:hello@veganakes.at">hello@veganakes.at</a><br />
        Website: 
        <a href="https://www.veganakes.at" target="_blank" rel="noopener" 
           aria-label="Externe Website veganakes.at, öffnet in neuem Tab">
          www.veganakes.at (öffnet in neuem Tab)
        </a>
      </p>
    </section>

    <section aria-labelledby="firmenbuch">
      <h2 id="firmenbuch">Firmenbuch- und Gewerbeinformationen</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer (UID-Nr.): ATU12345678<br />
        Firmenbuchnummer: FN 123456 a<br />
        Firmenbuchgericht: Landesgericht Linz<br />
        Zuständige Aufsichtsbehörde gem. E-Commerce-Gesetz: Magistrat der Stadt Linz<br />
        Kammerzugehörigkeit: Wirtschaftskammer Oberösterreich, Fachgruppe der Lebensmittelgewerbe
      </p>
    </section>

    <section aria-labelledby="vorschriften">
      <h2 id="vorschriften">Anwendbare berufsrechtliche Vorschriften</h2>
      <p>
        Österreichische Gewerbeordnung 1994 (GewO). Die geltenden Vorschriften sind über das 
        <a href="http://www.ris.bka.gv.at" target="_blank" rel="noopener" 
           aria-label="Rechtsinformationssystem des Bundes (RIS), öffnet in neuem Tab">
          Rechtsinformationssystem des Bundes (RIS) (öffnet in neuem Tab)
        </a> abrufbar.
      </p>
    </section>

    <section aria-labelledby="blattlinie">
      <h2 id="blattlinie">Blattlinie gem. § 25 Abs. 4 MedienG</h2>
      <p>
        Die Website dient der Präsentation und dem Vertrieb von veganen und glutenfreien Backwaren.
        Sie bietet Informationen zu den Produkten, zum Unternehmen sowie zur Förderung eines bewussten und genussvollen Lebensstils.
      </p>
    </section>

    <section aria-labelledby="streitbeilegung">
      <h2 id="streitbeilegung">Online-Streitbeilegung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener"
           aria-label="Plattform zur Online-Streitbeilegung der Europäischen Kommission, öffnet in neuem Tab">
          Online-Streitbeilegungsplattform (öffnet in neuem Tab)
        </a>.
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <p>
        Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen,
        sind aber grundsätzlich dazu bereit.
      </p>
    </section>
  </main>
</template>


<script>
export default {
  name: "Impressum",
};
</script>

<style scoped>
.impressum {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
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

em {
  display: block;
  margin-bottom: 1.5rem;
  color: #555;
  font-style: italic;
  font-weight: 500;
}

p {
  margin: 0.5rem 0;
  color: #444;
}

address {
  font-style: normal;
  color: #444;
  line-height: 1.5;
  margin: 0.5rem 0;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover,
a:focus {
  color: var(--primary);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .impressum {
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
