<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function navigateTo(path) {
  router.push(path);
}
</script>

<template>
  <header>
    <nav aria-label="Main Navigation">
      <div class="container">
        <h1 class="logo">MyShop</h1>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container">
    <router-view />
  </main>

  <footer>
    <div class="container">
      <ul class="footer-list">
        <li><router-link to="/imprint">Impressum</router-link></li>
        <li><router-link to="/dataprotection">Datenschutz</router-link></li>
        <li><router-link to="/license">Lizenz</router-link></li>
        <li><router-link to="/accessibility">Barrierefreiheit</router-link></li>
      </ul>
      <p class="copyright">
        &copy; {{ new Date().getFullYear() }} MyShop. All rights reserved.
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
  background: #f7f9fc;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Header & Navigation */
header {
  background: #ffffff;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.5rem;
  color: #004080;
  margin-right: auto;
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

a {
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
}

/* Main content */
main {
  padding: 2rem 0;
}

/* Footer */
footer {
  background: #ffffff;
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

footer a {
  font-size: 0.9rem;
}

footer a:hover,
footer a:focus {
  background: #f0f4fa;
}

footer p {
  font-size: 0.85rem;
  color: #666;
  margin-top: 1rem;
}

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
</style>
