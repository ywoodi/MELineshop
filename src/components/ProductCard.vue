<script setup>
import { useCart } from '../composables/useCart';

const props = defineProps({
  name: String,
  slogan: String,
  price: String,
  image: String,
  imgAlt: String,
  url: String
});

const baseURL = import.meta.env.BASE_URL;

const { addToCart } = useCart(); // no need for showToast here

function handleAdd() {
  addToCart({
    name: props.name,
    slogan: props.slogan,
    price: props.price,
    image: props.image,
    imgAlt: props.imgAlt,
    url: props.url,
    quantity: 1,
  });
}
</script>

<template>
  <article class="product-card">
    <img
      v-if="image"
      :src="baseURL + image"
      :alt="imgAlt || 'Produktbild'"
      class="product-image"
      loading="lazy"
    />
    <div class="product-content">
      <h2 class="product-title">{{ name }}</h2>
      <p class="product-description">{{ slogan }}</p>
      <p class="product-price">€ {{ price }} (inkl. MwSt., zzgl. Versand)</p>

      <div class="flex" role="group" :aria-label="`Aktionen für ${name}`">
        <router-link
          :to="{ name: 'product-view', params: { url } }"
          class="btn-secondary btn"
          :aria-label="`Details anzeigen für ${name}`"
        >
          Details Anzeigen
        </router-link>

  <button
    class="btn btn-primary"
    type="button"
    @click="handleAdd"
    :aria-label="`Füge ${name} dem Warenkorb hinzu`"
  >
    🛒 In den Warenkorb
  </button>
      </div>
    </div>
  </article>
</template>



<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--background-light);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.product-card:focus-within,
.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  flex: 1 1 auto;
}

.product-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 10px 0 0 0;
}

.product-description {
  font-size: 1rem;
  line-height: 1.5;
}

.product-price {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--accent);
  margin-top: auto; /* push price down to bottom of content area before buttons */
}

/* Button container */
.product-content .flex {
  display: flex;
  gap: 8px;
  margin-top: 1rem; /* consistent gap between price and buttons */
}

/* Buttons */
.btn-primary {
  flex: 2 1 0%;
}

.btn-secondary {
  flex: 1 1 0%;
  color: var(--text);
}

/* Screen-reader-only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-link {
    transition: none;
  }
}
</style>
