<script setup>

const props = defineProps({
  name: String,
  slogan: String,
  price: String,
  image: String,
  imgAlt: String,
  url: String
});


</script>


<template>
  <article class="product-card">
    <img
      v-if="image"
      :src="image"
      :alt="imgAlt"
      class="product-image"
      
    />
    <div class="product-content">
      <h2 class="product-title">{{ name }}</h2>
      <p class="product-description">{{ slogan }}</p>
      <p class="product-price">€ {{ price }} (inkl. MwSt., zzgl. Versand)</p>

      <div class="flex">
        <router-link
          :to="{ name: 'product-view', params: { url } }"
          class="btn-secondary btn"
          :aria-label="`View details for ${name}`"
        >
          View Details
        </router-link>

        <button
          class="btn btn-primary"
          type="button"
          :aria-label="`Add ${name} to cart`"
        >
          🛒 Add to Cart
          <span class="sr-only">Add to cart</span>
        </button>
      </div>
    </div>
  </article>
</template>



<style scoped>
.flex {
  display: flex;
  gap: 8px;
}

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

.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--background-light);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
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
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0;
}

.product-description {
  font-size: 1rem;
  line-height: 1.5;
}

.product-price {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--accent);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-link {
    transition: none;
  }
}
</style>
