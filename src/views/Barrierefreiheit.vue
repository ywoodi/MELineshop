<template>
  <main class="barrierefreiheit-page">
    <h1>Erklärung zur Barrierefreiheit</h1>
    <p><strong>Stand:</strong> 19. Juni 2025</p>
    <p>
      VeganAkes e.U. ist bemüht, die Website <a href="https://www.veganakes.at" target="_blank" rel="noopener">www.veganakes.at</a> im Einklang mit dem Web-Zugänglichkeits-Gesetz (WZG) zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates barrierefrei zugänglich zu machen.
    </p>
    <p>
      Unser Ziel ist es, allen Menschen, unabhängig von ihren technischen oder körperlichen Fähigkeiten, einen uneingeschränkten Zugang zu unseren Produkten und Informationen zu ermöglichen.
    </p>

    <section>
      <h2>1. Stand der Konformität mit den Anforderungen</h2>
      <p>
        Diese Website ist wegen der nachstehend angeführten Unvereinbarkeiten teilweise konform mit der Konformitätsstufe AA der „Richtlinien für barrierefreie Webinhalte – WCAG 2.2“.
        Wir arbeiten kontinuierlich daran, alle Inhalte so zugänglich wie möglich zu gestalten.
      </p>
    </section>

    <section>
      <h2>2. Nicht barrierefreie Inhalte</h2>
      <p>Die nachstehend angeführten Inhalte sind aus folgenden Gründen noch nicht vollständig barrierefrei:</p>
      <ol type="a">
        <li>
          <strong>Unverhältnismäßige Belastung</strong><br />
          Derzeit sind uns keine Mängel bekannt, die unter die unverhältnismäßige Belastung fallen würden. Sollten uns solche bekannt werden, werden sie hier angeführt.
        </li>
        <li>
          <strong>Inhalte, die nicht in den Anwendungsbereich der Rechtsvorschriften fallen</strong><br />
          Inhalte von Dritten: Auf unserer Website können Inhalte von Drittanbietern eingebunden sein, die nicht in unserem direkten Einflussbereich liegen und möglicherweise nicht vollständig barrierefrei sind. Dazu können gehören:
          <ul>
            <li>Kartenmaterial: Eine eventuell zur Standortanzeige eingebundene interaktive Karte (z.B. Google Maps).</li>
            <li>Zahlungsdienstleister: Eingebettete Formulare oder Weiterleitungen zu externen Zahlungsanbietern im Check-out-Prozess.</li>
          </ul>
          Wir bemühen uns, bei der Auswahl von Drittanbieter-Tools auf deren Zugänglichkeit zu achten.
        </li>
      </ol>
    </section>

    <section>
      <h2>3. Erstellung dieser Erklärung zur Barrierefreiheit</h2>
      <p>
        Diese Erklärung wurde am 19. Juni 2025 erstellt.<br />
        Die Bewertung der Konformität der Website wurde durch eine Selbstbewertung unseres Unternehmens auf Basis der WCAG 2.2 AA-Kriterien durchgeführt.
      </p>
    </section>

    <section>
      <h2>4. Feedback und Kontaktangaben</h2>
      <p>
        Sollten Ihnen Barrieren auffallen, die Sie an der Nutzung unserer Website hindern – Probleme, die in dieser Erklärung nicht beschrieben sind, oder Mängel in Bezug auf die Einhaltung der Barrierefreiheitsanforderungen – bitten wir Sie, uns diese mitzuteilen.
      </p>
      <p>
        Ihr Feedback ist ein wichtiger Teil unseres Verbesserungsprozesses. Bitte kontaktieren Sie uns per E-Mail und beschreiben Sie das Problem so genau wie möglich:
      </p>
      <ul>
        <li>
          E-Mail: <a href="mailto:barrierefreiheit@veganakes.at">barrierefreiheit@veganakes.at</a>
        </li>
        <li>Betreff: Meldung einer Barriere auf www.veganakes.at</li>
      </ul>
      <p>
        Wir werden Ihre Anfrage sorgfältig prüfen und uns bemühen, die gemeldete Barriere zeitnah zu beheben.
      </p>
    </section>

    <section>
      <h2>5. Durchsetzungsverfahren</h2>
      <p>
        Sollten Sie mit der Antwort aus der oben genannten Kontaktmöglichkeit nicht zufrieden sein, können Sie sich an die Österreichische Forschungsförderungsgesellschaft mbH (FFG) wenden. Die FFG betreibt die Beschwerdestelle für digitale Barrierefreiheit.
      </p>
      <p>
        Die Beschwerden werden dahingehend geprüft, ob sie sich auf Verstöße gegen die Vorgaben des Web-Zugänglichkeits-Gesetzes beziehen. Sofern die Beschwerde berechtigt ist, hat die Beschwerdestelle Handlungsempfehlungen auszusprechen und Maßnahmen vorzuschlagen, die der Beseitigung der vorliegenden Mängel dienen.
      </p>
      <p>
        Weitere Informationen zum Beschwerdeverfahren und das Kontaktformular finden Sie auf der Website der FFG: <a href="https://www.ffg.at/digitale-barrierefreiheit" target="_blank" rel="noopener">www.ffg.at/digitale-barrierefreiheit</a>
      </p>
    </section>

    <p class="note">
      <strong>Wichtig:</strong> Diese Erklärung sollte, wie auch Impressum und AGB, von jeder Seite Ihrer Website aus leicht erreichbar sein, z.B. im Footer.
    </p>
  </main>
</template>

<script>
export default {
  name: "BarrierefreiheitErklaerung",
};
</script>

<style scoped>
.barrierefreiheit-page {
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.5;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
  outline: none;
}

ol {
  padding-left: 1.5rem;
}

.note {
  margin-top: 3rem;
  font-weight: bold;
  color: #555;
}
</style>
