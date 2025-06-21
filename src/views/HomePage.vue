<script setup>
</script>

<template>
  <!-- Hero Section -->
  <header class="hero" role="banner" aria-label="Hauptbereich">
    <img 
      class="img-shadow"
      src="/src/assets/branding/Wortmarke.png"
      alt="Wortmarke des Unternehmens 'VeganAkes'"
      width="700"
      loading="lazy"
    />
    <p class="slogan">Genuss ohne Kompromisse</p>
  </header>

  <!-- Intro Section -->
  <section aria-labelledby="intro-heading" class="centered">
    <h2 id="intro-heading">Mit Herz und Verstand in Linz gebacken.</h2>
    <p>
      Wir verbinden traditionelles Konditorhandwerk mit rein pflanzlichen
      Zutaten von höchster Qualität. Für einen vollen Geschmack, der nicht nur
      den Gaumen, sondern auch das Gewissen erfreut.
    </p>

    <h3>100% Pflanzlich</h3>
    <p>Jeder Kuchen ist garantiert frei von tierischen Produkten.</p>

    <h3>Glutenfreie Optionen</h3>
    <p>Entdecken Sie auch unsere Kreationen für eine glutenfreie Ernährung.</p>

    <h3>Echte Handarbeit</h3>
    <p>Jede Torte wird von uns mit Sorgfalt und Liebe hergestellt.</p>

    <router-link
      to="/products"
      class="btn btn-primary"
      role="button"
      aria-label="Zu unseren Produkten – Jetzt entdecken"
    >
      Jetzt entdecken
    </router-link>
  </section>

  <!-- About Section -->
  <section aria-labelledby="about-heading" class="about-section">
    <h2 id="about-heading">Wer wir sind</h2>
    <div class="about-content">
      <img 
        class="img-ceo"
        src="/src/assets/miscImg/CEO.jpg"
        alt="Portrait der Gründerin Sabrina Gabriel"
        loading="lazy"
      />
      <div class="about-text">
        <blockquote>
          <p>
            "Ich wollte beweisen, dass veganer Kuchen nicht Verzicht, sondern
            purer, ehrlicher Genuss bedeuten kann. Jeder einzelne Kuchen ist dieses
            Versprechen."
          </p>
          <footer>— Sabrina Gabriel, Gründerin von Vegan Akes</footer>
        </blockquote>
        <router-link
          to="/about"
          class="btn btn-primary btn-width"
          role="button"
          aria-label="Unsere Geschichte lesen"
        >
          Unsere Geschichte lesen
        </router-link>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
<section aria-labelledby="testimonials-heading" class="centered" role="region">
  <h2 id="testimonials-heading">Was unsere Kund:innen sagen</h2>

  <blockquote>
    <p>
      "Der beste Schokokuchen, den ich je gegessen habe — und er ist vegan!
      Absolute Empfehlung."
    </p>
    <footer>— Maria K. aus Wien</footer>
  </blockquote>

  <blockquote>
    <p>
      "Wunderschön und unglaublich lecker. Die Pistazien-Rosen-Torte war das
      Highlight auf meiner Feier! Vielen Dank!"
    </p>
    <footer>— Thomas L. aus Linz</footer>
  </blockquote>
</section>

</template>


<style scoped>

.btn-width {
  width: 200px;
  align-self: end;
}

.hero {
  width: 100%;
  /* height: calc(100vh - 90px); */
  height: 500px;
  background-image:
    linear-gradient(rgba(31, 27, 21, 0.5), rgba(26, 15, 0, 0.7)),
    url("/src/assets/miscImg/Schokoladenkuchen.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: relative;
  overflow: hidden;

  padding: 0;
  margin: 0;
  background-color: transparent;
}



/* this is your logo image over the background */
.wortmarke {
  max-width: 80%;
  height: auto;
  filter: drop-shadow(3px 3px 3px #000);
  z-index: 1;
}

.hero img {
  max-width: 90%;
  height: auto;
}

.img-shadow {
  filter: drop-shadow(3px 3px 3px #000);
}

.slogan {
  color: var(--primary);
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  text-shadow: 2px 2px 3px #000;
  margin-top: 1rem;
  font-weight: 400;
  letter-spacing: 0.1em;
}

section {
  background-color: var(--background-light);
  padding: 3rem;
  margin: 3rem 0;
  border-radius: 7px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  margin-bottom: 1.5rem;
  color: var(--accent);
}

h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.img-ceo {
  max-width: 350px;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  object-fit: cover;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
}

.about-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

blockquote {
  font-style: italic;
  color: var(--text);
  background: #f8dbbf8b;
  padding: 1rem 1.5rem;
  border-left: 4px solid var(--primary);
  border-radius: 8px;
  margin: 0;
}

blockquote footer {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #666;
}

section.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

blockquote {
  max-width: 700px;
  margin: 2rem 0;
}

blockquote p {
  font-size: 1.25rem;
}

blockquote footer {
  margin-top: 0.5rem;
  color: #666;
  font-style: normal;
  font-size: 0.95rem;
}
</style>
