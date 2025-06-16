<template>
  <article class="product-card">
    <img
      v-if="image"
      :src="image"
      :alt="name"
      class="product-image"  
    />
    <div class="product-content">
      <h2 class="product-title">{{ name }}</h2>
      <p class="product-description">{{ description }}</p>
      <p class="product-price">{{ price }}</p>
<router-link
  :to="{ name: 'product-view', params: { url } }"
  class="product-link"
  :aria-label="`View details for ${name}`"
>
  View Details
</router-link>


    </div>
  </article>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: String,
  image: String,
  url: String
})
</script>

<style scoped>.product-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
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
  height: auto;
  object-fit: cover;
}

.product-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827; /* dark grey */
  margin: 0;
}

.product-description {
  font-size: 1rem;
  color: #374151; /* medium grey */
  line-height: 1.5;
}

.product-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}

.product-link {
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: #2563eb; /* blue-600 */
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.product-link:hover,
.product-link:focus {
  background-color: #1e40af; /* blue-800 */
  outline: 3px solid #93c5fd; /* light blue outline */
  outline-offset: 2px;
}

.product-link:focus {
  box-shadow: 0 0 0 3px #93c5fd;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-link {
    transition: none;
  }
}

</style>

