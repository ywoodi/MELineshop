<script setup></script>

<template>





  <div class="centered hero">
    <img
      src="/src/assets/branding/Wortmarke.png"
      alt="Wortmarke des Unternehmens 'VeganAkes'"
      width="700px" 
    />
    </div>

    <!-- Intro Section -->
    <section aria-labelledby="intro-heading">
      <img
      class="hero-img"
        src="/src/assets/miscImg/Schokoladenkuchen.jpg"
        alt="Eine vegane Torte auf einem Teller"
      />


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

      <router-link to="/products" class="btn btn-primary">Jetzt entdecken</router-link>
    </section>

    <!-- About Section -->
    <section aria-labelledby="about-heading">
      <h2 id="about-heading">Wer wir sind</h2>
      <img
        src="https://placehold.co/300x400"
        alt="Portrait der Gründerin Sabrina Gabriel"
      />

      <blockquote>
        <p>
          "Ich wollte beweisen, dass veganer Kuchen nicht Verzicht, sondern
          purer, ehrlicher Genuss bedeuten kann. Jeder einzelne Kuchen ist dieses
          Versprechen."
        </p>
        <footer>— Sabrina Gabriel, Gründerin von Vegan Akes</footer>
      </blockquote>

      <router-link to="/about" class="btn btn-primary">Unsere Geschichte lesen</router-link>
    </section>

    <!-- Testimonials Section -->
    <section aria-labelledby="testimonials-heading">
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
.hero-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 0% 30%;
}

.hero {
  width: 100%;
   height: 500px;
  background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("/src/assets/miscImg/Schokoladenkuchen.jpg");
    background-size: cover;
  background-position: center;
}



</style>
