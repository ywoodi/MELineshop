<script setup>
import { useRouter } from 'vue-router';

import { useCart } from './composables/useCart';
import Toast from './components/Toast.vue';

const { showToast, toastMessage } = useCart();


const router = useRouter();
function navigateTo(path) {
  router.push(path);
}
</script>

<template>
  <!-- Skip Link -->
  <a href="#content" class="skip-link">Zum Inhalt springen</a>

  <header>
    <nav aria-label="Main Navigation">
      <div class="container">
        <router-link to="/">
          <img
            src="/src/assets/branding/Bildmarke.png"
            alt="Bildmarke des Unternehmens 'Vegan Akes'"
            class="logo"
          />
        </router-link>
        <ul class="nav-list">
          <li>
            <router-link to="/products" class="btn btn-nav"
              >Produkte</router-link
            >
          </li>
          <li>
            <router-link to="/cart" class="btn btn-nav">Warenkorb</router-link>
          </li>
          <li>
            <router-link to="/about" class="btn btn-nav">Über uns</router-link>
          </li>

        </ul>
      </div>
    </nav>
  </header>

  <main class="container" id="content">
    <router-view />
  <Toast :show="showToast" :message="toastMessage" />

  </main>

  <footer>
    <div class="container">
      <ul class="footer-list">
        <li>
          <router-link to="/imprint" class="btn btn-footer"
            >Impressum</router-link
          >
        </li>
        <li>
          <router-link to="/dataprotection" class="btn btn-footer"
            >Datenschutz</router-link
          >
        </li>
        <li>
          <router-link to="/license" class="btn btn-footer">Lizenz</router-link>
        </li>
        <li>
          <router-link to="/accessibility" class="btn btn-footer"
            >Barrierefreiheit</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="btn btn-footer"
            >Kontakt</router-link
          >
        </li>
      </ul>
      <p class="copyright">
        &copy; {{ new Date().getFullYear() }} VeganAkes e.U. | Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* Base reset & typography */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
}

.logo {
  margin-right: auto;
  width: 85px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  align-items: center;
}

nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* a {
  color: #004080;
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  transition: background 0.2s, color 0.2s;
}

a:hover,
a:focus {
  background: #e6f0ff;
  color: #002f5e;
  outline: 2px solid #004080;
  outline-offset: 2px;
} */

/* Main content */
main {
  padding: 2rem 0;
}

/* Footer */
footer {
  border-top: 1px solid #ddd;
  margin-top: 3rem;
  padding: 2rem 0;
  text-align: center;
}

.footer-list {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin-bottom: 1rem;
  padding: 0;
}

.footer-list li {
  margin: 0;
}

/* footer a {
  font-size: 0.9rem;
}

footer a:hover,
footer a:focus {
  background: #f0f4fa;
} */

/* footer p {
  font-size: 0.85rem;
  color: #ede5e5;
  margin-top: 1rem;
} */

/* Responsive navigation */
@media (max-width: 768px) {
  .nav-list {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  nav .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    margin-bottom: 0.5rem;
  }
}

/* Visually hidden skip link until focus */
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem;
  background: #000;
  color: #fff;
  z-index: 1000;
}
</style>
