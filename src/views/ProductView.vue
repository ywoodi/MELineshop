<script setup>
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import products from '../assets/data/productData.json';
import { useCart } from '../composables/useCart';

const route = useRoute();
const productUrl = route.params.url;
const product = computed(() => products.find(p => p.url === productUrl));
const baseURL = import.meta.env.BASE_URL;

const { addToCart } = useCart();

function handleAdd() {
  if (product.value) addToCart(product.value);
}

const formattedPrice = computed(() => {
  if (!product.value || !product.value.price) return '';
  return Number(product.value.price).toFixed(2).replace('.', ',');
});
</script>
<template>
  <div v-if="product" class="product-page">
    <section class="product-main" aria-labelledby="product-name">
      <div class="product-image">
        <img 
          :src="baseURL + product.image" 
          :alt="product.imgAlt || product.name + ' Produktbild'" 
          loading="lazy" 
        />
      </div>
      <div class="product-details">
        <h1 id="product-name" class="product-name">{{ product.name }}</h1>
        <p class="product-slogan">
          <em>{{ product.slogan }}</em>
        </p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">
          <strong>€ {{ formattedPrice }} (inkl. MwSt., zzgl. Versand)</strong>
        </p>
        <button 
          class="btn btn-primary" 
          @click="handleAdd"
          :aria-label="`Füge ${product.name} dem Warenkorb hinzu`"
        >
          In den Warenkorb
        </button>
      </div>
    </section>

    <section class="product-ingredients" aria-labelledby="ingredients-heading">
      <h2 id="ingredients-heading">Zutaten</h2>
      <div
        v-for="(ingredientsList, subcategory) in product.ingredients"
        :key="subcategory"
        class="ingredients-subcategory"
      >
        <h3 class="ingredients-subcategory-title">{{ subcategory }}</h3>
        <p class="ingredients-list">{{ ingredientsList }}</p>
      </div>
    </section>

    <section class="product-allergens" aria-labelledby="allergens-heading">
      <h2 id="allergens-heading">Allergene</h2>
      <p class="allergens-list">{{ product.allergens }}</p>
    </section>

    <section class="product-nutrition" aria-labelledby="nutrition-heading">
      <h2 id="nutrition-heading">Nährwertangaben (pro 100g)</h2>
      <div
        v-for="(info, label) in product.nutrition"
        :key="label"
        class="nutrition-info"
      >
        <strong class="nutrition-label">{{ label }}:</strong> {{ info }}
      </div>
    </section>

    <section class="product-storage" aria-labelledby="storage-heading">
      <h2 id="storage-heading">Lagerung</h2>
      <p class="storage-info">{{ product.storage }}</p>
    </section>
  </div>

  <div v-else class="product-not-found" role="alert" aria-live="assertive">
    <h1>Produkt nicht gefunden.</h1>
  </div>
</template>



<style scoped>

.btn {
  max-width: 200px;
  margin-top: 2rem;
}

.product-page {
  color: var(--text);
  margin: 0 auto;
  padding: 2rem 1rem;
}

.product-main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background: var(--background-light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(136, 95, 48, 0.15);
  margin-bottom: 2rem;
}

.product-image {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 600px;
  aspect-ratio: 1/1;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(136, 95, 48, 0.25);
  object-fit: cover;
}

.product-details {
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 4rem;
  /* color: var(--primary); */
  margin-bottom: 0.25rem;
}

.product-slogan {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
}

.product-description {
  line-height: 1.5;
  margin-bottom: 1rem;
}

.product-price {
  color: var(--accent);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.product-ingredients,
.product-allergens,
.product-nutrition,
.product-storage {
  background: var(--background-light);
  border-radius: 10px;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(136, 95, 48, 0.1);
}

.product-ingredients h2,
.product-allergens h2,
.product-nutrition h2,
.product-storage h2 {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 1rem;
  /* border-bottom: 2px solid var(--secondary); */
  padding-bottom: 0.3rem;
  max-width: max-content;
}

.ingredients-subcategory {
  margin-bottom: 1rem;
}

.ingredients-subcategory-title {
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.nutrition-info {
  margin-bottom: 0.5rem;
}

.nutrition-label {
  color: var(--primary);
}

.product-not-found {
  color: var(--accent);
  text-align: center;
  margin-top: 4rem;
}

@media (max-width: 700px) {
  .product-main {
    flex-direction: column;
  }

  .product-details {
    flex: unset;
  }
}
</style>
