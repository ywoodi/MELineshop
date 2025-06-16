<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([])

onMounted(async () => {
  const response = await import('../assets/productData.json')
  products.value = response.default
})
</script>

<template>
<h1>Hello Products</h1>
  <section class="product-grid">
    <ProductCard
      v-for="product in products"
      :key="product.url"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :image="product.image"
      :url="product.url"
    />
  </section>
</template>





<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

</style>
