<template>
  <section class="bildnachweise" aria-labelledby="bildnachweise-heading">
    <h1 id="bildnachweise-heading">Bildnachweise</h1>

    <p>
      Die visuellen Eindrücke auf unserer Website sind uns ein besonderes Anliegen. Sie sollen die Liebe, die in jedem unserer Kuchen steckt, widerspiegeln.
      Wir freuen uns sehr, für die Gestaltung unserer Seiten die wunderschönen und professionellen Fotografien der 
      <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash-Community</a> nutzen zu dürfen.
    </p>

    <p>
      Alle auf unserer Website verwendeten Bilder stammen von Unsplash und unterliegen der 
      <a href="https://unsplash.com/license" target="_blank" rel="noopener">freien Unsplash-Lizenz</a>.
      Diese erlaubt uns die kommerzielle Nutzung der Werke. Obwohl die Lizenz keine Namensnennung vorschreibt,
      möchten wir uns auf diesem Wege aus Wertschätzung und Respekt bei den talentierten Fotografinnen und Fotografen bedanken,
      die ihre Arbeit mit der Welt teilen.
    </p>

    <p>
      Nachfolgend finden Sie eine Auflistung der auf unserer Website verwendeten Bilder und deren Urheber.
    </p>

    <h2>Allgemeine Seiten</h2>
    <ul>
      <li>
        Homepage (Header-Bild): Foto von 
        <a href="https://unsplash.com/de/fotos/schokoladenkuchen-_y5CCcYWTjU" target="_blank" rel="noopener">Henry Be</a> via Unsplash
      </li>
      <li>
        Homepage (CEO-Portrait): Foto von 
        <a href="https://unsplash.com/de/fotos/frau-im-schwarzen-langarmhemd-sitzt-auf-weisser-couch-n1B6ftPB5Eg" target="_blank" rel="noopener">Jonathan Borba</a> via Unsplash
      </li>
    </ul>

    <h2>Produktseiten</h2>
    <ul>
      <li>Apfel-Streusel-Liebe: Foto von <a href="https://unsplash.com/de/fotos/ein-teller-mit-essen-das-auf-einem-tisch-steht-d3Ywww4gq9c" target="_blank" rel="noopener">Neil Archibald</a> via Unsplash</li>
      <li>Erdnuss-Schoko-Sinfonie: Foto von <a href="https://unsplash.com/de/fotos/ein-stuck-kuchen-auf-einem-grunen-teller-cTcymThzN34" target="_blank" rel="noopener">Susu Yang</a> via Unsplash</li>
      <li>Haselnuss-Mokka-Kuss: Foto von <a href="https://unsplash.com/de/fotos/schokoladenkuchen-mit-erdbeere-oben-drauf-7FfW0pIoFJk" target="_blank" rel="noopener">Gabriel Miklós</a> via Unsplash</li>
      <li>Himbeer-Wolke: Foto von <a href="https://unsplash.com/de/fotos/erdbeerkuchen-auf-weissem-keramikteller-Rj1IWO8IozE" target="_blank" rel="noopener">Aneta Voborilova</a> via Unsplash</li>
      <li>Karotten-Glück: Foto von <a href="https://unsplash.com/de/fotos/brauner-und-weisser-kuchen-auf-durchsichtigem-plastikbehalter-OXQALgjpwkc" target="_blank" rel="noopener">Karolina Kołodziejczak</a> via Unsplash</li>
      <li>Mango-Maracuja-Sommertraum: Foto von <a href="https://unsplash.com/de/fotos/gelbe-rose-mit-grunen-blattern-7h_vPkIkzkw" target="_blank" rel="noopener">Sakshi Ranjan</a> via Unsplash</li>
      <li>Pistazien-Rosen-Torte: Foto von <a href="https://unsplash.com/de/fotos/ein-holzernes-schneidebrett-mit-einem-laib-kuchen-u7CHQEARG1s" target="_blank" rel="noopener">Parnis Azimi</a> via Unsplash</li>
      <li>Schoko-Traum: Foto von <a href="https://unsplash.com/de/fotos/ein-stuck-schokoladenkuchen-auf-einem-weissen-teller-_K-yx6wIgt8" target="_blank" rel="noopener">Yiseul Han</a> via Unsplash</li>
      <li>Schwarzwälder Kirsch-Zauber: Foto von <a href="https://unsplash.com/de/fotos/schokoladenkuchen-mit-erdbeere-auf-weissem-keramikteller-6jHpcBPw7i8" target="_blank" rel="noopener">Jacob Thomas</a> via Unsplash</li>
      <li>Zitronen-Frischekick Tarte: Foto von <a href="https://unsplash.com/de/fotos/torte-auf-weissem-keramikteller-j8ufR4H4PaE" target="_blank" rel="noopener">Kaouther Djouada</a> via Unsplash</li>
    </ul>

    <p class="update-hinweis">
      Diese Seite wird regelmäßig aktualisiert, sobald neue Bilder hinzukommen.
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Bildnachweise | VeganAkes';
});
</script>

<style scoped>
.bildnachweise {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  line-height: 1.6;
  font-family: sans-serif;
}



ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

a {
  color: var(--accent);
  text-decoration: underline;
}

a:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

.update-hinweis {
  margin-top: 2rem;
  font-style: italic;
}
</style>
